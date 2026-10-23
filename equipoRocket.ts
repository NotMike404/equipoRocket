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

const lista: Producto[] = [
  {
    id: 1,
    nombre: 'Teclado',
    precioUnitario: 25,
    categoria: 'tecnologia',
    stock: 3,
    proveedor: {
      id: 'prov-01',
      razonSocial: 'Distribuidora Central',
      pais: 'México'
    }
  },

{
  id: 2,
  nombre: 'Lámpara de escritorio',
  precioUnitario: 30,
  categoria: 'hogar',
  stock: 4,
  proveedor: {
    id: 'prov-02',
    razonSocial: 'Hogar Moderno',
    pais: 'México'
  }
},

{
  id: 3,
  nombre: 'Audífonos inalámbricos',
  precioUnitario: 55,
  categoria: 'tecnologia',
  stock: 12,
  proveedor: {
    id: 'prov-03',
    razonSocial: 'Electrónica del Centro',
    pais: 'México'
  }
},
{
    id: 4,
    nombre: 'Camiseta',
    precioUnitario: 18,
    categoria: 'ropa',
    stock: 20,
    proveedor: {
      id: 'prov-04',
      razonSocial: 'Textiles del Sur',
      pais: 'Colombia'
    }
  },
  {
    id: 5,
    nombre: 'Silla de comedor',
    precioUnitario: 80,
    categoria: 'hogar',
    stock: 7,
    proveedor: {
      id: 'prov-05',
      razonSocial: 'Muebles del Norte',
      pais: 'México'
    }
  },
  {
    id: 6,
    nombre: 'Mouse inalámbrico',
    precioUnitario: 22,
    categoria: 'tecnologia',
    stock: 15,
    proveedor: {
      id: 'prov-06',
      razonSocial: 'Importadora Digital',
      pais: 'Chile'
    }
  },
  {
    id: 7,
    nombre: 'Pantalón',
    precioUnitario: 35,
    categoria: 'ropa',
    stock: 2,
    proveedor: {
      id: 'prov-07',
      razonSocial: 'Moda Actual',
      pais: 'Colombia'
    }
  },
  {
    id: 8,
    nombre: 'Estante',
    precioUnitario: 65,
    categoria: 'hogar',
    stock: 9,
    proveedor: {
      id: 'prov-08',
      razonSocial: 'Casa y Diseño',
      pais: 'Chile'
    }
  }
];

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


async function espera(): Promise<void> {
  console.log('Un momento porfavor...........');
} try {
    const lista = await reintentos();
    imprimirResumen(lista);
  } catch (err) {
    const mensaje = err instanceof Error ? err.message : String(err);
    console.error(`No pudimos encontrar lo solicitado: ${mensaje}`);
    process.exitCode = 1;
  }
  espera();