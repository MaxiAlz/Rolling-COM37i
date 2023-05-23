const productos = [
  {
    titulo: "Teléfono inteligente",
    descripcion: "Un dispositivo móvil con funcionalidades avanzadas",
    precio: 599.99,
    id: 1
  },
  {
    titulo: "Laptop",
    descripcion: "Una computadora portátil para trabajar o estudiar",
    precio: 1299.99
  },
  {
    titulo: "Smart TV",
    descripcion: "Un televisor con capacidad de conexión a internet",
    precio: 899.99
  },
  {
    titulo: "Teléfono inteligente",
    descripcion: "Un dispositivo móvil con funcionalidades avanzadas",
    precio: 599.99
  },
  {
    titulo: "Laptop",
    descripcion: "Una computadora portátil para trabajar o estudiar",
    precio: 1299.99
  },
  {
    titulo: "Smart TV",
    descripcion: "Un televisor con capacidad de conexión a internet",
    precio: 899.99
  },
  {
    titulo: "Auriculares inalámbricos",
    descripcion: "Auriculares sin cables para una mayor comodidad",
    precio: 129.99
  },
  {
    titulo: "Cámara digital",
    descripcion: "Una cámara compacta para capturar momentos especiales",
    precio: 349.99
  },
  {
    titulo: "Consola de videojuegos",
    descripcion: "Una plataforma para disfrutar de videojuegos",
    precio: 499.99
  },
  {
    titulo: "Altavoz inteligente",
    descripcion: "Un dispositivo con asistente virtual y capacidad de reproducción de música",
    precio: 79.99
  },
  {
    titulo: "Monitor de computadora",
    descripcion: "Una pantalla para visualizar contenido de la computadora",
    precio: 249.99
  },
  {
    titulo: "Tablet",
    descripcion: "Una computadora portátil con pantalla táctil",
    precio: 299.99
  },
  {
    titulo: "Impresora multifuncional",
    descripcion: "Un dispositivo que imprime, escanea y copia documentos",
    precio: 199.99
  }
];


const alertaDeCompra = (precio)=>{
  alert("Excelente eleccion pa'",precio)
}

const crearProducto =(tituo,descripcion,precio)=>{
  const newObject = {
    titulo: tituo,
    descripcion: descripcion,
    precio: precio
  }
productos.push(newObject)
}

const eliminarProducto = (idProductoEliminar)=>{
 const newProductArray = productos.map(product=> {
    if(product.id == idProductoEliminar){
      return 
    }
  })

  return newProductArray
}

const productContainer = document.getElementById("productContainer")

const productCards = productos.map((producto) => {

  //creo una card por cada producto

  const card = document.createElement("div")

   card.innerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${producto.titulo}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <button type="button" class="btn btn-primary" onclick="alertaDeCompra()"> COMPRAR POR $ ${producto.precio}</button>
    <button type="button" class="btn btn-primary" onclick="alertaDeCompra(id)"> Elimnar </button>
  </div>
</div>
  `;
  return card
})

productCards.forEach(card => {
  productContainer.appendChild(card)
})