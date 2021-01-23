import { Component,  Input, OnInit, AfterContentInit, Output} from '@angular/core';
import { PopularService } from "../popular.service";
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements AfterContentInit, OnInit {
  @Input () entry:any;
  loaded=false;
  counter: number=0;





  constructor(private data: PopularService) {}
  ngOnInit(): void {
    console.log(this.category());

  }
  ngAfterContentInit(): void {
    this.hasMarkdownLoaded(this.loaded);
  }

  title(){
    return this.entry.e_title.split('-')[0];
  }

  category(){
    return this.entry.e_title.split('-')[1];
  }

  created(){
    var day;
    var month;
    var year;

    day = this.entry.e_created.substr(8,9);
    month = this.entry.e_created.substr(5);
    month = month.substr(0,month.length-3);
    year = this.entry.e_created.substr(0,4);


  return day + "/" + month + "/" + year;

   }

   hasMarkdownLoaded(loaded){
    this.loaded=loaded;
   }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }

  reset(){
    this.data.reset();
  }

  private entryPopularity = {};
  public sendEntry(){
    this.counter++;

    this.entryPopularity = { counter:this.counter, name:this.entry.e_title }
    this.data.addEntry(this.entryPopularity);

  }

  message:string;
  clickCounter(){
    this.sendEntry();
  }

}
