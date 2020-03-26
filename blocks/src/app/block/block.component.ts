import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

  logColor() {
    console.log(this.color);
  }

}
