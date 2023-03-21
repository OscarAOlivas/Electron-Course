
//var ingredientes = document.querySelectorAll("h6")
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
// // })
// ingredientes.forEach(ingrediente => {
//     //console.log(ingrediente)
//     ingrediente.addEventListener("click",function(){
//         var closeButton = ingrediente.querySelectorAll('.close-button')
//         closeButton.style.display = "none"
//     })

//     ingrediente.addEventListener("mouseover",function(){
//         var closeButton = ingrediente.querySelector('.close-button')
//         closeButton.style.display = "block"
//     })

//     ingrediente.addEventListener("mouseout",function(){
//         var closeButton = ingrediente.querySelector('.close-button')
//         closeButton.style.display = "none"
//     })
// })

celdas.forEach(celda =>{
    celda.addEventListener("mouseover",function(){
        var addButton = celda.querySelector(".add-btn")
        getCloseButtons = celda.querySelectorAll("span.close-button")
        addButton.style.display = "flex"
        celdaActual = celda
        //console.log(celda)
        getCloseButtons.forEach(closeButton =>{
            closeButton.addEventListener("click",function(){
                eliminarIngrediente = this.parentNode;
                eliminarIngrediente.remove()          
            })
        })
        
        var ingredientes = celda.querySelectorAll("h6.ingrediente")
        // ingredientes.forEach(ingrediente => {
        //     ingrediente.addEventListener("click",function(){
        //         var closeButton = ingrediente.querySelector('.close-button')          
        //         closeButton.style.display = "none"
                
            
        //     })
        ingredientes.forEach(ingrediente => {
            ingrediente.addEventListener("mouseover",function(){
                var closeButton = ingrediente.querySelector('.close-button')
                //console.log(ingrediente)
                closeButton.style.display = "block"

                })
        
            ingrediente.addEventListener("mouseout",function(){
                var closeButton = ingrediente.querySelector('.close-button')
                closeButton.style.display = "none"
                })

            
                ingrediente.addEventListener("click",function(){
                    var closeButton = ingrediente.querySelector('.close-button')          
                    closeButton.style.display = "none"
                    ingrediente.click()
            
                })
        })
     })

     celda.addEventListener("mouseout",function(){
        var addButton = celda.querySelector(".add-btn")
        addButton.style.display = "none"
    })
     
})


// celdas.forEach(celda => {
//     celda.addEventListener("mouseout",function(){
//         var addButton = celda.querySelector(".add-btn")
//         addButton.style.display = "none"
//     })
// })


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



