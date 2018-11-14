import { Component, PLATFORM_ID, Inject, Input, Output, EventEmitter, OnInit, OnChanges, ElementRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { GlobalRef, BrowserGlobalRef, NodeGlobalRef } from './MyGlobal';



@Component({
  selector: 'app-pincode-search',
  templateUrl: './pincode-search.component.html',
  styleUrls: ['./pincode-search.component.css']
})
export class PincodeSearchComponent implements OnInit {
  locationInput:any = '';
  isSettingsError:any= '';
  userQuerySubmit(){

  }
  endpoint = 'http://localhost:8080/api/pincodes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  showCurrentLocation:boolean=false;
  public gettingCurrentLocationFlag: boolean = false;
  public dropdownOpen: boolean = false;

  queryItems: any = [];
  constructor(private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _global: GlobalRef) { }

  ngOnInit() {
  }

  getPincodes(val) {
    this.http.get(this.endpoint + '?query=' + val).subscribe(
      response => {
        this.queryItems = response;
      });
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getGeoCurrentLocation(): Promise<any> {
    return new Promise(resolve => {
      if (isPlatformBrowser(this.platformId)) {
        let _window: any = this._global.nativeGlobal;
        if (_window.navigator.geolocation) {
          _window.navigator.geolocation.getCurrentPosition((pos) => {
            let latlng: any = {lat: parseFloat(pos.coords.latitude + ''), lng: parseFloat(pos.coords.longitude + '')};
            resolve(latlng);
          }, (error) => {
            resolve(false);
          });
        }else {
          resolve(false);
        }
      }else {
        resolve(false);
      }
    });
  }

  //function to get user current location from the device.
  currentLocationSelected(): any {
    if (isPlatformBrowser(this.platformId)) {
      this.gettingCurrentLocationFlag = true;
      this.dropdownOpen = false;
      this.getGeoCurrentLocation().then((result: any) => {
        if (!result) {
          this.gettingCurrentLocationFlag = false;
          console.log("result ===>", result);
         
          //this.componentCallback.emit({'response': false, 'reason': 'Failed to get geo location'});
        }else {
          console.log("======>", result);
          this.getGeoLatLngDetail(result).then(res =>{
             console.log("== res ===>", res);
             this.locationInput = res.long_name;
            this.gettingCurrentLocationFlag = false;
          });
         
          //this.getCurrentLocationInfo(result);
        }
      });
    }
  }

  getGeoLatLngDetail(latlng: any): Promise<any> {
    return new Promise(resolve => {
      if (isPlatformBrowser(this.platformId)) {
        let _window: any = this._global.nativeGlobal;
        let geocoder: any = new _window.google.maps.Geocoder;
        geocoder.geocode({'location': latlng}, (results, status) => {
          if (status === 'OK') {
                console.log("results", results[0].address_components[results[0].address_components.length - 1])
                let result = results[0].address_components[results[0].address_components.length - 1];
                resolve(result);           
          } else {
            resolve(false);
          }
        });
      }else {
        resolve(false);
      }
    });
  }

  

}
