import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PopularService } from '../popular.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2, private data: PopularService) { }

  ngOnInit(): void {}

  reset(){
    this.data.resetCat();
  }


}
