import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pincode-search',
  templateUrl: './pincode-search.component.html',
  styleUrls: ['./pincode-search.component.css']
})
export class PincodeSearchComponent implements OnInit {
  /* public url = '//suggestqueries.google.com/complete/search';
  public params = {
    hl: 'en',
    ds: 'yt',
    xhr: 't',
    client: 'youtube'
  };
  public query = ''; */
  constructor() { }

  ngOnInit() {
  }

  /* public handleResultSelected (result) {
    this.query = result;
  } */

  userSettings = {}
	autoCompleteCallback1(selectedData:any) {
		//do any necessery stuff.
	}

}
