const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
function criar() {
  const w = new BrowserWindow({
    width: 1366, height: 820, minWidth: 900, minHeight: 600, show: false,
    backgroundColor: '#9FE0F8', title: 'Sete Capitaes explica: Barco Iara 2026',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: { contextIsolation: true, sandbox: true, devTools: false }
  });
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname, 'index.html'));
  w.once('ready-to-show', () => { w.maximize(); w.show(); });
  w.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  w.webContents.on('before-input-event', (e, i) => {
    if (i.type !== 'keyDown') return;
    if (i.key === 'F11') { w.setFullScreen(!w.isFullScreen()); e.preventDefault(); }
    if (i.key === 'Escape' && w.isFullScreen()) { w.setFullScreen(false); e.preventDefault(); }
  });
}
app.whenReady().then(criar);
app.on('window-all-closed', () => app.quit());
