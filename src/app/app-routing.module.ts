import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReposComponent } from './repos/repos.component';
import { MainComponent } from './main/main.component';
import {NavbarComponent} from './navbar/navbar.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'user/:id', component: NavbarComponent,
    children: [{ path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'repos', component: ReposComponent },
    {path: 'following', component: MainComponent}
    ]
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
