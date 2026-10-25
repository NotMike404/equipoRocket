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

// Esta función simula la descarga del inventario y devuelve productos con la estructura definida por TEAM 1.
const DEMORA_MS = 2200; // Cambio: 2.2 segundos son 2200 milisegundos.
const PROBABILIDAD_FALLO = 0.2;

export function fetchInventario(): Promise<Producto[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILIDAD_FALLO) {
        // Cambio: se usa exactamente el mensaje de error indicado en la consigna.
        reject(new Error('Servidor de inventarios no responde (503)'));
        return;
      }

      // Cambio: se entrega una copia del catálogo compartido, incluyendo el proveedor anidado.
      resolve(
        lista.map((producto) => ({
          ...producto,
          proveedor: { ...producto.proveedor }
        }))
      );
    }, DEMORA_MS);
  });
}

/*----------------------TEAM 3----------------------*/

// Cambio: calcula el subtotal del producto y aplica el descuento por volumen.
function calcularSubtotalConDescuento(producto: Producto): number {
  const subtotalProducto = producto.stock * producto.precioUnitario;
  let descuento = 0;

  // Cambio: aplica 10 % de descuento cuando hay 10 o más unidades del mismo producto.
  if (producto.stock >= 10) {
    descuento = subtotalProducto * 0.10;
  }

  return subtotalProducto - descuento;
}

// Cambio: el total usa el subtotal con descuentos antes de agregar el IVA del 13 %.
function calcularValorTotal(lista: Producto[]): number {
  const subtotalConDescuento = lista.reduce(
    (total, producto) => total + calcularSubtotalConDescuento(producto),
    0
  );

  // Cambio: agrega el IVA después de descontar el volumen.
  return subtotalConDescuento * 1.13;
}

function alertarStockCritico(lista: Producto[], limite: number): Producto[] {
  // Cambio: filter devuelve solo productos cuyo stock está por debajo del límite.
  return lista.filter((producto) => producto.stock < limite);
}

function filtrarPorPaisProveedor(
  lista: Producto[],
  pais: string
): Producto[] {
  // Cambio: normaliza mayúsculas y minúsculas para que, por ejemplo, "méxico" y "México" coincidan.
  return lista.filter(
    (producto) =>
      producto.proveedor.pais.toLowerCase() === pais.toLowerCase()
  );
}

/*----------------------TEAM 4----------------------*/

async function obtenerInventarioConReintento(): Promise<Producto[]> {
  try {
    return await fetchInventario();
  } catch (err) {
    // Cambio: si falla la primera consulta, se realiza un único segundo intento.
    console.warn('Falló la primera consulta; se intentará una vez más.', err);
    return await fetchInventario();
  }
}

// Cambio: resume el total, los montos por categoría y los productos de stock crítico.
function imprimirResumen(productos: Producto[]): void {
  console.log('Total monetario del almacén (IVA incluido):');
  console.log(calcularValorTotal(productos));

  // Cambio: acumula el valor con IVA por cada una de las categorías permitidas.
  const totalesPorCategoria: Record<Producto['categoria'], number> = {
    tecnologia: 0,
    hogar: 0,
    ropa: 0
  };

  for (const producto of productos) {
    // Cambio: el desglose también aplica el descuento de volumen y luego el IVA.
    totalesPorCategoria[producto.categoria] +=
      calcularSubtotalConDescuento(producto) * 1.13;
  }

  console.log('Desglose por categoría (IVA incluido):');
  console.table(totalesPorCategoria);

  // Cambio: muestra como alertas urgentes los productos con menos de 5 unidades.
  const alertas = alertarStockCritico(productos, 5);
  console.log('Alertas de reabastecimiento urgente:');
  console.table(
    alertas.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      stock: producto.stock,
      proveedor: producto.proveedor.razonSocial
    }))
  );
}

async function main(): Promise<void> {
  try {
    const productos = await obtenerInventarioConReintento();
    imprimirResumen(productos);
  } catch (err) {
    // Cambio: informa claramente si fallaron tanto la consulta inicial como el reintento.
    const mensaje = err instanceof Error ? err.message : String(err);
    console.error(`No se pudo cargar el inventario: ${mensaje}`);
  }
}

// Cambio: inicia la ejecución sin usar await fuera de una función async.
void main();
