import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragula',
  templateUrl: './dragula.component.html',
  styleUrls: ['./dragula.component.css']
})
export class DragulaComponent implements OnInit {
  public items: string[][];

  constructor(
    private ds: DragulaService
  ) {
    this.items = [];
    for (let x = 0; x < 100; x += 1) {
      this.items.push([]);
      for (let y = 0; y < 100; y += 1) {
        this.items[x].push(`${x}, ${y}`);
      }
    }
  }

  ngOnInit(): void {
    this.ds.dropModel('LIST').subscribe((val) => console.log('item', val));
  }
}
