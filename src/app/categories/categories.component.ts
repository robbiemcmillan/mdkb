import { Component, OnInit} from '@angular/core';
import categories from '../../assets/categories.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  constructor() { }

  ngOnInit() {
    /* assign categories json string to array */
    this.categories = categories;
  }

}
