import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept',
  template: `
  <h2> Department List </h2>
  <ul class="items">
    <li (click)="onSelect(info)"  [class.selected]="isSelected(info)" *ngFor="let info of departments">
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
  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(info)
  {
      this.router.navigate(['/departments', info.id])
  }
  isSelected(info)
  {
    return info.id === this.selectedId;
  }
}
