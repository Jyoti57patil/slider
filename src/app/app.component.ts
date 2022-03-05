import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  case: number = 1;
  next() {
    if (this.case < 5) {
      this.case++;
    }
  }
  prev() {
    if (this.case > 1) {
      this.case--;
    }
  }
}
