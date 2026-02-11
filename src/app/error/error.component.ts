import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: false,
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  errorMessage: string = 'An unexpected error has occurred. Please  contact support on : 9854987171';
}
