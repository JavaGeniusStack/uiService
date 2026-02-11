import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { } 
  ngOnInit(): void {

  }

  username: string = 'amar';
  password: string = 'amar123';
  errorMessage: string = ' Invalid Credentials!';
  inValidLogin = false;
  onLogin() {
    if (this.username === 'amar' && this.password === 'amar123'
    ) {
      this.inValidLogin = false;
      this.router.navigate(['welcome', this.username
            ]);
      console.log('Login successful!');
    } else {
      this.inValidLogin = true;
    }
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
