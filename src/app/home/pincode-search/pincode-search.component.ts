import { Component, PLATFORM_ID, Inject, Input, Output, EventEmitter, OnInit, OnChanges, ElementRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pincode-search',
  templateUrl: './pincode-search.component.html',
  styleUrls: ['./pincode-search.component.css']
})
export class PincodeSearchComponent implements OnInit {
  endpoint = '/api/pincodes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  queryItems: any = [];
  constructor(private http: HttpClient) { }

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

}
