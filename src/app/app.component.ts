import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aula Virtual UNAM';
  goHome = '/aula/home'
  isShow = true
  onHide(): void {
    this.isShow = false
  }

}
