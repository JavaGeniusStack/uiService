import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  message : string = 'Welcome to the Todo Manager App Created By AMAR BHORE!';
  constructor() { }
  ngOnInit(): void {
    console.log(this.message);
  }
}
