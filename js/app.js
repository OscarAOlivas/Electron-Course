
var elemento = document.querySelector("h6")
var addButtons = document.querySelectorAll(".add-btn");
var celdaActual
var closeButtonActual
var celdas = document.querySelectorAll("td.dat")

// elemento.addEventListener("input", function(){
//     console.log('entro')
//     var valor = $(this).val();
//     if (valor === '') {
//       $('.ingrediente').text('');
//     } else {
//       $('.ingrediente').text(valor);
//     }
// })

celdas.forEach(celda =>{
    celda.addEventListener("mouseover",function(){
        var addButton = celda.querySelector(".add-btn")
        getCloseButtons = celda.querySelectorAll("span.close-button")
        addButton.style.display = "flex"
        celdaActual = celda

        getCloseButtons.forEach(closeButton =>{
            closeButton.addEventListener("click",function(){
                eliminarIngrediente = this.parentNode;
                eliminarIngrediente.remove()           
            })
        })  
     })
})


celdas.forEach(celda => {
    celda.addEventListener("mouseout",function(){
        var addButton = celda.querySelector(".add-btn")
        addButton.style.display = "none"
    })
})


addButtons.forEach(boton =>{
    boton.addEventListener("click",function(){
        var nuevoIngrediente = document.createElement("h6")
        var nuevoDiv = document.createElement("div")
        var nuevoSpan = document.createElement("span")
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
     })
})



