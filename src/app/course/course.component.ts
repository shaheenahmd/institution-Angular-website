import { Component} from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

 

  course=[
    {'id':1,'name':'Angular Development','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.','image':'../../assets/angular.png'},
    {'id':2,'name':'Python Development','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.','image':'../../assets/python.png'},
    {'id':3,'name':'HTML Development','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.','image':'../../assets/html.png'},
    {'id':4,'name':'Django Development','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.','image':'../../assets/django.png'},
    {'id':5,'name':'Javascript Development','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.','image':'../../assets/js.png'},
    {'id':5,'name':'Css Development','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.','image':'../../assets/CSS.png'}
  ];

 



};
