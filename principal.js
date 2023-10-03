let acciones = document.getElementById('mostrar_datos');
let symbol ='';

let nombreEmpresas = [{ticker:'MSFT'},];

let recorrerLista = () =>{
        nombreEmpresas.map(async function(empresa){
        symbol = empresa.ticker;
        let urlPrecio = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=ce8iqbqad3i1ljtnvf30ce8iqbqad3i1ljtnvf3g`;
        let res = await fetch(urlPrecio);
        let datos = await res.json();
        console.log(datos);
        let div = document.createElement('div');
        div.innerHTML = `<p class="texto_especial">${empresa.ticker}</p>
                        <p class="texto_especial_2">: ${datos.c} USD</p>`;
        acciones.appendChild(div);
    })
};

/*Hola, estoy de incógnito*/
let luisestuvoaqui = 0;

sssaaaa
let acciones2 = document.getElementById('mostrar_datos2');

let nombreEmpresas2 = [{ticker:'TSLA'},];

let recorrerLista2 = () =>{
        nombreEmpresas2.map(async function(empresa){
        symbol = empresa.ticker;
        let urlPrecio = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=ce8iqbqad3i1ljtnvf30ce8iqbqad3i1ljtnvf3g`;
        let res = await fetch(urlPrecio);
        let datos = await res.json();
        console.log(datos);
        let div = document.createElement('div');
        div.innerHTML = `<p class="texto_especial">${empresa.ticker}</p>
                        <p class="texto_especial_2">: ${datos.c} USD</p>`;
        acciones2.appendChild(div);
    })
};





let acciones3 = document.getElementById('mostrar_datos3');

let nombreEmpresas3 = [{ticker:'AAPL'},];

let recorrerLista3 = () =>{
        nombreEmpresas3.map(async function(empresa){
        symbol = empresa.ticker;
        let urlPrecio = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=ce8iqbqad3i1ljtnvf30ce8iqbqad3i1ljtnvf3g`;
        let res = await fetch(urlPrecio);
        let datos = await res.json();
        console.log(datos);
        let div = document.createElement('div');
        div.innerHTML = `<p class="texto_especial">${empresa.ticker}</p>
                        <p class="texto_especial_2">: ${datos.c} USD</p>`;
        acciones3.appendChild(div);
    })
};





let acciones4 = document.getElementById('mostrar_datos4');

let nombreEmpresas4 = [{ticker:'AMZN'},];

let recorrerLista4 = () =>{
        nombreEmpresas4.map(async function(empresa){
        symbol = empresa.ticker;
        let urlPrecio = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=ce8iqbqad3i1ljtnvf30ce8iqbqad3i1ljtnvf3g`;
        let res = await fetch(urlPrecio);
        let datos = await res.json();
        console.log(datos);
        let div = document.createElement('div');
        div.innerHTML = `<p class="texto_especial">${empresa.ticker}</p>
                        <p class="texto_especial_2">: ${datos.c} USD</p>`;
        acciones4.appendChild(div);
    })
};


window.addEventListener('load', recorrerLista);
window.addEventListener('load', recorrerLista2);
window.addEventListener('load', recorrerLista3);
window.addEventListener('load', recorrerLista4);

let asiel = 1; /* Ejemplo */
