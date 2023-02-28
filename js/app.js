

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
    // console.log(document.getElementsByiD(nombreProducto))

    // var celda = document.getElementById("td1");
    // var header = document.createElement("h6");
    // var textoHeader = document.createTextNode("Este es el encabezado");
    // header.appendChild(textoHeader);
    // celda.appendChild(header);

    //let elemento = get
  }


//document.querySelector('h6.comida').addEventListener('dblclick', obtenerTexto)
//document.querySelector('h6').addEventListener('dblclick', obtenerTexto)
//document.getElementByTagName('h6').addEventListener('dblclick', obtenerTexto)
//document.querySelector('h6').addEventListener('dblclick', obtenerTexto)

var elemento = document.querySelector("h6")
elemento.addEventListener("input", function(){})