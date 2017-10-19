// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;
const ipcRenderer = require('electron').ipcRenderer;
const dialog = remote.dialog; //require('electron').dialog;
const fs = require("fs");


function render_index() {
    ipcRenderer.send('render_index');
}

function fileExplorer() {
    dialog.showOpenDialog(function (fileNames) {
        if (fileNames === undefined) return;

        var fileName = fileNames[0];
        fs.readFile(fileName, 'utf-8', function (err, data) {
            document.getElementById("original").src=fileName
    });
    });
}



