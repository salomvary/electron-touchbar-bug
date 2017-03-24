const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow()

  win.loadURL(`file://${__dirname}/main.html`)

})
