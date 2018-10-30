import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { PincodeSearchComponent } from './pincode-search/pincode-search.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    NgxTypeaheadModule,
    AngularMaterialModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4GeoautocompleteModule.forRoot()
  ],
  declarations: [PincodeSearchComponent]
})
export class HomeModule { }
