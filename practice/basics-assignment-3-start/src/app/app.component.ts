import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleText = false;
  logArr = [];

  toggleVisible () {
    this.visibleText = !this.visibleText;
    this.logArr.push({ time: new Date(), status: this.visibleText});
  }
}
