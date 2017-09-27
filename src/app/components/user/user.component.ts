import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  etc:any;

  constructor() { 
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.name = 'What?';
    this.age = 30;
    this.address = {
      street: '1600 Pennsylvania',
      city: 'Eugene',
      state: 'OR'
    };
    this.hobbies = [
      'codeing',
      'music',
      'sleeping'
    ];
    this.etc = 'whatever';
  }
}

interface Address{
  street:string;
  city:string;
  state:string;
}