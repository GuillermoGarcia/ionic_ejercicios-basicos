import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio06',
  templateUrl: './ejercicio06.page.html',
  styleUrls: ['./ejercicio06.page.scss'],
})
export class Ejercicio06Page implements OnInit {

  pos: number;

  constructor() { }

  ngOnInit() {
    this.pos = 1;
  }

}
