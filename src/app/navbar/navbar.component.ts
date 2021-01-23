import { Component, OnInit, Output, EventEmitter, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { PopularService } from "../popular.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input () setCategory: string
  @Output('sortByAlphabet') sortByAlphabet: EventEmitter<any> = new EventEmitter();
  @Output('sortByDt') sortByDt: EventEmitter<any> = new EventEmitter();
  @Output('filterEntries') filterEntries: EventEmitter<any> = new EventEmitter();
  isNavbarCollasped=true;


  setEntry: string;
  setPopCategory: string;
  navView: boolean;
  sub:Subscription;
  sub2:Subscription;
  sub3:Subscription;
  sub4:Subscription;
  sub5:Subscription

  constructor(private data: PopularService) {}

  ngOnInit(): void {
    this.sub = this.data.currentClickPop.subscribe((bool) => {
      this.navView = bool;
    });

    this.sub2 = this.data.currentEntry.subscribe((str) => {
      this.setEntry = str;
    });

    this.sub3 = this.data.currentCategory.subscribe((str) =>{
      this.setPopCategory = str.split('.')[0];
    });

    this.sub4 = this.data.currentSearchBar.subscribe((bool) => {
      this.navView = bool;

    });

    this.sub5 = this.data.currentSearchBarEntry.subscribe((str) => {
      this.setPopCategory = str.split('-')[1];


    });


  }

  orderByAlphabet(){
    this.sortByAlphabet.emit();
  }

  orderByDt(){
    this.sortByDt.emit();
  }

  searchEntries(event:any){
    this.filterEntries.emit(event.target.value);
  }

  reset(){
    alert("hello");
    this.data.reset();


  }

  // resetSearch(){
  //   alert("hello resetSearch")
  //   this.data.resetSearch();
  // }



  setNewCategory(value){
    this.data.setCurrentCategory(value);

  }



}
