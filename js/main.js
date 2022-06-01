let element = document.getElementById("TotalPrecio");
element.innerHTML="Total en Precio";

let txtNombre = document.getElementById("Name");


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


// 

let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click",(event)=> {
    let precio = Math.random()*50;
    let tmp = `
     <tr>
    <th scope="row">1</th>
    <td>${txtNombre.value} </td>
     <td>?${txtNumber.value}</td>
    <td>$ ${precio}</td>
     </tr>
     `
     console.log(tmp);
     cuerpoTabla[0].innerHTML += tmp;
     txtNumber.value="";
     txtNombre.value="";
     txtNombre.focus();
});

//function agregarElementos(){


//agregar.onclick = 
