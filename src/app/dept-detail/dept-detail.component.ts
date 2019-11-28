import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>
      You have entered {{departmentId}}'s page
    </h3>
    <a (click)='goPrevious()'  class = "card"> Previous </a>
    <a (click)='goNext()' class = "card"> Next </a>
    <button (click)='goToDept()' class = "badge"> Back to main list </button>
  `,
  styles: []
})
export class DeptDetailComponent implements OnInit {

  public departmentId;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
   // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious()
  {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments',previousId]);
  }
  goNext()
  {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
  goToDept()
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
    //this.router.navigate(['/departments', {id: selectedId, test:'testvlaue'}]);
  }
}
