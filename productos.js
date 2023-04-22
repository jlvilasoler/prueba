const productos = [{
    id: 60001,
    foto: "./img/Aguacongasnativa600ml.png",
    articulo: "Agua con gas",
    descripcion: "BT 600ml",
    marca: "NATIVA",
    precio: 148.50,
    alt: "Nativa - Agua con gas BT 600ml",
    cantidadCompra: 1
},
{
    id: 60002,
    foto: "./img/DentalcleanHilodentalconcera130m.jpg",
    articulo: "Hilo Dental",
    descripcion: "Con cera 130m",
    marca: "DENTALCLEAN",
    precio: 119.00,
    alt: "Dentalclean - Hilo Dental con cera 130m",
    cantidadCompra: 1
},
{
    id: 60003,
    foto: "./img/EnjuagueBucalDENTALCLEANBlueDiamond-Mentasuave.jpg",
    articulo: "Enjuague Bucal",
    descripcion: "Blue Diamond",
    marca: "DENTALCLEAN",
    precio: 250.50,
    alt: "Dentalclean - Enjuague Bucal Blue Diamond Menta Suave",
    cantidadCompra: 1
},
{
    id: 60004,
    foto: "./img/EnjuagueBucalDENTALCLEANGreenDiamond-HortelaSuave.jpg",
    articulo: "Enjuague Bucal",
    descripcion: "Green Diamond",
    marca: "DENTALCLEAN",
    precio: 250.00,
    alt: "Dentalclean - Enjuague Bucal Green Diamond Hortela Suave",
    cantidadCompra: 1
},
{
    id: 60005,
    foto: "./img/CEPERASalsadeSoja150ml.jpg",
    articulo: "Salsa de Soja",
    descripcion: "150ml",
    marca: "CEPERA",
    precio: 59.00,
    alt: "Cepera - Salsa de Soja 150 ml",
    cantidadCompra: 1
},
{
    id: 60006,
    foto: "./img/CEPERASalsacalabresayPimienta150ml.jpg",
    articulo: "Salsa",
    descripcion: "Calabresa y Pimienta",
    marca: "CEPERA",
    precio: 49.00,
    alt: "Cepera - Salsa Calabresa y Pimienta",
    cantidadCompra: 1
},
{
    id: 60007,
    foto: "./img/MayonesaSalsayCebollaSinGluten.jpg",
    articulo: "Mayonesa",
    descripcion: "Salsa y Cebolla",
    marca: "CEPERA",
    precio: 49.00,
    alt: "Cepera - Mayonesa Salsa y Cebolla Sin Gluten",
    cantidadCompra: 1
},
{
    id: 60008,
    foto: "./img/CEPERASalsaInglesa150ml.jpg",
    articulo: "Salsa Inglesa",
    descripcion: "150ml",
    marca: "CEPERA",
    precio: 49,
    alt: "Cepera- Salsa Inglesa 150ml",
    cantidadCompra: 1
},
{
    id: 60009,
    foto: "./img/dulcedeleche-los-nietitos.png",
    articulo: "Dulce de leche",
    descripcion: "700g",
    marca: "LOS NIETITOS",
    precio: 130.00,
    alt: "Los Nietitos - Dulce de leche 700g",
    cantidadCompra: 1
},
{
    id: 60010,
    foto: "./img/cocacola1.jpg",
    articulo: "Coca Cola",
    descripcion: "Sabor Original 1.5L",
    marca: "COCA COLA",
    precio: 170.00,
    alt: "Coca Cola - Coca Cola Sabor Original 1.5L",
    cantidadCompra: 1
},
{
    id: 60011,
    foto: "./img/Patricia340cc.png",
    articulo: "Cerveza",
    descripcion: "340cc",
    marca: "PATRICIA",
    precio: 100.00,
    alt: "Patricia - Cerveza 340cc",
    cantidadCompra: 1
},
{
    id: 60012,
    foto: "./img/salusfrutte-limonada.png",
    articulo: "Agua Saborizada",
    descripcion: "Frutte Limonada 1L",
    marca: "SALUS",
    precio: 110.00,
    alt: "Salus - Agua saborizada 1L",
    cantidadCompra: 1
}
];


// 3-
const productosContenedor = document.getElementById("productos");

// 2- 
function crearProducto(producto) {
    const articulo = document.createElement("article"); //con esto creamos el nodo , como creamos los nodos? con INNER o con esto "un tag"


function comprarProducto(e) {
    alert(`Gracias por comprar el producto ${e.target.parentNode.dataset.producto}`);

}

//4.a
const foto = document.createElement("img");
const nombre = document.createElement("h2");
const descripcion = document.createElement("h2");
const marca = document.createElement("p");
const precio = document.createElement("p");
const comprar = document.createElement("button");

//5.a Con esto agregamos la informacion de texto que queremos que aparezca en cada etiqueta
const textoNombre = document.createTextNode(producto.articulo)//nodo de texto
nombre.appendChild(textoNombre);//Se agrega nombre al nodo textoNombre 

const textoPrecio = document.createTextNode(producto.precio)//nodo de texto
precio.appendChild(textoPrecio);//Se agrega nombre al nodo textoNombre 

const textoMarca = document.createTextNode(producto.marca)//nodo de texto
marca.appendChild(textoMarca);//Se agrega nombre al nodo textoNombre 




//5.b : Otra forma de agregar texto a las etiquetas es con:
descripcion.textContent = producto.descripcion;

//6 - agregamos la imagen a cada elemento
foto.src = producto.foto; //agregamos imagenes en cada elemento
foto.alt = producto.alt; //texto alternativo para accesivilidad
foto.className = "imagenes";



//boton comprar:
comprar.textContent = "Comprar";
comprar.addEventListener("click", comprarProducto);

//En el boton comprar asociarlo a cada ID de Producto
articulo.dataset.producto = producto.alt;


//4.b
articulo.appendChild(foto);
articulo.appendChild(nombre);
articulo.appendChild(descripcion);
articulo.appendChild(marca);
articulo.appendChild(precio);
articulo.appendChild(comprar);

productosContenedor.appendChild(articulo);
}

// 1- 
productos.forEach(crearProducto);


const boton = document.createElement('button');
boton.classList.add('misEstilos');
boton.id = 'miId'