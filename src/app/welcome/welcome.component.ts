import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  imports: [NgIf, RouterLink]
})
export class WelcomeComponent implements OnInit {

  message: string = 'Welcome  to the Todo Manager App empowered with Eissenhower Matrix!';
  name: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('username'));
    this.name = this.route.snapshot.paramMap.get('username') || '';
    console.log(this.message);
  }
}
