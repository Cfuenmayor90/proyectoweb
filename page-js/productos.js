
console.log("Ejecutando");
const xlsx = require('xlsx');


function leerExcel(ruta) {
  const workbook = xlsx.readFile(ruta);
  const workbookSheets = workbook.SheetNames;
  console.log(workbookSheets);

  const sheet = workbookSheets[0];
  const dataExcel = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
  
  // console.log(dataExcel);
  const productos = dataExcel;
  console.log(productos);
  const contProductos = document.querySelector("#contProduc");
  
  
  
  

//* Funcion para filtrar las categorias
//let contProductos = document.querySelector("#cont-Productos");

function cProductos(prodElegidos){
    contProductos.innerHTML="";
    prodElegidos.forEach(producto => {
    const div=document.createElement("div");
    div.classList.add("prodTarjeta");
    div.innerHTML=`
            <img src="${producto.imagen}" class="prodTarjeta" alt="">
            <div class="prodTarjetaDes">
              <h6 class="hTitulo">${producto.nombre}</h6>
              <h6 class="hCod">Cod:${producto.id}</h6>
              <h6 class="hPrecio">$${(Math.round(producto.precio)*1.25)}</h6>
              <button class="btnS" " value="${producto.id}" onclick="cotizar(this);" id="${producto.id}">Cotizar</button>  
          </div>`;
          contProductos.append(div);
        })
       };
cProductos(productos);

function cProductosTabla (prodElegidos){
    contProductos.innerHTML="";
    prodElegidos.forEach(producto => {
    const div=document.createElement("div");
    div.classList.add("prodTarjeta", "col-md-3", "col-sm-6", "col-xs-6", "g-2");
    div.innerHTML=`
            <img src="${producto.imagen}" class="prodTarjetaImg"alt="">
            <div class="prodTarjetaDes">
              <h6 class="hTitulo">${producto.nombre}</h6>
              <h6 class="hCod">Cod:${producto.id}</h6>
              <h6 class="hPrecio">$${producto.precio}</h6>
              <button class="btnS" " value="${producto.id}" onclick="Cotizar(this);" id="${producto.id}">Cotizar</button>  
          </div>`;
          contProductos.append(div);
        })
       }

function catElectro(){
    contProductos.innerHTML="";
    productos.forEach(producto => {
       let prodEle = productos.filter(producto => producto.categoria.id === "electronica");
       cProductos(prodEle);
    })
  };
function catHogar(){
    contProductos.innerHTML="";
    productos.forEach(producto => {
       let prodEle = productos.filter(producto => producto.categoria.id === "hogar");
       cProductos(prodEle);
    })
  };
  function catComercial(){
    contProductos.innerHTML="";
    productos.forEach(producto => {
       let prodEle = productos.filter(producto => producto.categoria.id === "comercial");
       cProductos(prodEle);
    })
  };
  function catHerramientas(){
    contProductos.innerHTML="";
    productos.forEach(producto => {
       let prodEle = productos.filter(producto => producto.categoria.id === "herramientas");
       cProductos(prodEle);
    })
  };
  function catTodo(){
    contProductos.innerHTML="";
    cProductos(productos);
  };

//Funcion para la cotizacion de los productos
 
  function cotizar(btnId){
    const IdBtn= btnId.id;
    
    console.log(IdBtn);
        let prodCotizar = productos.filter(producto => producto.id === IdBtn);
          prodCotizar.forEach(producto => {
            var costo = (producto.precio)*1.2;
            var precioVentDes =(producto.precio)*1.25;

        contProductos.innerHTML="";
           
            const div=document.createElement("div");
            div.classList.add("DivprodTarjetaCot", "row");
            div.innerHTML=`
                <div class="DivC1">
                <img src="${producto.imagen}" class="prodTarjetaImgCot" alt="">
                <div class="prodTarjetaDesCot">
                <h6 class="tituloT">${producto.nombre}</h6>
                <h6 class="hCod">Cod:${producto.id}</h6>
                <h6 class="hCod">${producto.descripcion}</h6>
                <h6 class="hPrecio">$${precioVentDes}</h6>
                </div>
                </div>
                <div class="DivC1">
                <p class="tituloT">Planes de Financiamiento</p>
                <table class="tablaCo">
                <thead>
                  <tr>
                    <th class="titleTabla"> Dias</th>
                    <th class="titleTabla"> Cuota</th>
                    <th class="titleTabla2"> Semanas</th>
                    <th class="titleTabla2"> Cuota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="ta1">20 Dias</th>
                    <td class="ta1">$${(Math.round(costo*1.2/20))}</td>
                    <th class="ta3">3 Semanas</th>
                    <td class="ta3">$${(Math.round(costo*1.15/3))}</td>
                  </tr>
                  <tr>
                    <th class="ta2">40 Dias</th>
                    <td class="ta2">$${(Math.round(costo*1.35/40))}</td>
                    <th class="ta4">6 Semanas</th>
                    <td class="ta4">$${(Math.round(costo*1.3/6))}</td>
                  </tr>
                  <tr>
                    <th class="ta1">60 Dias</th>
                    <td class="ta1">$${(Math.round(costo*1.5/60))}</td>
                    <th class="ta3">9 Semanas</th>
                    <td class="ta3">$${(Math.round(costo*1.48/9))}</td>
                  </tr>
                  <tr>
                    <th class="ta2">80 Dias</th>
                    <td class="ta2">$${(Math.round(costo*1.7/80))}</td>
                    <th class="ta4">12 Semanas</th>
                    <td class="ta4">$${(Math.round(costo*1.65/12))}</td>
                  </tr>
                  <tr>
                    <th class="ta1">100 Dias</th>
                    <td class="ta1">$${(Math.round(costo*1.8/100))}</td>
                    <th class="ta3">15 Semanas</th>
                    <td class="ta3">$${(Math.round(costo*1.8/15))}</td>
                  </tr>
                  <tr>
                    <th class="ta2">140 Dias</th>
                    <td class="ta2">$${(Math.round(costo*2/140))}</td>
                    <th class="ta4">18 Semanas</th>
                    <td class="ta4">$${(Math.round(costo*1.9/18))}</td>
                  </tr>
                  <tr>
                    <th class="ta1">180 Dias</th>
                    <td class="ta1">$${(Math.round(costo*2.3/180))}</td>
                    <th class="ta3">21 Semanas</th>
                    <td class="ta3">$${(Math.round(costo*2/21))}</td>
                  </tr>
                  <tr>
                    <th class="ta2">220 Dias</th>
                    <td class="ta2">$${(Math.round(costo*2.5/220))}</td>
                    <th class="ta4">24 Semanas</th>
                    <td class="ta4">$${(Math.round(costo*2.2/24))}</td>
                  </tr>
                  <tr>
                    <th class="ta1">300 Dias</th>
                    <td class="ta1">$${(Math.round(costo*3/300))}</td>
                    <th class="ta3">30 Semanas</th>
                    <td class="ta3">$${(Math.round(costo*2.4/30))}</td>
                  </tr>
                </tbody>
              </table>
              <div>
              <a id="btn-compartir" class="btn-compartir btnS">Compartir</a>
              <a class="btnS" href="https://api.whatsapp.com/send?phone=5493855843000&text=Hola me gustaria comprar este producto:${producto.nombre} Cod:${producto.id} Precio:$${precioVentDes}" class="btnComprar">
                Comprar
              </a>
              </div>
             </div>
              </div>`;
               contProductos.append(div);
                    
          });
          // Seleccionamos el botón con id 'btn-compartir' 
const shareButton = document.getElementById("btn-compartir");
 
// Creamos una función que se ejecutará cuando el usuario haga click en el botón
shareButton.addEventListener("click", (event) => {
 
  // Verificamos si el navegador tiene soporte para el API compartir
  if ("share" in navigator) {
    navigator
      .share({
        // Defino un título para la ventana de compartir
        title: "Comparte Esta Página en Tu Plataforma Favorita",
 
        // Detecto la URL actual de la página 
        url:
            window.location.href
      })
 
      // Mensaje en Consola cuando se presiona el botón de compartir 
      .then(() => {
        console.log("Contenido Compartido !");
      })
      .catch(console.error);
  } else {
    // Si el navegador no tiene soporte para la API compartir, le enviamos un mensaje al usuario
    alert('Lo siento, este navegador no tiene soporte para recursos compartidos.');
  }
});
                  
};

};
leerExcel('BDproductos.xlsx');
