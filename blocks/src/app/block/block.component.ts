import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() color: string;
  @Input() pos: number;
  constructor(private _socketService: SocketService) { }

  ngOnInit() {
  }

  logColor() {
    this._socketService.blockclicked({color:this.color,pos:this.pos})
  }

}
