const {app, BrowserWindow, Menu} = require('electron');
const path = require('path')

let ventanaPrincipal;

let menuAplicacionPlantilla = [
    {
        label: 'Tools',
        submenu: [
            {
                label: "Toggle Dev Tools",
                accelerator: "F12",
                click: () => {
                    ventanaPrincipal.webContents.toggleDevTools();
                }
            },
            {
                label: "Print",
                accelerator: "ctrl+p",
                click: () => {
                  window.print();
                }
            }
        ]
    }
]

function crearVentanaPrincipal(){

        ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 700,
        webPreferences: { //para poder importar require('electron') en cualquier file  
            nodeIntegration: true,
            contextIsolation: false
        } 
    });

    ventanaPrincipal.loadFile('index.html');

    let menu = Menu.buildFromTemplate(menuAplicacionPlantilla);
    ventanaPrincipal.setMenu(menu);
}


app.whenReady().then(crearVentanaPrincipal);

app.on('window-all-closed', function(){

    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', function(){
    if(BrowserWindow.getAllWindows().length === 0){
        crearVentanaPrincipal();
    }
})