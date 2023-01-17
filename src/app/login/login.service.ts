import { Injectable } from '@angular/core';
import { MainService } from "../main.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _service:MainService) { 
    console.log(this._service.getAddress().state);
    //console.log(this.loginserive.getlogindetail().phoneno);
  }

  getlogindetail(){
    console.log(this._service.getAddress().city);
    return{
      name:'sahil',
      age:'18',
      phoneno:9999,
      city:this._service.getAddress().city
    }
  }
}
