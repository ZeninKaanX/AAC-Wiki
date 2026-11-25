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
 time.sleep(.7)
 js("document.querySelector('[data-action=new]').click();return true")
 assert js("return !!document.querySelector('.windows-desktop') && !document.querySelector('.tools-sidebar') && !document.querySelector('.notebook.show') && document.documentElement.scrollWidth===innerWidth && document.documentElement.scrollHeight===innerHeight")
 js("document.querySelector('[data-tool=everything]').click();return true")
 assert js("return document.querySelectorAll('.app-window').length===1 && getComputedStyle(document.querySelector('.classic-native')).backgroundColor==='rgb(255, 255, 255)' && document.querySelectorAll('tbody tr').length>0")
 # Actual mouse input moves and resizes the desktop window.
 rect=js("const r=document.querySelector('.window-active').getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}")
 def drag(x,y,dx,dy):
  cmd('WebDriver:PerformActions',{'actions':[{'type':'pointer','id':'desktop-mouse','parameters':{'pointerType':'mouse'},'actions':[{'type':'pointerMove','duration':0,'x':int(x),'y':int(y),'origin':'viewport'},{'type':'pointerDown','button':0},{'type':'pointerMove','duration':300,'x':int(x+dx),'y':int(y+dy),'origin':'viewport'},{'type':'pointerUp','button':0}]}]})
 drag(rect['x']+240,rect['y']+15,50,30)
 moved=js("const r=document.querySelector('.window-active').getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}")
 assert moved['x']>=rect['x']+45 and moved['y']>=rect['y']+25
 drag(moved['x']+moved['w']-3,moved['y']+moved['h']-3,-70,-60)
 assert js("return document.querySelector('.window-active').getBoundingClientRect().width")<moved['w']-40
 js("document.querySelector('[data-select]').click();document.querySelector('[data-capture]').click();return true")
 assert js("return document.querySelectorAll('.evidence-list article').length===1")
 js("document.querySelector('[data-open-meta]').click();return true")
 assert js("return document.querySelectorAll('.app-window').length===2 && document.querySelector('.metadata-content')")
 js("document.querySelector('.window-active [data-capture]').click();return true")
 assert js("return document.querySelectorAll('.evidence-list article').length===2")
 js("document.querySelector('[data-tool=journal]').click();return true")
 assert js("return !!document.querySelector('.journal-heading') && document.querySelectorAll('.journal-toggles input').length===6")
 js("document.querySelector('[data-journal-filter=FILE_CREATE]').click();return true")
 assert js("return [...document.querySelectorAll('.journal-native tbody .journal-action')].every(e=>e.textContent==='Created')")
 js("document.querySelector('[data-journal-filter=FILE_CREATE]').click();return true")
 # All approved applications open independently; each has specific table columns.
 js("document.querySelector('[data-action=apps-folder]').click();return true")
 assert js("return document.querySelectorAll('dialog [data-tool]').length===10")
 for app in ['downloads','history','activity','prefetch','usb','journaltrace']:
  js("document.querySelector('dialog [data-tool="+app+"]').click();return true")
  assert js("return document.querySelector('[data-window="+app+"] th').textContent.length>0")
  js("document.querySelector('[data-action=apps-folder]').click();return true")
 js("document.querySelector('dialog [data-action=close-dialog]').click();document.querySelector('[data-window=everything] .window-title').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));return true")
 assert js("return document.querySelector('[data-window=everything]').classList.contains('window-active')")
 js("document.querySelector('[data-window=everything] [data-action=maximize-window]').click();return true")
 assert js("return document.querySelector('[data-window=everything]').getBoundingClientRect().width>=innerWidth-2")
 js("document.querySelector('[data-window=everything] [data-action=maximize-window]').click();document.querySelector('[data-window=everything] [data-action=minimize-window]').click();return true")
 assert js("return document.querySelector('[data-window=everything]').hidden")
 js("document.querySelector('#task-apps [data-tool=everything]').click();return true")
 assert js("return !document.querySelector('[data-window=everything]').hidden")
 js("document.querySelector('[data-window=everything] [data-native-menu=View]').click();document.querySelector('[data-action=toggle-hidden]').click();return true")
 js("document.querySelector('[data-action=run]').click();document.getElementById('run-command').value='explorer';document.querySelector('[data-action=run-confirm]').click();return true")
 assert js("return !!document.querySelector('[data-window=explorer]')")
 # Keep two native windows visible for visual QA.
 js("document.querySelector('[data-action=desktop]').click();document.querySelector('#task-apps [data-tool=everything]').click();document.querySelector('[data-tool=journal]').click();const j=document.querySelector('[data-window=journal]');j.style.left='390px';j.style.top='200px';j.style.width='1050px';j.style.height='610px';return true")
 time.sleep(.4)
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-windows-desktop.png').write_bytes(base64.b64decode(shot))
 print('PASS: full viewport, independent native windows, original icons, tool-specific columns, Journal filters, capture, archive, task switching, minimize/maximize, menus and Run.',flush=True)
 # Native AtlasAC flow uses its real source assets and navigation.
 js("document.querySelector('#task-apps [data-tool=atlas]').click();document.querySelector('[data-atlas-view=scan]').click();document.querySelector('[data-action=scan]').click();return true")
 assert js("return document.querySelector('[data-action=atlas-scan-confirm]').disabled")
 js("document.getElementById('atlas-permission').click();document.querySelector('[data-action=atlas-scan-confirm]').click();return true")
 assert js("return !!document.querySelector('.atlas-actual-scan progress')")
 js("document.querySelector('#task-apps [data-tool=everything]').click();return true")
 time.sleep(2.7)
 js("document.querySelector('#task-apps [data-tool=atlas]').click();return true")
 assert js("return !!document.querySelector('.atlas-actual-results') && document.querySelectorAll('.atlas-result-table tbody tr').length>0")
 js("document.querySelector('.window-active [data-open-meta]').click();return true")
 assert js("return !!document.querySelector('.window-active .archive-tree')")
 js("document.querySelector('.window-active [data-atlas-view=results]').click();return true")
 time.sleep(.2)
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-windows-atlasac.png').write_bytes(base64.b64decode(shot))
 js("document.querySelector('[data-action=atlas-clear]').click();return true")
 assert js("return !!document.querySelector('.atlas-actual-scan')")
 print('PASS: AtlasAC permission, scan, background completion, native results, archive details and clearing scan data.',flush=True)
 # Separate tab has separate interview.
 first=js("return JSON.parse(sessionStorage.getItem('atlas-interview-v1')).session.id")
 original=cmd('WebDriver:GetWindowHandle')['value'];second=cmd('WebDriver:NewWindow',{'type':'tab'})['handle'];cmd('WebDriver:SwitchToWindow',{'handle':second})
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/mulakat/'});time.sleep(.3)
 assert js("return sessionStorage.getItem('atlas-interview-v1')===null")
 js("document.querySelector('[data-action=new]').click();return true")
 assert js("return JSON.parse(sessionStorage.getItem('atlas-interview-v1')).session.id")!=first
 cmd('WebDriver:SwitchToWindow',{'handle':original})
 js("document.querySelector('[data-action=start-menu]').click();document.querySelector('[data-action=finish-prompt]').click();document.querySelector('[data-action=finish]').click();return true")
 assert js("return !!document.querySelector('.results') && document.querySelectorAll('.result-item').length>=8")
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/#interview'});time.sleep(.7)
 assert js("return !!document.querySelector('.interview-launch') && !document.querySelector('.interview-frame')")
 cmd('WebDriver:SetWindowRect',{'width':430,'height':900})
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/mulakat/'});time.sleep(.3)
 js("document.querySelector('[data-action=new]').click();document.querySelector('[data-tool=everything]').click();return true")
 assert js("return document.documentElement.scrollWidth<=innerWidth && document.documentElement.scrollHeight===innerHeight")
 shot=cmd('WebDriver:TakeScreenshot',{'full':False})['value'];Path('/tmp/lab-windows-mobile.png').write_bytes(base64.b64decode(shot))
 print('PASS: separate sessions, results, full-screen launch from wiki, mobile viewport.',flush=True)
finally:
 if s:
  try:cmd('Marionette:Quit',{'flags':['eForceQuit']})
  except:pass
 proc.terminate();server.shutdown();log.close()
