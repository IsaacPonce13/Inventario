//let datos = [{id:1, nombre:'a'}, {id:2, nombre:'b'}];
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// const datos = require('./DB/Inventario.js');
// app.get('/DB/inventario',(req,res)=>{
//     const productos = datos.mostrarProd();
//     res.send(productos)
// })

const Producto = require('./DB/Inventario/Inventario');
const Inventario = require('./DB/Productos/Producto');

const inventario = new Inventario();

const producto1 = new Producto(1, 'Producto 1', 10, 100);
const producto2 = new Producto(2, 'Producto 2', 5, 50);

inventario.agregar(producto1);
inventario.agregar(producto2);

console.log(inventario.buscar(1));
console.log(inventario.listar());

app.listen(3000,()=>{console.log("escuchando en 3000")})