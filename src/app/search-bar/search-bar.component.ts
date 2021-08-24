import { Component, OnInit } from '@angular/core';
import entries from '../../assets/entries.json';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  keyword = 'title';
  entries = entries;

  constructor(private router: Router) { }

  ngOnInit() { }

  redirectTo(uri:string,state){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri], state));
 }

  selectEvent(entry){
    this.redirectTo('/knowledgebase', { state: { searchBar : entry } });
  }

}
