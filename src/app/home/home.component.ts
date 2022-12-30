import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:Router){}
  gotoCourse(){
    this.route.navigate(['course'])

  }
  gotoJoin(){
    this.route.navigate(['joinnow'])
  }
 
}
