/*----------------------TEAM 1----------------------*/





/*----------------------TEAM 2----------------------*/

/**
 * inventario.ts
 *
 * Servicio simulado de inventario.
 * Expone `fetchInventario()`, que devuelve una promesa con la lista de
 * productos tras una demora de 2.2 segundos. Simula fallos de servidor:
 * con una probabilidad del 20 % rechaza con un error 503.
 */

export interface Productos {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}
/** Datos de ejemplo que devuelve el servicio simulado. */
const INVENTARIO_SIMULADO: Productos[] = [
  { id: 1, nombre: "Teclado mecnico\u00e1", categoria: "Perifricos\u00e9", precio: 79.99, stock: 24 },
  { id: 2, nombre: "Raton inalmbrico\u00f3", categoria: "Perifricos\u00e9", precio: 29.5, stock: 60 },
  { id: 3, nombre: "Monitor 27\" 144Hz", categoria: "Pantallas", precio: 249.0, stock: 12 },
  { id: 4, nombre: "Webcam 1080p", categoria: "Accesorios", precio: 45.75, stock: 0 },
  { id: 5, nombre: "Auriculares USB-C", categoria: "Audio", precio: 59.9, stock: 33 },
];

/** Demora de la respuesta simulada, en milisegundos. */
const DEMORA_MS = 22

/** Probabilidad de que el servidor "no responda" (0.0 - 1.0). */
const PROBABILIDAD_FALLO = 0.2;

 */la simulaci\u00f3n decide fallar.
 
 export function fetchInventario(): Promise<Productos[]> {
  return new Promise<Productos[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILIDAD_FALLO) {
        reject(new Error("Servidor de inventarios no responden (503)"));
        return;
      }
      // Se devuelve una copia para evitar mutaciones externas del origen.
      resolve(INVENTARIO_SIMULADO.map((producto) => ({ ...productos })));
    }, DEMORA_MS);
  });

/*----------------------TEAM 3----------------------*/





/*----------------------TEAM 4----------------------*/