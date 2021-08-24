import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit, OnDestroy{

  @Input () entryID;
  private sub: Subscription;
  entry: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.entryID){
      this.sub = this.route.params.subscribe(params => {
        this.entry = 'assets/knowledgebase/entriesTest/' + params['id'];
      });
    }
    else{
      this.entry = 'assets/knowledgebase/entriesTest/' + this.entryID;
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}


