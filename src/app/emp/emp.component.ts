import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  template: `
  <h2> Employee List </h2>
  <ul class="items">
    <li *ngFor="let info of departments">
        <span class = "badge"> {{info.id}} </span> {{info.name}}
    </li>
  </ul>
  `,
  styles: []
})
export class EmpComponent implements OnInit {

  departments = [
    {"id" : 1, "name" : "Angular"},
    {"id" : 2, "name" : "Node"},
    {"id" : 3, "name" : "MongoDB"},
    {"id" : 4, "name" : "Ruby"},
    {"id" : 5, "name" : "Bootstrap"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
