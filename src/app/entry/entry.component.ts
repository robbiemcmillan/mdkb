import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit, OnDestroy, OnChanges{

  @Input () entryID;
  @Output() loaded = new EventEmitter<boolean>();
  private sub: Subscription;
  entry: String;
  markdownLoaded: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.entryID){
      this.sub = this.route.params.subscribe(params => {
        this.entry = 'assets/knowledgebase/entries/' + params['id'];
      });
    }
    else{
      this.entry = 'assets/knowledgebase/entries/' + this.entryID;
    }
    this.markdownLoaded = true;
    this.loaded.emit(this.markdownLoaded);
   }

   ngOnChanges(changes: SimpleChanges) {
    alert(changes.currentValue);


}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}


