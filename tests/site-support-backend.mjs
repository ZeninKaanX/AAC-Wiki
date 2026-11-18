// Run with Node >=24. This checks the Edge handler; database integration is separate.
import {readFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const token='A'.repeat(43),tokenHash=createHash('sha256').update(token).digest('hex');
let handler,behavior='normal',calls=[];
const Deno={env:{get:name=>({SUPABASE_URL:'https://example.supabase.co',WIKI_SERVICE_KEY:'sb_secret_test'})[name]},serve:fn=>handler=fn};
const database=async(url,options={})=>{
 calls.push({url,options});assert.equal(options.headers.get('apikey'),'sb_secret_test');assert.equal(options.headers.has('Authorization'),false);
 if(url.includes('wiki_feedback_settings'))return Response.json([{admin_token_hash:tokenHash,rate_salt:'test-salt'}]);
 if(url.includes('rpc/wiki_feedback_submit'))return behavior==='rate'?Response.json({message:'rate_limit'},{status:400}):Response.json('b800c68c-97fc-4c8a-8757-d860dce8bfb0');
 if(options.method==='PATCH')return Response.json(behavior==='conflict'?[]:[{id:payload.request_id,status:'cozuldu',admin_note:'Düzeltildi.',updated_at:'2026-11-18T12:01:00Z'}]);
 return Response.json([{title:'<img src=x onerror=alert(1)>',nickname:'Raphaell'}],{headers:{'Content-Range':'0-0/1'}});
};
const code=stripTypeScriptTypes(readFileSync(new URL('../site-destek/backend/index.ts',import.meta.url),'utf8'));
new Function('Deno','fetch',code)(Deno,database);
const payload={request_id:'1797b51a-52e6-4aaf-95ab-3aca58613d5d',wiki:'aac',category:'oneri',nickname:'Test',section:'Rehber',title:'Yeni bölüm önerisi',description:'Örneklerin çoğaltılmasını öneriyorum.',website:''};
async function request(action,method='GET',body,auth,origin='https://astralissaga.xyz'){
 const headers={'Content-Type':'application/json','Origin':origin};if(auth)headers.Authorization='Bearer '+auth;
 return handler(new Request('https://example.supabase.co/functions/v1/wiki-support?action='+action,{method,headers,body:body===undefined?undefined:JSON.stringify(body)}));
}
assert.equal((await request('list')).status,401);
assert.equal((await request('list','GET',undefined,'B'.repeat(43))).status,401);
assert.equal((await request('list','GET',undefined,token)).status,200);
assert.equal((await request('list','POST',payload,token)).status,405);
assert.equal((await request('submit','POST',payload)).status,201);
assert.equal((await request('submit','POST',{...payload,category:'unknown'})).status,400);
assert.equal((await request('submit','POST',{...payload,description:'x'.repeat(701)})).status,400);
assert.equal((await request('submit','POST',{...payload,website:'spam'})).status,400);
assert.equal((await request('submit','POST',payload,undefined,'https://attacker.invalid')).status,403);
assert.equal((await request('submit','POST',{...payload,extra:'x'.repeat(13000)})).status,413);
behavior='rate';assert.equal((await request('submit','POST',payload)).status,429);behavior='normal';
const update={id:payload.request_id,status:'cozuldu',admin_note:'Düzeltildi.',updated_at:'2026-11-18T12:00:00Z'};
assert.equal((await request('update','PATCH',update)).status,401);
assert.equal((await request('update','PATCH',update,token)).status,200);
behavior='conflict';assert.equal((await request('update','PATCH',update,token)).status,409);
assert.equal((await request('update','PATCH',{...update,status:'invalid'},token)).status,400);
console.log('PASS: capability authorization, public validation, CORS, size limits, rate-limit handling, safe update and conflict handling');
