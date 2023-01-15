import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  toggle:boolean=true;

  constructor(){
    let course = new MainService();
    console.log('courses',course.getcourses());
  }

  callToggle(){
    this.toggle = this.toggle?false:true;
   }

}
