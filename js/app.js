

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
var botones = document.querySelectorAll(".button");
elemento.addEventListener("input", function(){})

var celda = document.querySelector("td.dat")

celda.addEventListener("mouseover",function(){
  var button = celda.querySelector("button")
  button.style.display = "flex"
  
})

celda.addEventListener("mouseout",function(){
  var button = celda.querySelector("button")
  button.style.display = "none"
})

//  var boton = document.getElementById("adding")
//var boton = document.getElementsByClassName("button")

botones.forEach(boton =>{
  boton.addEventListener("click",function(){
    var nuevoIngrediente = document.createElement("h6")
    nuevoIngrediente.classList.add("ingrediente")
    nuevoIngrediente.setAttribute("contenteditable", "true")
    var contenido = document.createTextNode("ingrediente")
    nuevoIngrediente.appendChild(contenido)
    celda.appendChild(nuevoIngrediente)
    celda.appendChild(boton)
  })
})