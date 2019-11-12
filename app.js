const electron = require('electron');
const request = require('request');
const express = require('express');
const { app, ipcMain, BrowserWindow } = require('electron');
const DELAY = 500;

request({
  url: 'http://localhost:3000',
  method: 'GET'
}, (err, res, body) => {
  if (err) {
    const server = express();
    const http = require('http').Server(server);

    server.use('/', express.static(`${__dirname}/public`));

    http.listen(3000, '0.0.0.0');
  }
});

app.on('ready', () => {
  setTimeout(() => {
    const electronScreen = electron.screen;
    const displays = electronScreen.getAllDisplays();

    let externalDisplay;

    displays.forEach((display) => {
      if (display.bounds.x !== 0 || display.bounds.y !== 0) {
        externalDisplay = display;
      }
    });

    const mainWindow = new BrowserWindow({
      width  : 1200,
      height : 800,
      x: externalDisplay ? externalDisplay.bounds.x : null,
      y: externalDisplay ? externalDisplay.bounds.y : null,
      webPreferences: {
        nodeIntegration: true
      },
      fullscreen: true,
      frame: true,
      kiosk: false
    });

    mainWindow.on("closed", () => {
      app.quit();
    });

    mainWindow.loadURL('http://localhost:3000');
  }, DELAY);
});