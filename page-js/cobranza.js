

const prestamos = [
    { 
        nombre:"Ydianeth Miranda",
        codCobro: 22,
        codCliente: 96130064,
        codRuta: 2,
        monto: 50000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 3000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 65000,
        saldo: 65000,
        pagos: {

        },   
    },

    { 
        nombre:"Carlos Fuenmayor",
        codCobro: 12,
        codCliente: 20609892,
        codRuta: 2,
        monto: 100000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 5000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 130000,
        saldo: 130000,
        pagos: {

        },   
    },
    { 
        nombre:"Vanessa Miranda",
        codCobro: 232,
        codCliente: 96130064,
        codRuta: 2,
        monto: 50000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 3000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 65000,
        saldo: 65000,
        pagos: {

        },   
    },

    { 
        nombre:"Carlos villarreal",
        codCobro: 155,
        codCliente: 20609892,
        codRuta: 2,
        monto: 100000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 5000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 130000,
        saldo: 130000,
        pagos: {

        },   
    },
    { 
        nombre:"gloria mayor",
        codCobro: 2789,
        codCliente: 96130064,
        codRuta: 2,
        monto: 50000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 3000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 65000,
        saldo: 65000,
        pagos: {

        },   
    },

    { 
        nombre:"Leticia Quiroz",
        codCobro: 17893,
        codCliente: 20609892,
        codRuta: 2,
        monto: 100000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 5000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 130000,
        saldo: 130000,
        pagos: {

        },   
    },
    { 
        nombre:"Maria Miranda",
        codCobro: 2463,
        codCliente: 96130064,
        codRuta: 2,
        monto: 50000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 3000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 65000,
        saldo: 65000,
        pagos: {

        },   
    },

    { 
        nombre:"Eduardo Fuenmayor",
        codCobro: 178245,
        codCliente: 20609892,
        codRuta: 2,
        monto: 100000,
        interes: 1.3,
        plan: "diario",
        cuotas: 30,
        valorCuota: 5000,
        inicio: "05/06/2023",
        vencimiento: "05/07/2023",
        total: 130000,
        saldo: 130000,
        pagos: {

        },   
    },

];
 


let contPrestamos= document.querySelector("#ContarjetaClienteCobranza");



  function prestaFor (prestamos){
    prestamos.forEach(prestamo=> {
    let div = document.createElement("div");
    div.classList.add("tarjCliente");
    div.innerHTML=
    `<h3 class="nombreCliente">${prestamo.nombre}</h3>
    <div class="divInfoCliCo">
        <h4>Direccion</h4>
        <h4>Cod Venta:${prestamo.codCobro}</h4>
        <h4>Inicio: ${prestamo.inicio}</h4>
        <h4>Valor= $${prestamo.monto}</h4>
        <h4>Plan: ${prestamo.plan}</h4>
    </div>

    <div class="divInfoCliCo">
        <h4>Vence: ${prestamo.vencimiento}</h4>
        <h4>Total= $${prestamo.total}</h4>
        <h4>Cuota= $${prestamo.valorCuota}</h4>
        <h4>Saldo= $${prestamo.saldo}</h4>
    </div>  
    <div class="contBtnCobranza">
            <label>Ingresar Pago=</label>
            <input class="inputPago" type="number" value="${prestamo.valorCuota}" placeholder="$${prestamo.valorCuota}" id="inp${prestamo.codCobro}">
            <button class="btnWhatsappClienteCobranza" type="button" id="${prestamo.codCobro}" onclick="btnW(this)"><i class="bi bi-whatsapp"></i></button>
            <button class="btnRegistrarClienteCobranza" id="${prestamo.codCobro}" onclick="registrarPago(this)" type="button">Registrar</button>
    </div>`;
    contPrestamos.append(div);
    })
    
  }
 prestaFor(prestamos);

 function registrarPago(btnPago){
     
     if(confirm("Desea registrar el pago?")){
     let idBtn = btnPago.id;
     console.log("id del boton:" + idBtn);
     let cuotaPagada = document.getElementById(`inp${idBtn}`).value;
     console.log(`la cuota ingresa es= ${cuotaPagada}`);
     let ingrePago = prestamos.filter(prestamo=> prestamo.codCobro === idBtn);
     ingrePago.forEach(prestamo=>{
       let pa =  prestamo.pagos.push(cuotaPagada);
       console.log(prestamo());
    }) 
   }
 }

 //*Funcion para el boton de whatsapp

function btnW(btnWa){
    let idBtnWa = btnWa.id;
    
   //* alert(`Nombre de cliente ${idBtnWa}`);
    
    let numWA = prestamos.filter(prestamo=> prestamo.codCobro == idBtnWa);
          numWA.forEach(prestamo => {
        console.log(`saldo: ${prestamo.nombre}`);

        });
}
