/*----------------------TEAM 1----------------------*/
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






/*----------------------TEAM 3----------------------*/





/*----------------------TEAM 4----------------------*/





