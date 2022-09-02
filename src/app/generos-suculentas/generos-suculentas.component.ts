import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos-suculentas',
  templateUrl: './generos-suculentas.component.html',
  styleUrls: ['./generos-suculentas.component.css']
})
export class GenerosSuculentasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() genero = "Adromischus"


}
export class genero {}