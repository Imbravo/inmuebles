import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/components/user/home/home.component';
import { LoginComponent } from '../app/components/user/login/login.component';
import { DashboardComponent } from '../app/components/admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component:  DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
