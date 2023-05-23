class Producto {
  constructor(nombre) {
    this.nombre = nombre;
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  eliminarProducto(producto) {
    //busca si el producto ingresado existe y guarda el lugar que ocupa en el array en la variable index
    const index = this.productos.indexOf(producto);
    this.productos.splice(index, 1); //elimina del array lo que esta en la posicion que vale index
  }

  mostrarProductos() {
    console.log("Productos en el carrito:");
    this.productos.forEach((producto) => {
      console.log(`-${producto}-`);
    });
  }

  //buscar un producto => usa la misma logica que el eliminar
}




