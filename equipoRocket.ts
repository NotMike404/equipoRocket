/*Caso Real: Una cadena minorista recibe stock de múltiples distribuidores. La app debe descargar el catálogo de la
nube, calcular el IVA (13%) y descuento según volumen, alertar por productos críticos y manejar caídas de red del
servidor central&*/

/*----------------------TEAM 1----------------------*/
//Modelar interface Proveedor 
// { id: string; razonSocial: string; pais: string } 
// e interface Producto { id: number; nombre: string;
//precioUnitario: number; categoria: 'tecnologia' | 'hogar' | 'ropa';
//stock: number; proveedor: Proveedor }. Armar array feik de 8 productos con al
//menos 2 con stock menor a 5 unidades.

interface Proveedor {
  id: string;
  razonSocial: string;
  pais: string;
}

interface Producto {
  id: number;
  nombre: string;
  precioUnitario: number;
  categoria: 'tecnologia' | 'hogar' | 'ropa';
  stock: number;
  proveedor: Proveedor;
}

/*----------------------TEAM 2----------------------*/
//Exportar fetchInventario(): Promise<Producto[]> con demora de 2.2s. Añadir lógica
//de simulación: si Math.random() < 0.2, rechazar con Error("Servidor de
//inventarios no responde (503)").


/*----------------------TEAM 3----------------------*/
//1) calcularValorTotal(lista: Producto[]): number 
//(suma total de stock × precio con 13% de impuesto incluido).
function calcularValorTotal(lista: Producto[]): number {
let suma = 0;
for (const producto of lista) {
suma += producto.stock * producto.precioUnitario;
}
return suma * 1.13;
}   

console.log(calcularValorTotal(lista));


//2) alertarStockCritico(lista: Producto[], limite: number): Producto[].
function alertarStockCritico(lista: Producto[], limite: number): Producto []{
    let critico: Producto[]=[];
    for (const producto of lista){
        if(producto.stock < limite){
            critico.push(producto);
        }
    }
    return critico;
}

//3)filtrarPorPaisProveedor(lista: Producto[], pais: string): Producto[].
function filtrarPorPaisProveedor(lista: Producto[], pais: string): Producto [] {
  return lista.filter (p => p.proveedor.pais == pais)
}



/*----------------------TEAM 4----------------------*/





