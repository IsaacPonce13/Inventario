class Inventario{
    constructor(){
        this.ListaP = [
            {id:1, nombre:'a', cantidad: 10, costo: 20}, 
            {id:2, nombre:'b', cantidad: 15, costo: 25},
            {id:3, nombre:'c', cantidad: 20, costo: 30}
        ];
    }

    agregar(NewProd){
        //Agregar Producto
        this.ListaP.push(NewProd);
    }

    buscar(codigoProd){
        for (let i=0; i < this.ListaP.length; i++){
            if(this.ListaP[i].codigo == codigoProd){
                return this.ListaP[i];
            }
        }
        return null;
    }

    listar(){
        return this.ListaP;
    }
}
module.exports = Inventario;