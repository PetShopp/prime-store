// Array para almacenar los productos en el carrito
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    const producto = {
        nombre: 'Camiseta de Algodón',
        precio: 20
    };
    carrito.push(producto);
    console.log('Producto agregado al carrito:', producto.nombre);
}
