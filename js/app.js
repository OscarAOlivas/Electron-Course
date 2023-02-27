

// class TablaMenu {
//     constructor(){
//         this.tituloDesayunoD1 = document.getElementById('td1');

//         this.agregarEventListeners();
//     }

//     agregarEventListeners(){
//         this.tituloDesayunoD1.addEventListener('modificar')
//     }
// }

function obtenerTexto(evento){
    console.log(evento)
    let nombreProducto = evento.target.innerText
    console.log(nombreProducto)
    document.getElementsByTagName(nombreProducto).value = 'Cambio'

}
document.querySelector('h6.comida').addEventListener('dblclick', obtenerTexto)
document.querySelector('h6.ingrediente').addEventListener('dblclick', obtenerTexto)