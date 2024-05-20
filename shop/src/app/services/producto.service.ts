import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    { nombre: 'Exploding Kittens: Puzzle ', precio: 15990, imagen: 'assets/images/producto/exploding-kittens-sloths-puzzle-1000-pieces.jpg', descripcion: 'La pereza de la memoria. Perezosos derritiéndose con el paso del tiempo, haciendo lo que más les gusta, nada.', categoriaId: 4, descuentoActivo: true, porcentajeDescuento: 20 },
    { nombre: 'Favelas', precio: 34990, imagen: 'assets/images/producto/favelas.jpg', descripcion: '¡Favelas es un juego de colocación de baldosas sobre el embellecimiento de las icónicas favelas de Río de Janeiro!', categoriaId: 4, descuentoActivo: false, porcentajeDescuento: 0 },
    { nombre: 'Mazescape: Labyrinthos', precio: 10000, imagen: 'assets/images/producto/mazescape-labyrinthos.jpg', descripcion: 'Mazescape: Labyrinthos atravesarás tres territorios bien definidos: los muelles, el cementerio y la montaña. Un juego solitario que pone a prueba tu lógica frente a un laberinto.', categoriaId: 4, descuentoActivo: true, porcentajeDescuento: 10 },
    { nombre: 'Exit Kids: Acertijos en la Jungla', precio: 14990, imagen: 'assets/images/producto/exit-kids-acertijos-en-la-jungla-.jpg', descripcion: 'EXIT Kids: Acertijos en la jungla es un juego de escape cooperativo, que se puede disfrutar en solitario o en un grupo de hasta 4 personas, a partir de 5 años, en partidas que pueden durar unos 20 minutos.', categoriaId: 1, descuentoActivo: false, porcentajeDescuento: 0 },
    { nombre: 'Kingdomino - Giant Version', precio: 59990, imagen: 'assets/images/producto/kingdomino-giant-version.jpg', descripcion: 'En Kingdomo, tú eres un Señor buscando nuevas tierras en las que expandir su reino. ¡Un reino gigante!', categoriaId: 1, descuentoActivo: true, porcentajeDescuento: 15 },
    { nombre: 'Sushi Go!', precio: 13000, imagen: 'assets/images/producto/sushi-go.jpg', descripcion: 'En el juego de cartas de sushi súper rápido Sushi Go!, estás comiendo en un restaurante de sushi e intentas tomar la mejor combinación de platos de sushi mientras pasan.', categoriaId: 1, descuentoActivo: false, porcentajeDescuento: 0 },
    { nombre: 'Exit: La Mansión Siniestra', precio: 12990, imagen: 'assets/images/producto/mazescape-labyrinthos.jpg', descripcion: 'Exit: La Mansión Siniestra es un juego de mesa con el que vivirás la experiencia de las “escape room” en tu propia casa. Atrévete a entrar en la Mansión Siniestra y descubre todos los misterios y acertijos que en ella encontraras…', categoriaId: 2, descuentoActivo: true, porcentajeDescuento: 5 },
    { nombre: 'Tales from the Loop: The Board Game', precio: 84990, imagen: 'assets/images/producto/tales-from-the-loop-the-board-game.jpg', descripcion: '¡Adéntrate en el asombroso mundo de Tales From the Loop de Simon Stålenhag! En este juego de mesa genial para 1 a 5 jugadores.', categoriaId: 2, descuentoActivo: false, porcentajeDescuento: 0 },
    { nombre: '¡Rescate!', precio: 32990, imagen: 'assets/images/producto/rescate.jpg', descripcion: '¡Rescate! es un juego cooperativo de lucha contra el fuego. Los jugadores son un equipo de bomberos que acude a un incendio con el objetivo de rescatar a todos los ocupantes de un edificio.', categoriaId: 2, descuentoActivo: false, porcentajeDescuento: 0 },
    { nombre: 'Caesars Empire', precio: 59990, imagen: 'assets/images/producto/caesar-s-empire.jpg', descripcion: 'Caesars Empire es un eurojuego de 2 a 5 jugadores sobre la construcción de carreteras, ambientado en el mundo de la querida serie de cómics Asterix.', categoriaId: 3, descuentoActivo: true, porcentajeDescuento: 30 },
    { nombre: 'Pylos', precio: 29990, imagen: 'assets/images/producto/pylos.jpg', descripcion: 'En Pylos, quieres ser uno de los que coloca la bola final en la parte superior de la pirámide. Suena bastante simple, ¿verdad?', categoriaId: 3, descuentoActivo: false, porcentajeDescuento: 0 },
    { nombre: 'Catan - El Juego', precio: 200, imagen: 'assets/images/producto/catan-el-juego.jpg', descripcion: 'En Catan, los jugadores intentan ser la fuerza dominante en la isla de Catan mediante la construcción de asentamientos, ciudades y carreteras. En cada turno se tiran los dados para determinar qué recursos produce la isla.', categoriaId: 3, descuentoActivo: true, porcentajeDescuento: 25 },
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductosPorCategoria(categoriaId: number): Producto[] {
    return this.productos.filter(producto => producto.categoriaId === categoriaId);
  }
}