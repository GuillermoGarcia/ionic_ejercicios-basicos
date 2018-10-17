import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ejercicios = [
    { title: 'ejercicio01', name: 'EJERCICIO 1'},
    { title: 'ejercicio02', name: 'EJERCICIO 2'},
    { title: 'ejercicio03', name: 'EJERCICIO 3'},
    { title: 'ejercicio04', name: 'EJERCICIO 4'},
    { title: 'ejercicio05', name: 'EJERCICIO 5'},
    { title: 'ejercicio06', name: 'EJERCICIO 6'},
    { title: 'ejercicio07', name: 'EJERCICIO 7'}
  ];

}
