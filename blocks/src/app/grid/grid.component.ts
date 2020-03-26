import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  grid: any;
  colors:{
    1: string,
    2: string,
    3: string,
    4: string,
    5: string
  }
  constructor() { }

  ngOnInit() {
    this.colors = {
      1: 'red',
      2: 'blue',
      3: 'green',
      4: 'purple',
      5: 'white'
    }
    this.setupGrid(undefined)
  }

  setupGrid(grid){
    this.grid = grid || [
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
    ]
  }



}
