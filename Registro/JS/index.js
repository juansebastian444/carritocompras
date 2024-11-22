const carrito = document.getElementById('carrito');
const contenedor = document.querySelector('.contenedor');
console.log(contenedor);
console.log(carrito);
const contenedorCarrito = document.getElementById('lista-carrito').querySelector('tbody');
let carritoALL = []
Mostrarcarrito()//llamando a la funcion
function Mostrarcarrito(){
    carrito.addEventListener('click',()=>{
        const modal = new bootstrap.Modal(document.getElementById('Mimodal'));
        modal.show();
    })
}
cargar()
function cargar(){
    contenedor.addEventListener('click',cargarProductos);
}
function cargarProductos(e){
    const seleccionado = e.target.classList.contains('btn-primary');
    if (seleccionado) {
        const plataseleccionada = e.target.parentElement.parentElement;
        console.log(plataseleccionada);
        leerDatos(plataseleccionada);
    }
}
function leerDatos(data){
    console.log(data);

    const productos = {
        img : data.querySelector('img').src,
        nombre : data.querySelector('h3').textContent,
        precio: Math.floor(data.querySelector('p').innerText.replace(/[^0-9.-]+/g, "")),
        cantidad: 1,
        id :  data.querySelector('button').getAttribute('data-id')

    }
    carritoALL = [...carritoALL,productos] //spread operator
    console.log(carritoALL);
    ActualizarcarritoHtml();
}
//actualizar carrito html
function ActualizarcarritoHtml(){
    contenedorCarrito.innerHTML = '';
    const row = document.createElement('tr');
    carritoALL.forEach((producto)=>{
        const {img,nombre,precio,cantidad,id} = producto;
        row.innerHTML = `
        <td><img src="${img}"widht="20"/td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>${id}</td>
        `;
    })
    contenedorCarrito.appendChild(row)
}