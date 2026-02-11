import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [RouterLink]
})
export class FooterComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
  }

}
