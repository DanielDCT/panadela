import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  public listaMenu:Array<any> = []

  ngOnInit(): void {
    this.listaMenu = [
      {
        title: 'Capuchino Clásico',
        subtitle: 'La mezcla perfecta de café tostado, espuma de leche suave y un toque sutil de cacao, para despertar tus sentidos.',
        imagen: '././assets/imagenes/menu/c-clasico.jpg',
        precio: '$5.000'
      },
      {
        title: 'Capuchino Vainilla',
        subtitle: 'Delicioso capuchino con un aroma embriagador de vainilla y un toque de dulzura que te envuelve en cada sorbo.',
        imagen: '././assets/imagenes/menu/c-vainilla.jpg',
        precio: '$6.000'
      },
      {
        title: 'Capuchino Caramelo',
        subtitle: 'Déjate seducir por este capuchino suave y cremoso, donde se fusiona la intensidad del café con el dulce sabor del caramelo.',
        imagen: '././assets/imagenes/menu/c-caramelo.jpg',
        precio: '$6.500'
      },
      {
        title: 'Capuchino Moca',
        subtitle: 'Una combinación irresistible de café, chocolate y leche cremosa que te transporta a un mundo de placer y deleite.',
        imagen: '././assets/imagenes/menu/c-moka.jpg',
        precio: '$7.000'
      },
      {
        title: 'Capuchino Avellana',
        subtitle: 'Disfruta de la calidez y el aroma de este capuchino, con notas suaves de avellana que realzan su sabor y te reconfortan.',
        imagen: '././assets/imagenes/menu/c-avellana.jpg',
        precio: '$6.500'
      },
      {
        title: 'Capuchino Especiado',
        subtitle: 'Déjate cautivar por este capuchino con un toque de especias como canela y nuez moscada, que despiertan tus sentidos y te envuelven en su fragancia.',
        imagen: '././assets/imagenes/menu/c-especiado.jpg',
        precio: '$6.000'
      },
      {
        title: 'Capuchino Irlandés',
        subtitle: 'Un capuchino con un toque de whisky y crema irlandesa, que combina la suavidad del café con un toque de indulgencia y sofisticación.',
        imagen: '././assets/imagenes/menu/c-irlandes.jpg',
        precio: '$7.500'
      },
      {
        title: 'Capuchino Dulce de Leche',
        subtitle: 'Sumérgete en el dulce placer de este capuchino, con el cálido sabor del dulce de leche que endulza cada sorbo y te hace sonreír.',
        imagen: '././assets/imagenes/menu/c-dulce-de-leche.jpg',
        precio: '$6.500'
      }
    ]
}
}
