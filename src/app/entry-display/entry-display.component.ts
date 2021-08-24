import { Component,  Input, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css'],
    animations: [
      trigger('smoothCollapse', [
        state('initial', style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden'
        })),
        state('final', style({
          overflow: 'hidden'
        })),
        transition('initial <=> final', animate('500ms'))
      ]),
      trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)'})),
        state('rotated', style({ transform: 'rotate(90deg)'})),
        transition('default <=> rotated', animate('250ms'))
      ])
    ]
})

export class EntryDisplayComponent implements OnInit {

  @Input () entry:any;
  showBody = false;

  title: string;
  author: string;
  date: string;
  status: boolean;

  constructor() {}

  ngOnInit(): void {
    this.title = this.entry.title;
    this.date = this.entry.date;
    this.author = this.entry.author;
  }

  toggleDropdown(){
    this.showBody = !this.showBody;
  }




  }







