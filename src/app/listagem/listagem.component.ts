import { Component, OnInit } from '@angular/core';
const produtosMock = [
  {
    nome: 'Camisa do Vasco',
    preco: 280,
    imagem:
      'https://images.tcdn.com.br/img/img_prod/1006590/camisa_vasco_oficial_iii_2023_kappa_masculina_camisas_negras_3587_1_c0b84d5befd6639dc4e2b4497e88bacf.jpg',
  },
  {
    nome: 'Playstation 5',
    preco: 4200,
    imagem: 'https://imgs.casasbahia.com.br/1557786896/1xg.jpg',
  },
  {
    nome: 'Iphone 14',
    preco: 5000,
    imagem: 'https://imgs.casasbahia.com.br/55058313/1g.jpg',
  },
  {
    nome: 'Air Fryer',
    preco: 411.65,
    imagem: 'https://imgs.casasbahia.com.br/55043353/1g.jpg?imwidth=1000',
  },
  {
    nome: 'Smart Tv 43',
    preco: 1994.05,
    imagem: 'https://imgs.casasbahia.com.br/55060816/1g.jpg',
  },
  {
    nome: 'Liquidificador',
    preco: 87.78,
    imagem: 'https://imgs.casasbahia.com.br/55029682/1xg.jpg',
  },
  {
    nome: 'Geladeira consul',
    preco: 2618.03,
    imagem: 'https://imgs.casasbahia.com.br/50004596/1xg.jpg',
  },
  {
    nome: 'guarda roupa',
    preco: 699,
    imagem: 'https://imgs.casasbahia.com.br/55055049/1g.jpg',
  },
];
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  produtos = produtosMock
  constructor() {}

  ngOnInit() {}

}
