import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './componnents/all/all.component';
import { AddComponent } from './componnents/add/add.component';
import { DashboradComponent } from './componnents/dashborad/dashborad.component';

const routes: Routes = [
  { path: "all", component: AllComponent },
  { path: "add", component: AddComponent },
  { path: "dashboard", component: DashboradComponent },
  { path: "", redirectTo: 'dashboard', pathMatch: "full" },
  { path: "**", redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
