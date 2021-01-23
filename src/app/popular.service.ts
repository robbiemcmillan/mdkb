import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class PopularService {

  private popSource = new BehaviorSubject<[]>([]);
  currentPop = this.popSource.asObservable();

  private checkPopClick = new BehaviorSubject<boolean>(false);
  currentClickPop = this.checkPopClick.asObservable();

  private checkEntry =  new BehaviorSubject<string>("");
  currentEntry = this.checkEntry.asObservable();

  private checkCategory = new BehaviorSubject<string>("");
  currentCategory = this.checkCategory.asObservable();


  private checkSearchBar = new BehaviorSubject<boolean>(false);
  currentSearchBar = this.checkSearchBar.asObservable();

  private checkSearchBarEntry =  new BehaviorSubject<string>("");
  currentSearchBarEntry = this.checkSearchBarEntry.asObservable();



  entries: any[] = [];

  entry:any;

  popular: boolean;

  clickedEntry: string;

  searchBarEntry: string;

  searchBarBool: boolean;

  constructor() {

    this.reset();

   }


   setSearchBar(value,value2){
     this.searchBarEntry = value;
     this.searchBarBool = value2;

     this.checkSearchBar.next(value2);
     this.checkSearchBarEntry.next(value);

    //  alert(this.searchBarEntry);
    //  alert(this.searchBarBool);
   }





  addEntry(newEntry){
    this.popSource.next(newEntry);
    var i = this.entries.findIndex(o => o.name === newEntry.name)
    if(this.entries.length > 4){
      if (this.entries[i]) {
        this.entries[i] = newEntry
      }
      else {
        this.entries[0] = newEntry
      };
      this.entries.sort(function(a, b){return a.counter - b.counter});
    }
    else{
      if (this.entries[i]) {
        this.entries[i] = newEntry
      }
      else {
        this.entries.push(newEntry)
      };
      this.entries.sort(function(a, b){return a.counter - b.counter});
    }
    console.log(this.entries);
  }

  getEntries(){
  return this.entries;
  }

  addPopEntry(value1,value2){
    this.checkPopClick.next(value1);
    this.checkEntry.next(value2);
    this.popular = value1;
    this.clickedEntry = value2;
    this.checkCategory.next(value2.split('-')[1]);
  }

  getPopValue(){
    return this.entries
  }

  getPop(){

    return this.popular;
  }

  getClickEntry(){
    return this.clickedEntry;
  }

  getPopAndClick(){
    return [this.getPop(), this.getClickEntry()];
  }

  getCurrentCategory(){

    return this.clickedEntry.split('-')[1];
  }

  setCurrentCategory(value){
    this.currentCategory = value;


  }

reset(){
  this.checkPopClick.next(false);
  this.checkEntry.next("");
  this.checkSearchBar.next(false);
  this.checkSearchBarEntry.next("");


}

resetSearch(){


}

resetCat(){
  this.checkCategory.next("");

}








}
