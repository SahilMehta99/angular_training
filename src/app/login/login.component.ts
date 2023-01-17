import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges , OnInit , DoCheck{
  toggle:boolean=true;
  @Input() counter:any;

  constructor(_serive:MainService , private loginserive:LoginService ){
   // let course = new MainService();
    console.log('courses',_serive.getcourses());
    console.log(this.loginserive.getlogindetail().city);
    console.log('constructr')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inside Onchang' , this.counter);
  }

  ngOnInit(): void {
    console.log('Inside OnInit')
  }

  ngDoCheck(): void {
    console.log('Inside check')
  }

  callToggle(){
    this.toggle = this.toggle?false:true;
   }

}
