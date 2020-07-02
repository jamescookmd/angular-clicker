import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  bytes = 1;
  kilos = 2;
  megas = 3;
  byteClickerValue = 0;

  constructor() {
    // Start game loop.
    setInterval(() => {
      this.bytes += this.byteClickerValue;
    }, 1000);
  }

  makeByte() {
    this.bytes += 1;
  }

  makeKilo() {
    this.bytes -= 10;
    this.kilos += 1;
  }

  disableKilos() {
    return this.bytes < 10;
  }

  addByteClicker() {
    this.kilos -= 1;
    this.byteClickerValue += 1;
  }
}
