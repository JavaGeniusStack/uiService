import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common'; 
@Component({
  selector: 'app-listtodos',
  standalone: true,
  templateUrl: './listtodos.component.html',
  styleUrl: './listtodos.component.css',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe]
})

export class ListtodosComponent implements OnInit {
  todos = [
    new todo(1, 'Learn Angular', false, new Date()),
    new todo(2, 'Learn Spring Boot', false, new Date()),
    new todo(3, 'Learn React', false, new Date()) 
    // { id: 1, description: 'Learn Angular', done: false, targetDate: new Date() },
    // { id: 2, description: 'Learn Spring Boot', done: false, targetDate: new Date() },
    // { id: 3, description: 'Learn React', done: false, targetDate: new Date() }
  ];
  // todo = 
  //   { id: 1,
  //     description: 'Learn Angular', 
  //     done: false,
  //     targetDate: new Date() 
  //   };
   
 
  constructor() { }
 
  ngOnInit() {
  }
 
}

export class todo  {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) { }

}