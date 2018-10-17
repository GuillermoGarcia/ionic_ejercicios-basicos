import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  nombre = 'Guillermo García';
  showName = false;

  constructor() { }

  ngOnInit() {
  }

  limpiaPantalla(){
    this.showName = false;
    console.log('limpiaPatalla - ' + this.showName);
  }

  muestraNombre(){
    this.showName = true;
    console.log('muestraNombre - ' + this.showName);
  }

}
