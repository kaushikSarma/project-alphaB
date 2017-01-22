/**
 * Created by Plato on 1/23/2017.
 */
var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});