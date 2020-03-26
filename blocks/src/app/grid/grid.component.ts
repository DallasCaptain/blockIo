import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

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
  constructor(private _socketService: SocketService) { }

  ngOnInit() {
    this.colors = {
      1: 'red',
      2: 'blue',
      3: 'green',
      4: 'purple',
      5: 'white'
    }
    this._socketService.connect().subscribe(data=>{
      //@ts-ignore
      if(!data.data.color){
        console.log(data)
      }else{
        console.log('updating',data)
        //@ts-ignore
      let newcolor = data.data.color
      //@ts-ignore
      let pos = data.data.pos
      for(let i = 0; i < this.grid[pos].length; i++){
        this.grid[pos][i].color = newcolor
      }
      }

    })
    this.setupGrid(undefined)
  }

  setupGrid(grid){
    this.grid = grid || [
      [{color:1,pos:0},{color:1,pos:0},{color:1,pos:0},{color:1,pos:0},{color:1,pos:0},{color:1,pos:0},{color:1,pos:0},{color:1,pos:0},{color:1,pos:0},{color:1,pos:0}],
      [{color:1,pos:1},{color:1,pos:1},{color:1,pos:1},{color:1,pos:1},{color:1,pos:1},{color:1,pos:1},{color:1,pos:1},{color:1,pos:1},{color:1,pos:1},{color:1,pos:1}],
      [{color:1,pos:2},{color:1,pos:2},{color:1,pos:2},{color:1,pos:2},{color:1,pos:2},{color:1,pos:2},{color:1,pos:2},{color:1,pos:2},{color:1,pos:2},{color:1,pos:2}],
      [{color:1,pos:3},{color:1,pos:3},{color:1,pos:3},{color:1,pos:3},{color:1,pos:3},{color:1,pos:3},{color:1,pos:3},{color:1,pos:3},{color:1,pos:3},{color:1,pos:3}],
      [{color:1,pos:4},{color:1,pos:4},{color:1,pos:4},{color:1,pos:4},{color:1,pos:4},{color:1,pos:4},{color:1,pos:4},{color:1,pos:4},{color:1,pos:4},{color:1,pos:4}],

    ]
  }



}
