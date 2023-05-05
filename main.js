const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const electron = require('electron');
const Menu = electron.Menu;
let win;

function craeteWindow() {

  win = new BrowserWindow({
    width:775,
    height: 675,
    icon:__dirname + "/img/icon.png"
  });
  win.loadURL(url.format({
    pathname:path.join(__dirname,'/Strawberry/index.html'),
    protocol:'file',
    slashes:true
  }));
  // win.webContents.openDevTools();
  win.on('closed',()=>{
    win=null;
  });
}
app.on('ready',()=>{
  craeteWindow();
  Menu.setApplicationMenu(null);

});
app.on('window-all-closed',()=>{
  app.quit();
});
