import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = 'amar';
  password: string = 'amar123';
onLogin() {
  console.log('Login button clicked!');
  console.log('Username:', this.username);
  console.log('Password:', this.password);      
}
onReset() {
  console.log('Reset button clicked!');
  this.username = '';
  this.password = '';
}
}
