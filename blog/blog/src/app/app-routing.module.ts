import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: 'table', component: TableComponent },
  { path: 'table', component: TableComponent },
  { path: 'table', component: TableComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
