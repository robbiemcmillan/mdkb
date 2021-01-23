import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";
import {Router} from '@angular/router';
import { ttEntries } from '../../assets/entries.json';
import { PopularService } from '../popular.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-big-search',
  templateUrl: './big-search.component.html',
  styleUrls: ['./big-search.component.css']
})
export class BigSearchComponent implements OnInit {

  keyword = 'e_title';

  sub:Subscription;
  sub2: Subscription;

  searchBar: string;
  searchBarEntry: string
  constructor(private data: PopularService, private router: Router) { }

  public entries = ttEntries;

  searchBarBool: boolean


  selectEvent(item){

    this.searchBarBool = true;
    this.data.setSearchBar(item.e_title,this.searchBarBool);

    this.router.navigateByUrl('/kb');

  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }





  ngOnInit() {

  }






}
