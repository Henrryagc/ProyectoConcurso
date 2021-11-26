import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  incrementa = 0;
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }
  public onClick() {
    this.incrementa = this.counter(this.incrementa)
 }
 private counter(incrementa: number): number {
  return 1 + incrementa;

}
getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}


}
