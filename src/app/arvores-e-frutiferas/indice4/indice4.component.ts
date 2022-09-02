import { Component, Input, OnInit } from '@angular/core';
import { Arvore } from '../../interfaces/arvore';

@Component({
  selector: 'app-indice4',
  templateUrl: './indice4.component.html',
  styleUrls: ['./indice4.component.css']
})
export class Indice4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  frutiferas: Arvore[] = [
    { especie: 'Jabuticabeira' },
    { especie: 'Limoeiro' },
    { especie: 'Pimenta biquinho' }
  ]

  ornamentais: Arvore[] = [
    { especie: 'Salix babylonica, ou Salgueiro Chorão' }
  ]

}
