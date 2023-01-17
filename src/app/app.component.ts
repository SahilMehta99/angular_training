import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTraining';
  count:number=0;

  constructor(_serive:MainService){
    console.log('courses',_serive.getcourses());
  }

  incrfun(){
    this.count++;
  }

  decrfun(){
    this.count--;
  }
}
