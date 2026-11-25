'use strict';
const assert=require('node:assert/strict'),E=require('../mulakat/engine.js');
const fixed=1795608000000;
assert.equal(E.catalogue.length,120);
assert.equal(new Set(E.catalogue.map(c=>c.id)).size,120);
assert.equal(E.families.length,10);
assert.deepEqual(Object.keys(E.tools).sort(),['explorer','everything','journal','journaltrace','downloads','history','activity','prefetch','usb','atlas'].sort());
assert.deepEqual(E.create(48,fixed),E.create(48,fixed));
const previous=E.create(48,fixed),next=E.create(48,fixed,null,previous.caseIds);assert.ok(next.caseIds.every(id=>!previous.caseIds.includes(id)),'Consecutive sessions must not reuse cases');
function fullNotes(s){const notes={},byArtifact=new Map();for(const source of [...Object.keys(E.tools),'metadata'])for(const row of E.rows(s,source)){if(!byArtifact.has(row.artifact))byArtifact.set(row.artifact,[]);byArtifact.get(row.artifact).push({key:row.id,source,text:row.detail});}for(const a of s.artifacts)notes[a.id]={evidence:byArtifact.get(a.id)||[],verdict:a.status,usage:'unproven'};return notes;}
for(const c of E.catalogue){
 const s=E.create(100,fixed,[c.id]);assert.equal(s.caseIds[0],c.id);
 const a=s.artifacts.find(a=>a.caseId===c.id);assert.ok(a);assert.match(a.hash,/^[a-f0-9]{64}$/);
 assert.ok(!a.path.includes('undefined'));assert.equal(E.evaluate(s,fullNotes(s)).score,100,c.title+' must be solvable with allowed tools');
 if(a.status==='deleted'){assert.ok(!E.rows(s,'explorer').some(r=>r.artifact===a.id));assert.ok(E.rows(s,'journal').some(r=>r.artifact===a.id&&r.action==='FILE_DELETE'));assert.ok(!E.rows(s,'metadata').some(r=>r.artifact===a.id));}
 if(a.pattern==='usb-copy'){const notes=fullNotes(s);notes[a.id].evidence=notes[a.id].evidence.filter(e=>e.source!=='usb');assert.equal(E.evaluate(s,notes).items.find(i=>i.id===a.id).support,false,'USB case requires actual USB evidence');}
}
const seen=new Set(),fingerprints=new Set();
for(let seed=1;seed<=500;seed++){
 const s=E.create(seed,fixed);s.caseIds.forEach(id=>seen.add(id));
 assert.ok(s.scenarioCount>=4&&s.scenarioCount<=5);
 assert.equal(new Set(s.artifacts.map(a=>a.path)).size,s.artifacts.length);
 assert.equal(E.evaluate(s,{}).score,0);
 const notes=fullNotes(s);assert.equal(E.evaluate(s,notes).score,100);
 const clean=s.artifacts.find(a=>a.status==='clean');notes[clean.id].verdict='active';assert.equal(E.evaluate(s,notes).falsePositives,1);assert.ok(E.evaluate(s,notes).score<100);
 assert.ok(E.rows(s,'everything','ext:jar').every(row=>row.name.endsWith('.jar')));
 assert.ok(E.rows(s,'everything','*.jar').every(row=>row.name.endsWith('.jar')));
 assert.deepEqual(E.rows(s,'journaltrace'),E.rows(s,'journal'));
 fingerprints.add(s.artifacts.map(a=>a.path+':'+a.modId).join('|'));
}
assert.equal(seen.size,120,'Random sessions must reach the whole case catalogue');assert.equal(fingerprints.size,500);
console.log('PASS: all 120 cases solvable with the approved 8 tools + AtlasAC, 500 random sessions, full catalogue coverage, USB evidence requirements, scoring and source consistency.');

// One-click findings: no manual verdict or source checklist is required.
{const s=E.create(9234,fixed),notes={};assert.ok(s.artifacts.length>80);const targets=s.artifacts.filter(a=>a.status!=='clean');notes[targets[0].id]={found:true};assert.equal(E.evaluateFound(s,notes).identified,1);assert.equal(E.evaluateFound(s,notes).marked,1);for(const a of targets)notes[a.id]={found:true};assert.equal(E.evaluateFound(s,notes).score,100);const clean=s.artifacts.find(a=>a.status==='clean');notes[clean.id]={found:true};assert.equal(E.evaluateFound(s,notes).falsePositives,1);assert.equal(E.evaluateFound(s,notes).score,90);notes[clean.id].found=false;assert.equal(E.evaluateFound(s,notes).score,100);assert.equal(E.evaluateFound(s,notes).missed,0);}
console.log('PASS: single-click findings, unique counting, undo, misses, ordinary player files and false-positive penalty.');

{const s=E.create(831,fixed),a=s.artifacts.find(a=>a.caseId&&a.status!=='deleted');a.status='clean';assert.ok(E.rows(s,'atlas').some(r=>r.artifact===a.id),'AtlasAC must match known content identity, not scoring label');assert.ok(E.rows(s,'usb').every(r=>!r.detail.includes('SHA-256')&&!r.detail.includes('Hedef:')));assert.ok(E.rows(s,'everything','ext:jar !library').every(r=>r.name.endsWith('.jar')&&!r.name.includes('library')));assert.ok(E.rows(s,'everything','folder:').every(r=>r.sourcefolder));assert.ok(E.rows(s,'everything','file: *.dll').every(r=>!r.sourcefolder&&r.name.endsWith('.dll')));}
console.log('PASS: content-driven Atlas scan, real USB field scope, Everything folder/file/NOT operators.');
