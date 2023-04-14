function abrirDialogo(){
    document.querySelector("#dialogo1").style.background="red";
}

addEventListener("DOMContentLoaded",function(){
    if(!localStorage.getItem("myData")==""){
        cargarData();
        cargarServicio();
    }else{
        let myData=[]
        myData=[
            {
                tipo:"producto",
                title:"Papas",
                img:"Assets/img/papasmargarita.jpg",
                valor:"$2000"
            },
            {
                tipo:"producto",
                title:"Pasteles",
                img:"Assets/img/Pastel-de-Pollo7.jpg",
                valor:"$2000"
            },
            {
                tipo:"producto",
                title:"Cafe",
                img:"Assets/img/cafe.jpg",
                valor:"$2000"
            },
            {
                tipo:"servicio",
                title:"Hunters",
                img:"Assets/img/papasmargarita.jpg",
                valor:"$2000"
            },
            {
                tipo:"servicio",
                title:"Cafeteria Hunters",
                img:"Assets/img/Pastel-de-Pollo7.jpg",
                valor:"$2000"
            },
            {
                tipo:"servicio",
                title:"8vo Piso",
                img:"Assets/img/cafe.jpg",
                valor:"$2000"
            },
            {
                tipo:"servicio",
                title:"8vo Piso",
                img:"Assets/img/cafe.jpg",
                valor:"$2000"
            }
        ]   
        localStorage.setItem("myData",JSON.stringify(myData))
    }
})



function cargarData(){
    let productos=""
    let data= JSON.parse(localStorage.getItem("myData"));

    data.forEach(element => {
        if(element.tipo=="producto"){
        productos+=`
            <div class="producto">
                <div class="img-producto" style="background-image:url(${element.img})"></div>
                <p>${element.title}</p>
                <h2>${element.valor}</h2>
                <a href="#" class="button">Añadir al carrito</a>
            </div>`;
        }
    });
    document.querySelector("#productos").insertAdjacentHTML("beforeend",productos);
}

function cargarServicio(){
    let servicios=""
    let data= JSON.parse(localStorage.getItem("myData"));

    data.forEach(element =>{
        let cont=0
        if(element.tipo=="servicio"){
            cont++
            servicios+=`
            <div class="target">
                <h1>Hunters</h1>
                <img src="Assets/img/logo.png" alt="">
                <button type="button" class="button" onclick="abrirDialogo('dialogo1')">Clic</button>
                <dialog id="dialogo1">
                    <p>asdsadsadsa</p>
                    <button type="button" onclick="cerrarDialogo('dialogo1')">Cerrar</button>
                </dialog>
            </div>
            `;
        }
    })
    console.log(servicios);
    document.querySelector("#servicios").insertAdjacentHTML("beforeend",servicios);
}