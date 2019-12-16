const electron = require('electron');
const request = require('request');
const express = require('express');
const exec = require('child_process').exec;
const { app, ipcMain, BrowserWindow } = require('electron');
const DELAY = 500;

request({
  url: 'http://localhost:3000',
  method: 'GET'
}, (err, res, body) => {
  if (err && err.code === 'ECONNREFUSED') {
    const server = express();
    const http = require('http').Server(server);
    const io = require('socket.io').listen(http);

    io.on('connection', (socket) => {
      socket.on('msg', (msg) => {
        exec(`say ${msg}`, (err, stdout, stderr) => {});
      });

      socket.on('count', (msg) => {
        exec(`afplay ${__dirname}/audio/oh.mp3`, (err, stdout, stderr) => {});
      });

      socket.on('pointup', (msg) => {
        exec(`afplay ${__dirname}/audio/point.mp3`, (err, stdout, stderr) => {});
      });
    });

    server.use('/', express.static(`${__dirname}/docs`));

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

    mainWindow.loadURL('http://localhost:3000/');
  }, DELAY);
});