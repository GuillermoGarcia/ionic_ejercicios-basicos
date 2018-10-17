import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {

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
