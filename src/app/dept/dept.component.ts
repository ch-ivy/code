import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept',
  template: `
  <h2> Department List </h2>
  <ul class="items">
    <li (click)="onSelect(info)" *ngFor="let info of departments">
        <span class = "badge"> {{info.id}} </span> {{info.name}} 
    </li>
  </ul>
  `,
  styles: [`
  `]
})
export class DeptComponent implements OnInit {

  departments = [
    {"id" : 1, "name" : "Angular"},
    {"id" : 2, "name" : "Node"},
    {"id" : 3, "name" : "MongoDB"},
    {"id" : 4, "name" : "Ruby"},
    {"id" : 5, "name" : "Bootstrap"},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(info)
  {
      this.router.navigate(['/departments', info.id])
  }
}
