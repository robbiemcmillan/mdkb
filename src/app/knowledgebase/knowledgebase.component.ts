import { Component, Input, OnInit } from '@angular/core';
import entries from '../../assets/entries.json';


@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.css'],
})
export class KnowledgebaseComponent implements OnInit {

  entries: any[] = [];
  category: string;
  entry;
  title: string;
  byCategory: boolean;


  constructor() {}

  ngOnInit() {

    this.entries = entries;
    console.log(history.state.category);

    if (history.state.category != null) {
      localStorage.clear();
      localStorage.setItem('category', history.state.category);
      this.sortByCategory(localStorage.getItem('category'));
      this.category = localStorage.getItem('category');
      this.byCategory = true;
    }
    else if(history.state.category === undefined){
      this.sortByCategory(localStorage.getItem('category'));
      this.category = localStorage.getItem('category')
      this.byCategory = true;
    }

    if (history.state.searchBar != null) {
      localStorage.clear();
      localStorage.setItem('searchBar', JSON.stringify(history.state.searchBar));
      this.entry = history.state.searchBar;
      console.log(this.entry);
      this.title = this.entry.title;
      this.category = this.entry.category;
      this.byCategory = false;
    }
    else if (history.state.searchBar === null){
      this.entry = JSON.parse(localStorage.getItem('searchBar'));
      console.log(this.entry);
      this.title = this.entry.title;
      this.category = this.entry.category;
      this.byCategory = false;
    }
  }

  sortByCategory(category) {
    if (category === "All"){
      return this.entries;
    }

    this.entries = entries.filter((entry) => {
      return entry.category.includes(category);
    });

  }















































}
