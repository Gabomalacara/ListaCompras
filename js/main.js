let contador = 0;
let costoTotal= 0;
let totalEnProductos=0;
let datos= []; //arreglo para almacenar la lista de compras

let element = document.getElementById("TotalPrecio");
element.innerHTML="Total en Precio";

let txtNombre = document.getElementById("Name");

let total = document.getElementById("precioTotal")
// txtNombre.value ="Leche Semidescremada";
// console.log(txtNombre.value)

let txtNumber = document.getElementById("Number");

// let campos = document.getElementsByClassName("campo");
// campos[0].value = "Leche descremada deslactosada light ";
// console.log( campos[0].value)
// console.log(campos);

// for(let i=0; i<campos.length; i++){
//     campos[i].style.border="red thin solid"
// }

// let spans = document.getElementsByTagName("span");//quiero que me busques en mi documento 
// for(let i=0; i<spans.length; i++){
//    console.log(spans[i].textContent);

   
  
let tabla = document.getElementById("Tablalistadecompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody")


function validarNombre(){
    if (txtNombre.value.length <3){
        return false;
    } 
    return true;
} 

function validarCantidad(){
    if(txtNumber.value.length==0) {
        return false;
    }// if
     if (isNaN(txtNumber.value)){
        return false;
     }//if

     if (parseFloat(txtNumber.value)<=0) {
        return false;
     }//if
     return true;
}// validarCantidad


let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click",(event)=> {
    event.preventDefault();
    if (( !validarNombre()) || (! validarCantidad())){
        document.getElementById("alertValidacionesTexto").innerHTML="Los campos deben ser llenados correctamente";
        document.getElementById("alertValidaciones").style.display="block";
        let lista="";
        if(!validarNombre()){
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir una cantidad valida</li>";
        }
        if(!validarCantidad()){
            txtNumber.style.border="red thin solid";
            lista+="<li>Se debe escribir una Nombre valido</li>";
        }
    document.getElementById("alertaValidacionesTexto").innerHTML=`Los campos deben ser llenados correctamente.
    <ul>${lista}<ul/>`
    
        setTimeout(function(){
            document.getElementById("alertValidaciones").style.display="none";
        }, 3000);
        return false;
    }
    document.getElementById("alertValidaciones").style.display="none";
    contador++;
    document.getElementById("contadorProductos").innerHTML=contador
    window.localStorage.setItem("contadorProductos", contador);
    let precio = (Math.floor( (Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos += Math.ceil(cantidad);
    document.getElementById("productototal1").innerHTML = totalEnProductos 
    window.localStorage.setItem("productototal1", totalEnProductos);
    costoTotal += (precio*cantidad);
    total.innerHTML = `$ ${costoTotal.toFixed(2)}    `
    window.localStorage.setItem("precioTotal", costoTotal);
    
   //JSON
   let elemento =`{"id":${contador},
   "nombre":"${txtNombre.value}",
   "cantidad":${txtNumber.value},
   "precio":${precio}}`;
   
   datos.push(JSON.parse(elemento));
   localStorage.setItem("elementosTabla", JSON.stringify(datos));
   console.log(datos);

   let tmp = `
     <tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value} </td>
     <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
     </tr>
     `
    
     cuerpoTabla[0].innerHTML += tmp;
     txtNumber.value="";
     txtNombre.value="";
     txtNombre.focus();
}
);

txtNombre.addEventListener("blur",(event)=> {
    event.target.value = event.target.value.trim();
});
txtNumber.addEventListener("blur",(event)=> {
    event.target.value = event.target.value.trim();
});

window.addEventListener("load",function(){
    if (window.localStorage.getItem("productototal1")!=null){
        totalEnProductos = parseInt(localStorage.getItem("productototal1"));
        document.getElementById("productototal1").innerHTML= totalEnProductos;
    }
   if (window.localStorage.getItem("precioTotal")!=null){
    costoTotal = parseFloat(localStorage.getItem("precioTotal"));
       total.innerHTML= costoTotal;
   }
   if( window.localStorage.getItem("contadorProductos")!=null){
     contador = parseInt(localStorage.getItem("contadorProductos"));
    document.getElementById("contadorProductos").innerHTML= contador;
}
if(localStorage.getItem("elementosTabla")!=null){
    datos=JSON.parse(localStorage.getItem("elementosTabla"));
    datos.forEach(element => {
        cuerpoTabla[0].innerHTML+=` <tr>
       <th scope="row">${element.id}</th>
       <td>${element.nombre} </td>
        <td>${element.cantidad}</td>
       <td>$ ${element.precio}</td>
        </tr>
        `;
    });
}
});

//function agregarElementos(){


//agregar.onclick = 
