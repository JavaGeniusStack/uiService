import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [RouterLink,NgIf]
})
export class MenuComponent implements OnInit {    
  isuserLoggedIn: boolean = false;
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
this.isuserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  } 

}
