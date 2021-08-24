import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ttEntries } from '../../assets/entries.json';
import { PopularService } from '../popular.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {

  keyword = 'e_title';
  viaSearch: boolean;
  // entries = ttEntries;

  constructor(private data: PopularService, private router: Router) { }

  ngOnInit() { }

  selectEvent(item){
    /* search via the main search bar */
    this.viaSearch = true;
    /* update behaviourSubjects with new values */
    this.data.setSearchBar(item.e_title,this.viaSearch);
    /* Move to knowledgebase */
    this.router.navigateByUrl('/kb');
  }

}
