import { Component } from '@angular/core';

@Component({
  selector: 'app-smooth-dnd',
  templateUrl: './smooth-dnd.component.html',
  styleUrls: ['./smooth-dnd.component.css']
})
export class SmoothDndComponent {
  public items: string[][];

  constructor() {
    this.items = [];
    for (let x = 0; x < 100; x += 1) {
      this.items.push([]);
      for (let y = 0; y < 50; y += 1) {
        this.items[x].push(`${x}, ${y}`);
      }
    }
  }
}
