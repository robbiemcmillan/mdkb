import { Component, OnInit } from '@angular/core';
import { ttEntries } from '../../assets/entries.json';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs';
import { PopularService } from '../popular.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.css'],
})
export class KnowledgebaseComponent implements OnInit {
  entries: any[] = [];

  popular: boolean = false;

  searchBar: boolean = false;

  view: String = "";



  popEntry: string;

  searchEntry: string

  category: string;

  message: string;

  sub: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription
  sub5: Subscription


  constructor(private data: PopularService, private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {

    this.entries = ttEntries;
    console.log(ttEntries);



    if (history.state.data != null) {
      localStorage.clear();
      localStorage.setItem('category', history.state.data);
      alert("hello popular: " + this.popular + " searchBar: " + this.searchBar);
      this.data.reset();
    }

    this.sub3 = this.data.currentCategory.subscribe((str) => {
     if(str === ""){
      this.category = localStorage.getItem('category');
      this.sortByCategory(this.category);

     }
      else{
      this.category = str.split('.')[0];
      this.sortByCategory(this.category);

     }

    });



    this.sub = this.data.currentClickPop.subscribe((bool) => {
      this.popular = bool;
      this.data.setSearchBar(false,"");
      alert("hello2 popular: " + this.popular + " searchBar: " + this.searchBar);
    });

     this.sub2 = this.data.currentEntry.subscribe((str) => {
       this.popEntry = str;


    });

     this.sub4 = this.data.currentSearchBar.subscribe((bool) => {





    })

  }
































    // this.sub5 = this.data.currentSearchBarEntry.subscribe((str) => {

    //   this.searchEntry = str;

    // });




  sortByCategory(value) {
    this.entries = ttEntries.filter((entry) => {
      return entry.e_title.includes(value);
    });
  }

  sortByAlphabet() {
    return this.entries.sort((a, b) => (a.e_title > b.e_title ? 1 : -1));
  }

  sortByDt() {
    return this.entries.sort((a, b) => {
      return <any>new Date(b.e_created) - <any>new Date(a.e_created);
    });
  }

  filterEntries(value) {
    if (value !== null) {
      this.entries = ttEntries.filter((entry) => {
        return entry.e_title.startsWith(value);
      });
    }
  }


}
