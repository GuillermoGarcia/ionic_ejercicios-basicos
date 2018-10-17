import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  minimo: number;
  maximo: number;
  generado: number;

  constructor() { }

  ngOnInit() {
    this.generado = 0;
  }

  aleatorio(){
    this.generado = +this.minimo + Math.floor((Math.random() * (this.maximo - this.minimo)));
  }

}
