import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  pesetas: number;
  euros: number;

  constructor() { }

  ngOnInit() {
    this.pesetas = 0;
    this.euros = 0;
  }

  deEurosAPesetas(){
    this.pesetas = (+this.euros * 166.386);
  }

  dePesetasAEuros(){
    this.euros = (+this.pesetas / 166.386);
  }

}
