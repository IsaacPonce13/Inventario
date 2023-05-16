class Inventario{
    constructor(){
        this.ListaP = [];
    }

    agregar(NewProd){
        //Agregar Producto
        this.ListaP.push(NewProd);
    }

    buscar(codigoProd){
        for (let i=0; i < this.ListaP.length; i++){
            if(this.ListaP[i].idP == codigoProd){
                return this.ListaP[i];
            }
        }
        return {};
    }

    listar(){
        return this.ListaP;
    }
}
module.exports = new Inventario();
