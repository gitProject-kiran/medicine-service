import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },{
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
