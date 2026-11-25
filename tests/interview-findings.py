import tempfile,subprocess,socket,json,time,threading,http.server,functools,base64
from pathlib import Path
root=Path(__file__).resolve().parents[1]
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args): pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',8769),functools.partial(Quiet,directory=str(root)))
threading.Thread(target=server.serve_forever,daemon=True).start()
profile=tempfile.TemporaryDirectory(prefix='acr-firefox-')
Path(profile.name,'user.js').write_text('user_pref("marionette.port",2861);\nuser_pref("browser.shell.checkDefaultBrowser",false);\nuser_pref("media.autoplay.default",5);')
log=open('/tmp/acr-firefox.log','w')
proc=subprocess.Popen(['firefox','--headless','--no-remote','--profile',profile.name,'--marionette'],stdout=log,stderr=log)
s=None;seq=0
try:
 for _ in range(100):
  try: s=socket.create_connection(('127.0.0.1',2861),timeout=2);break
  except OSError: time.sleep(.2)
 assert s
 s.settimeout(40)
 def recv():
  n=b''
  while (c:=s.recv(1))!=b':':
   if not c: raise EOFError
   n+=c
  data=b''
  while len(data)<int(n):data+=s.recv(int(n)-len(data))
  return json.loads(data)
 recv()
 def cmd(name,args={}):
  global seq
  seq+=1
  body=json.dumps([0,seq,name,args]).encode();s.sendall(str(len(body)).encode()+b':'+body)
  r=recv()
  if r[2]:raise RuntimeError(r[2])
  return r[3]
 def js(script):return cmd('WebDriver:ExecuteScript',{'script':script,'args':[],'newSandbox':False})['value']
 cmd('WebDriver:NewSession',{'capabilities':{'alwaysMatch':{'acceptInsecureCerts':True}}})
 cmd('WebDriver:SetWindowRect',{'width':1600,'height':1050})
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/mulakat/'})
 time.sleep(.4)
 js("document.querySelector('[data-action=new]').click();document.querySelector('[data-tool=everything]').click();return true")
 assert js("return document.querySelectorAll('.window-active tbody tr').length>80 && !document.querySelector('.tools-sidebar') && document.documentElement.scrollHeight===innerHeight")
 def search(text):
  return js("const e=document.getElementById('tool-query');e.value="+json.dumps(text)+";e.dispatchEvent(new Event('input',{bubbles:true}));return true")
 search('ext:jar !library')
 assert js("return [...document.querySelectorAll('.window-active tbody tr')].every(e=>e.querySelector('td').textContent.includes('.jar'))")
 search('*.dll')
 assert js("return document.querySelectorAll('.window-active [data-capture]').length===1")
 js("document.querySelector('.window-active [data-capture]').click();return true")
 assert js("return Object.values(JSON.parse(sessionStorage.getItem('atlas-interview-v1')).notes).filter(n=>n.found).length===1 && !document.getElementById('note-verdict') && document.getElementById('found-count').textContent==='1'")
 js("document.querySelector('.window-active [data-capture]').click();return true")
 assert js("return Object.values(JSON.parse(sessionStorage.getItem('atlas-interview-v1')).notes).filter(n=>n.found).length===1")
 js("document.querySelector('[data-action=notes]').click();document.querySelector('[data-unfind]').click();return true")
 assert js("return Object.values(JSON.parse(sessionStorage.getItem('atlas-interview-v1')).notes).filter(n=>n.found).length===0")
 js("document.querySelector('[data-action=notes-close]').click();return true")
 search('folder:')
 assert js("return document.querySelectorAll('.window-active [data-directory]').length>10 && !document.querySelector('.window-active [data-capture]')")
 js("document.querySelector('.window-active [data-directory]').dispatchEvent(new MouseEvent('dblclick',{bubbles:true}));return true")
 assert js("return !!document.querySelector('.window-active .explorer-tree')")
 js("const p=JSON.parse(sessionStorage.getItem('atlas-interview-v1')).session.game;document.querySelector('.window-active [data-nav=\"'+CSS.escape(p)+'\"]').click();return true")
 assert js("return document.querySelectorAll('.window-active [data-directory]').length>=2")
 js("const b=[...document.querySelectorAll('.window-active [data-directory]')].find(x=>x.dataset.directory.endsWith('mods'));b.dispatchEvent(new MouseEvent('dblclick',{bubbles:true}));return true")
 assert js("return document.getElementById('explorer-address').value.endsWith('mods') && document.querySelectorAll('.window-active [data-capture]').length>=3")
 js("document.querySelector('[data-action=explorer-up]').click();return true")
 assert js("return !document.getElementById('explorer-address').value.endsWith('mods')")
 js("document.querySelector('[data-action=explorer-back]').click();return true")
 assert js("return document.getElementById('explorer-address').value.endsWith('mods')")
 # Sources use different real application operations; no universal double-click into AtlasAC.
 js("document.querySelector('[data-action=apps-folder]').click();document.querySelector('dialog [data-tool=downloads]').click();return true")
 assert js("return !!document.querySelector('.window-active .nirsoft-toolbar') && document.querySelectorAll('.window-active th').length>=6")
 js("document.querySelector('.window-active [data-row]').dispatchEvent(new MouseEvent('dblclick',{bubbles:true}));return true")
 assert js("return document.querySelector('dialog h2').textContent.includes('Properties') && document.querySelector('dialog [data-capture]')")
 js("document.querySelector('dialog [data-capture]').click();document.querySelector('dialog [data-action=close-dialog]').click();return true")
 assert js("return Number(document.getElementById('found-count').textContent)===1")
 js("document.querySelector('[data-action=apps-folder]').click();document.querySelector('dialog [data-tool=prefetch]').click();document.querySelector('.window-active [data-select]').click();return true")
 assert js("return document.querySelector('.prefetch-files tbody').textContent.includes('archive-reader.jar')")
 js("document.querySelector('.window-active [data-action=native-options]').click();document.getElementById('prefetch-folder').value='C:\\Windows\\Prefetch';document.querySelector('[data-action=native-options-apply]').click();return true")
 js("document.querySelector('[data-action=apps-folder]').click();document.querySelector('dialog [data-tool=journal]').click();return true")
 assert js("return document.querySelectorAll('.journal-toggles input').length===6 && document.querySelector('.journal-native [data-capture]')")
 js("document.querySelector('[data-journal-filter=FILE_CREATE]').click();return true")
 assert js("return [...document.querySelectorAll('.journal-action')].every(e=>e.textContent==='Created')")
 js("document.querySelector('[data-journal-filter=FILE_CREATE]').click();document.querySelector('.journal-native [data-open-folder]').click();return true")
 assert js("return !!document.querySelector('.window-active .explorer-tree') && document.getElementById('explorer-address').value.startsWith('C:')")
 # BrowsingHistoryView starts with its real Advanced Options flow.
 js("document.querySelector('[data-action=apps-folder]').click();document.querySelector('dialog [data-tool=history]').click();return true")
 time.sleep(.1)
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-history-options-sim.png').write_bytes(base64.b64decode(shot))
 assert js("return !!document.querySelector('.history-options-dialog') && document.querySelectorAll('.history-browsers input').length>=10")
 js("document.getElementById('history-edge').checked=false;document.querySelector('[data-action=native-options-apply]').click();return true")
 assert js("return document.querySelectorAll('.window-active tbody tr').length===0")
 js("document.querySelector('.window-active [data-action=native-options]').click();document.getElementById('history-edge').checked=true;document.querySelector('[data-action=native-options-apply]').click();return true")
 assert js("return document.querySelectorAll('.window-active tbody tr').length>0")
 # JournalTrace requires drive selection, scan, layout selection, and an explicit search.
 js("document.querySelector('[data-action=apps-folder]').click();document.querySelector('dialog [data-tool=journaltrace]').click();return true")
 assert js("return document.querySelector('.trace-wait').textContent.includes('Waiting')")
 js("document.querySelector('.window-active [data-native-menu=Drive]').click();document.querySelector('[data-action=trace-select]').click();document.querySelector('[data-action=trace-drive-info]').click();document.querySelector('[data-action=trace-drive-accept]').click();document.querySelector('.window-active [data-native-menu=Drive]').click();document.querySelector('[data-action=trace-scan]').click();return true")
 time.sleep(1)
 assert js("return document.querySelector('.trace-wait').textContent.includes('All done')")
 js("document.querySelector('.window-active [data-native-menu=Layout]').click();document.querySelector('[data-action=trace-grid]').click();return true")
 assert js("return !!document.querySelector('.trace-grid-empty')")
 js("document.querySelector('[data-action=trace-search]').click();return true")
 assert js("return document.querySelectorAll('.window-active tbody tr').length>0 && document.querySelector('.window-active th').textContent.includes('USN')")
 js("document.getElementById('tool-query').value='definitely-no-such-file';document.getElementById('tool-query').dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('[data-action=trace-search]').click();return true")
 assert js("return document.querySelectorAll('.window-active tbody tr').length===0")
 js("document.querySelector('[data-action=trace-clear]').click();document.querySelector('.window-active [data-native-menu=Layout]').click();document.querySelector('[data-action=trace-tree]').click();return true")
 assert js("return document.querySelectorAll('.trace-directory-tree details').length>0")
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-journaltrace-sim.png').write_bytes(base64.b64decode(shot))
 # USBDeview shows devices, not invented file-transfer/hash evidence.
 js("document.querySelector('[data-action=apps-folder]').click();document.querySelector('dialog [data-tool=usb]').click();return true")
 assert js("return !document.querySelector('.window-active [data-capture]') && document.querySelector('.window-active [data-action=capture-selected]').disabled")
 # AtlasAC scan -> results -> direct Buldum. No manual classifications required.
 js("document.querySelector('#task-apps [data-tool=atlas]').click();document.querySelector('[data-atlas-view=scan]').click();document.querySelector('[data-action=scan]').click();document.getElementById('atlas-permission').click();document.querySelector('[data-action=atlas-scan-confirm]').click();return true")
 time.sleep(2.7)
 assert js("return !!document.querySelector('.atlas-actual-results') && document.querySelectorAll('.atlas-result-table tbody tr').length>0")
 js("document.querySelector('.window-active [data-capture]').click();return true")
 count=js("return Number(document.getElementById('found-count').textContent)")
 js("document.querySelector('.window-active [data-open-meta]').click();document.querySelector('.window-active [data-capture]').click();return true")
 assert js("return Number(document.getElementById('found-count').textContent)")==count
 assert js("return !document.getElementById('note-verdict') && !document.getElementById('note-usage')")
 js("document.querySelector('[data-atlas-view=results]').click();return true")
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-found-native.png').write_bytes(base64.b64decode(shot))
 js("document.querySelector('[data-action=notes]').click();return true")
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-found-list.png').write_bytes(base64.b64decode(shot))
 js("document.querySelector('.notebook [data-action=finish-prompt]').click();document.querySelector('[data-action=finish]').click();return true")
 assert js("return !!document.querySelector('.found-results') && document.querySelectorAll('.result-item').length>=4")
 print('PASS: realistic file tree, Everything search, direct Buldum, unique counting, undo, native record properties, Prefetch loaded files, Journal filters/folder navigation, AtlasAC and direct results.',flush=True)
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-found-results.png').write_bytes(base64.b64decode(shot))
 cmd('WebDriver:SetWindowRect',{'width':500,'height':900})
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/mulakat/'});time.sleep(.3)
 js("document.querySelector('[data-action=new]').click();document.querySelector('[data-tool=everything]').click();return true")
 assert js("return document.documentElement.scrollWidth<=innerWidth && document.documentElement.scrollHeight===innerHeight")
 print('PASS: mobile viewport and new randomized session.',flush=True)
finally:
 if s:
  try:cmd('Marionette:Quit',{'flags':['eForceQuit']})
  except:pass
 proc.terminate();server.shutdown();log.close()
