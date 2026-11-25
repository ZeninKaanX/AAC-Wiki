'use strict';
const assert=require('node:assert/strict');
const E=require('../mulakat/engine.js');
const fixed=1795608000000;
assert.deepEqual(E.create(48,fixed),E.create(48,fixed),'Same seed and time must reproduce the session');
const fingerprints=new Set();
for(let seed=1;seed<=300;seed++){
 const s=E.create(seed,fixed),ids=new Set(s.artifacts.map(a=>a.id));
 assert.equal(ids.size,s.artifacts.length);
 assert.ok(s.scenarioCount>=3&&s.scenarioCount<=5);
 assert.ok(s.artifacts.some(a=>a.status==='clean'));
 assert.equal(new Set(s.artifacts.map(a=>a.path)).size,s.artifacts.length);
 assert.equal(E.evaluate(s,{}).score,0);
 const notes={};
 for(const a of s.artifacts){
  assert.match(a.hash,/^[a-f0-9]{64}$/);
  assert.ok(!a.path.includes('undefined'));
  if(a.status==='active')assert.equal(a.folder,s.game+'\\mods');
  if(a.status==='deleted'){
   assert.ok(!E.rows(s,'explorer').some(r=>r.artifact===a.id));
   assert.ok(s.events.some(e=>e.artifact===a.id&&e.action==='FILE_DELETE'));
   assert.ok(!E.rows(s,'metadata').some(r=>r.artifact===a.id));
  }
  const evidence=[];
  for(const source of Object.keys(E.tools))for(const row of E.rows(s,source))if(row.artifact===a.id)evidence.push({key:row.id,source,text:row.detail});
  notes[a.id]={evidence,verdict:a.status,usage:'unproven'};
 }
 assert.equal(E.evaluate(s,notes).score,100,'All justified answers can reach 100');
 const clean=s.artifacts.find(a=>a.status==='clean');notes[clean.id].verdict='active';
 assert.equal(E.evaluate(s,notes).falsePositives,1);
 assert.ok(E.evaluate(s,notes).score<100);
 const a=s.artifacts.find(a=>a.status!=='clean');notes[a.id]={verdict:a.status,usage:'unproven',evidence:[]};
 const item=E.evaluate(s,notes).items.find(x=>x.id===a.id);
 assert.equal(item.content,false);assert.equal(item.support,false);assert.equal(item.points,45,'A guessed classification gets no evidence credit');
 const hit=E.rows(s,'everything',clean.name);assert.ok(hit.some(r=>r.artifact===clean.id));
 fingerprints.add(s.artifacts.map(a=>a.path+':'+a.modId).join('|'));
}
assert.equal(fingerprints.size,300,'Random sessions must vary');
console.log('PASS: 300 randomized sessions, reproducibility, deleted-file consistency, clean distractors, evidence scoring and searches.');
