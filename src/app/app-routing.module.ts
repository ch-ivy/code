import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';


const routes: Routes = [
  {
    path: "", redirectTo: '', pathMatch: 'full'
  },
  {
    path : 'departments', component : DeptComponent
  },
  {
    path: 'departments/:id', component : DeptDetailComponent
  },
  {
    path: 'employees', component : EmpComponent
  }
  ,
  {
    path: "**", component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeptComponent,DeptDetailComponent,EmpComponent,PageNotFoundComponent];