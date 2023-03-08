

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
var addButtons = document.querySelectorAll(".add-btn");
var deleteButtons = document.querySelectorAll(".del-btn");
var celdaActual
var celdas = document.querySelectorAll("td.dat")

elemento.addEventListener("input", function(){})

celdas.forEach(celda =>{
    celda.addEventListener("mouseover",function(){
        //console.log(celda)
        var addButton = celda.querySelector(".add-btn")
        var deleteButton = celda.querySelector(".del-btn")
        console.log(deleteButton)
        addButton.style.display = "flex"
        deleteButton.style.display = "flex"
        celdaActual = celda
     })
})


celdas.forEach(celda => {
    celda.addEventListener("mouseout",function(){
        var addButton = celda.querySelector(".add-btn")
        var deleteButton = celda.querySelector(".del-btn")
        addButton.style.display = "none"
        deleteButton.style.display = "none"
    
    })
})


addButtons.forEach(boton =>{
    boton.addEventListener("click",function(){
        var nuevoIngrediente = document.createElement("h6")
        var nuevoDiv = document.createElement("div")
        var nuevoSpan = document.createElement("span")
        var deleteButton = celdaActual.querySelector(".del-btn")
        nuevoIngrediente.classList.add("ingrediente")
        nuevoIngrediente.setAttribute("contenteditable", "true")
        var contenido = document.createTextNode("ingrediente")

        nuevoSpan.classList.add("close-button")
        nuevoSpan.setAttribute("contenteditable", "false")
        var contenidoSpan = document.createTextNode("X")
        nuevoIngrediente.appendChild(contenido)
        nuevoSpan.appendChild(contenidoSpan)
        nuevoIngrediente.appendChild(nuevoSpan)
        celdaActual.appendChild(nuevoIngrediente)

        nuevoDiv.classList.add("divbotones")
        var divActual = celdaActual.querySelector(".divbotones")
        divActual.remove()

        celdaActual.appendChild(nuevoDiv)
        divActual = celdaActual.querySelector(".divbotones")
        divActual.appendChild(boton)
        divActual.appendChild(deleteButton)

    
     })
})