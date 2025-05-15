import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {component: AdminDashboardComponent, path: 'dashboards'},
  {component: DashboardComponent, path: ''},
  {component: ThankYouComponent, path: 'submit'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
