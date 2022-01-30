import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  goHome = '/aula/home'
  isShow = true
  onHide(): void {
    this.isShow = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
