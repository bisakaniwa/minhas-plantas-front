import { Component, Input, OnInit, Output } from '@angular/core';
import { genero } from '../generos-suculentas/generos-suculentas.component'

@Component({
  selector: 'app-especies-suculentas',
  templateUrl: './especies-suculentas.component.html',
  styleUrls: ['./especies-suculentas.component.css']
})
export class EspeciesSuculentasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() genero = "";
  @Output() especie = "cristatus";

}

export class especie {}