import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit {

  nombre: String;
  saludo: String;
  mostrarSaludo = false;

  constructor() { }

  ngOnInit() {
  }

  saludar(){
    this.saludo = '¡Hola, ' + this.nombre + '!';
    this.mostrarSaludo = true;
  }

}
