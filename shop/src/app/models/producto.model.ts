export interface Producto {
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
    categoriaId: number;
    descuentoActivo: boolean;
    porcentajeDescuento: number;
}