import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  respuesta = '';
  incrementa = 0;

  public onAlert(): void {    
    if(confirm("Que onda xddd")) {
      this.respuesta = 'Respuesta postiva';
    } else {
      this.respuesta = 'Respuesta negativa';
    }
  }

  public onClick() {
     this.incrementa = this.counter(this.incrementa)
  }

  private counter(incrementa: number): number {
    return 1 + incrementa;
  }
}
