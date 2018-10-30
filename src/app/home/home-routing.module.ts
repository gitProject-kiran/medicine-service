import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PincodeSearchComponent } from 'src/app/home/pincode-search/pincode-search.component';

const routes: Routes = [{
  path: 'pincode',
  component: PincodeSearchComponent
},{
  path: '',
  redirectTo: 'pincode',
  pathMatch: 'full'
},{
  path: '**',
  redirectTo: 'pincode',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
