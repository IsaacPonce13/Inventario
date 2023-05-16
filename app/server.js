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

const inventario = require('../DB/Inventario');
const Producto = require('../DB/Productos');

const producto1 = new Producto(1, 'Producto 1', 10, 100);
const producto2 = new Producto(2, 'Producto 2', 5, 50);

inventario.agregar(producto1);
inventario.agregar(producto2);
console.log(inventario);
/*console.log(inventario.buscar(1));
console.log(inventario.listar());
*/

app.get('/productos',(req,res)=>{
    res.json(inventario.listar())
})

app.get('/productos/:id',(req,res)=>{
    console.log(req.params.id)
    res.json(inventario.buscar(req.params.id))
})
app.post('/productos',(req,res)=>{
    console.log(req.body);
    let idP=req.body.idP;
    let nombreP=req.body.nombreP;
    let CantP=req.body.cantP;
    let costoP=req.body.costoP;
    let producto=new Producto(idP,nombreP,CantP,costoP);
    inventario.agregar(producto);
    res.json({msg:"insercion correcta"})
})

app.listen(3000,()=>{console.log("escuchando en 3000")})
