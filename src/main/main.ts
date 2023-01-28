import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';

function createWindow () {
  const mainWindow = new BrowserWindow({
    icon: 'favicon.png',
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
  });

  mainWindow.webContents.openDevTools();

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    mainWindow.loadURL(`http://localhost:${rendererPort}`);
  }
  else {
    mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'));
  }
}

function createMiniPlayer () {
  const window = new BrowserWindow({
    width: 300,
    height: 300,
    minWidth: 300,
    minHeight: 300,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
    titleBarStyle: "customButtonsOnHover"
  });

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    window.loadURL(`http://localhost:${rendererPort}/mini.html`);
  }
  else {
    window.loadFile(join(app.getAppPath(), 'renderer', 'mini.html'));
  }
}

ipcMain.on('mini-player', () => {
  createMiniPlayer()
})

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('message', (event, message) => {
  console.log(message);
})

let dir
ipcMain.on('files_directory', (directory) => {
  dir = directory
})