import { Injectable } from '@angular/core';

@Injectable()

export class MainService {

  constructor() { }

  getcourses(){
    return['c','c++']
  }

  getAddress(){
    return{
      state:'daman',
      city:'ynr'
    }
  }
}
