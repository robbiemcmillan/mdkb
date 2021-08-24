import { Component, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input () category: string;
  @Input () byCategory: boolean;
  @Input () title: string;
  currentCategory;



  constructor(private router: Router) {}

  ngOnInit() {

    this.currentCategory = this.category;

  }

  redirectTo(uri:string,state){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri], state));
 }

 returnTo(){
  this.redirectTo('/knowledgebase', { state: { category: this.category } });
 }






}
