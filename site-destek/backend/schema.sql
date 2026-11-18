-- Applied through Supabase migrations. Public clients have no table/RPC privileges.
create table public.wiki_feedback (
 id uuid primary key default gen_random_uuid(),
 request_id uuid not null unique,
 wiki text not null check (wiki in ('aac','rehber')),
 category text not null check (category in ('eksik-bilgi','hatali-bilgi','arac-hatasi','video-gorsel','gorunum','oneri','diger')),
 nickname text not null check (char_length(nickname) between 2 and 40),
 section text not null default '' check (char_length(section)<=80),
 title text not null check (char_length(title) between 5 and 80),
 description text not null check (char_length(description) between 10 and 700),
 status text not null default 'yeni' check (status in ('yeni','inceleniyor','planlandi','cozuldu','uygulanmadi')),
 admin_note text not null default '' check (char_length(admin_note)<=1000),
 created_at timestamptz not null default clock_timestamp(),
 updated_at timestamptz not null default clock_timestamp()
);
create index wiki_feedback_created_idx on public.wiki_feedback(created_at desc);
create index wiki_feedback_status_idx on public.wiki_feedback(status,created_at desc);
create table public.wiki_feedback_settings (
 id boolean primary key default true check (id),
 admin_token_hash text not null check (admin_token_hash ~ '^[a-f0-9]{64}$'),
 rate_salt text not null
);
create table public.wiki_feedback_limits (
 bucket text primary key,
 hits integer not null,
 expires_at timestamptz not null
);
alter table public.wiki_feedback enable row level security;
alter table public.wiki_feedback_settings enable row level security;
alter table public.wiki_feedback_limits enable row level security;
revoke all on public.wiki_feedback,public.wiki_feedback_settings,public.wiki_feedback_limits from anon,authenticated;
grant select,insert,update,delete on public.wiki_feedback,public.wiki_feedback_settings,public.wiki_feedback_limits to service_role;
create policy wiki_feedback_service_only on public.wiki_feedback for all to service_role using (true) with check (true);
create policy wiki_feedback_settings_service_only on public.wiki_feedback_settings for all to service_role using (true) with check (true);
create policy wiki_feedback_limits_service_only on public.wiki_feedback_limits for all to service_role using (true) with check (true);
create function public.wiki_feedback_submit(p_request uuid,p_wiki text,p_category text,p_nickname text,p_section text,p_title text,p_description text,p_client text)
returns uuid language plpgsql security invoker set search_path='' as $$
declare result uuid; inserted_count integer; ip_window bigint:=floor(extract(epoch from now())/900); global_window bigint:=floor(extract(epoch from now())/3600);
begin
 select id into result from public.wiki_feedback where request_id=p_request;
 if result is not null then return result; end if;
 delete from public.wiki_feedback_limits where expires_at<now();
 insert into public.wiki_feedback_limits(bucket,hits,expires_at) values('global:'||global_window,1,now()+interval '2 hours')
 on conflict(bucket) do update set hits=wiki_feedback_limits.hits+1 where wiki_feedback_limits.hits<100;
 get diagnostics inserted_count=row_count;
 if inserted_count=0 then raise exception 'rate_limit' using errcode='P0001'; end if;
 insert into public.wiki_feedback_limits(bucket,hits,expires_at) values('client:'||p_client||':'||ip_window,1,now()+interval '30 minutes')
 on conflict(bucket) do update set hits=wiki_feedback_limits.hits+1 where wiki_feedback_limits.hits<5;
 get diagnostics inserted_count=row_count;
 if inserted_count=0 then raise exception 'rate_limit' using errcode='P0001'; end if;
 insert into public.wiki_feedback(request_id,wiki,category,nickname,section,title,description)
 values(p_request,p_wiki,p_category,p_nickname,p_section,p_title,p_description)
 on conflict(request_id) do update set request_id=excluded.request_id returning id into result;
 return result;
end; $$;
revoke all on function public.wiki_feedback_submit(uuid,text,text,text,text,text,text,text) from public,anon,authenticated;
grant execute on function public.wiki_feedback_submit(uuid,text,text,text,text,text,text,text) to service_role;
