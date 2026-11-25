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
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/mulakat/'});time.sleep(.4)
 js("document.querySelector('[data-action=new]').click();document.querySelector('[data-tool=everything]').click();return true")
 rect=js("const r=document.querySelector('.window-active').getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}")
 def drag(x,y,dx,dy):
  cmd('WebDriver:PerformActions',{'actions':[{'type':'pointer','id':'desktop-mouse','parameters':{'pointerType':'mouse'},'actions':[{'type':'pointerMove','duration':0,'x':int(x),'y':int(y),'origin':'viewport'},{'type':'pointerDown','button':0},{'type':'pointerMove','duration':300,'x':int(x+dx),'y':int(y+dy),'origin':'viewport'},{'type':'pointerUp','button':0}]}]})
 drag(rect['x']+240,rect['y']+15,50,30)
 moved=js("const r=document.querySelector('.window-active').getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}")
 assert moved['x']>=rect['x']+45 and moved['y']>=rect['y']+25
 drag(moved['x']+moved['w']-3,moved['y']+moved['h']-3,-70,-60)
 assert js("return document.querySelector('.window-active').getBoundingClientRect().width")<moved['w']-40
 js("document.querySelector('[data-tool=journal]').click();return true")
 assert js("return document.querySelectorAll('.app-window').length===2")
 js("document.querySelector('#task-apps [data-tool=everything]').click();document.querySelector('.window-active [data-action=maximize-window]').click();return true")
 assert js("return document.querySelector('.window-active').getBoundingClientRect().width>=innerWidth-2")
 js("document.querySelector('.window-active [data-action=maximize-window]').click();document.querySelector('.window-active [data-action=minimize-window]').click();return true")
 assert js("return document.querySelector('[data-window=everything]').hidden")
 js("document.querySelector('#task-apps [data-tool=everything]').click();document.dispatchEvent(new KeyboardEvent('keydown',{key:'a',ctrlKey:true,bubbles:true}));return true")
 assert js("return document.querySelectorAll('.window-active tr.selected').length>80")
 js("document.querySelector('[data-action=run]').click();document.getElementById('run-command').value='explorer';document.querySelector('[data-action=run-confirm]').click();return true")
 assert js("return !!document.querySelector('.window-active .explorer-tree')")
 first=js("return JSON.parse(sessionStorage.getItem('atlas-interview-v1')).session.id")
 original=cmd('WebDriver:GetWindowHandle')['value'];second=cmd('WebDriver:NewWindow',{'type':'tab'})['handle'];cmd('WebDriver:SwitchToWindow',{'handle':second})
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/mulakat/'});time.sleep(.2)
 assert js("return sessionStorage.getItem('atlas-interview-v1')===null")
 js("document.querySelector('[data-action=new]').click();return true")
 assert js("return JSON.parse(sessionStorage.getItem('atlas-interview-v1')).session.id")!=first
 cmd('WebDriver:SwitchToWindow',{'handle':original})
 assert js("return JSON.parse(sessionStorage.getItem('atlas-interview-v1')).session.id")==first
 cmd('WebDriver:Navigate',{'url':'http://127.0.0.1:8769/#interview'});time.sleep(.4)
 assert js("return !!document.querySelector('.interview-launch') && !document.querySelector('.interview-frame')")
 print('PASS: real mouse drag/resize, independent native windows, minimize/maximize, taskbar, multi-selection, Run, separate candidate sessions and full-screen wiki launch.',flush=True)
finally:
 if s:
  try:cmd('Marionette:Quit',{'flags':['eForceQuit']})
  except:pass
 proc.terminate();server.shutdown();log.close()
