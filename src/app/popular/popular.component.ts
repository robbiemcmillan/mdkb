import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PopularService } from "../popular.service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  @Input () popularEntry:any;

  popularEntries:any[] = [];

  message:string;

  sub:Subscription;

  @Output('changeTo') changeTo: EventEmitter<any> = new EventEmitter();

  popular: boolean

  category: string;


  constructor(private data: PopularService, private router: Router) {

   }

  ngOnInit(): void {

    console.log(this.router.url);




    this.sub = this.data.currentPop.subscribe(() => {
      this.popularEntries = this.data.getEntries();
      console.log(this.popularEntries);
    });


  }

  switchTo(value){
    this.popular = true;
    this.data.addPopEntry(this.popular, value);

    if (this.router.url === "/"){
      this.router.navigateByUrl('/kb');
    }

  }
}
