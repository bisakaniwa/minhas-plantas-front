import { Component, OnInit } from '@angular/core';
import { Plantas } from '../../interfaces/plantas';

@Component({
  selector: 'app-indice3',
  templateUrl: './indice3.component.html',
  styleUrls: ['./indice3.component.css']
})
export class Indice3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banheiro: Plantas[] = [
    { especie: 'Calathea makoyana, ou "Maranta pavão"' },
    { especie: 'Chamaedora elegans, ou "Mini palmeira"' },
    { especie: 'Fitônia rosa ou pink' },
    { especie: 'Fitônia verde limão' },
    { especie: 'Fitônia verde escuro' },
    { especie: 'Samambaia havaiana' },
    { especie: 'Selaginela uncinata ou "Samambaia azul"' }
  ]

  interior: Plantas[] = [
    { especie: 'Cravina roxa' },
    { especie: 'Orquídea dendrobium' },
    { especie: 'Orquídea phalaenopsis' },
    { especie: 'Pimenta ornamental' },
    { especie: 'Serissa foetida' },
    { especie: 'Serissa foetida variegata' }
  ]

  exterior: Plantas[] = [
    { especie: 'Cebolinha' },
    { especie: 'Hibisco vermelho' },
    { especie: 'Hortelã' },
    { especie: 'Manjericão verde' },
    { especie: 'Manjericão roxo' },
    { especie: 'Salsinha' }
  ]
}
