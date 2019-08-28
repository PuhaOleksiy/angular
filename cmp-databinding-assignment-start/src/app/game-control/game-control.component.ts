import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() interval = new EventEmitter<number>();
  counter = 0;
  odds = [];
  evens = [];
  timer;


  constructor() { }

  ngOnInit() {
  }

  start() {
    this.timer = setInterval(() => {
      this.interval.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
  clear() {
    this.stop();
    this.counter = 0;
    this.odds = [];
    this.evens = [];
  }

}
