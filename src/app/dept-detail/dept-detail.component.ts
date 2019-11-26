import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>
      You have entered {{departmentId}}'s page
    </h3>
    <button class = "badge" routerLink = "/departments"> Back </button>
  `,
  styles: []
})
export class DeptDetailComponent implements OnInit {

  public departmentId;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
