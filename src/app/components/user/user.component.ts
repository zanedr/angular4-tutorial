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
    this.email = 'test@test.test'
    this.address = {
      street: '1600 Pennsylvania',
      city: 'Eugene',
      state: 'OR'
    };
    this.hobbies = [
      'coding',
      'music',
      'sleeping'
    ];
    this.etc = 'whatever';
  }

  onClick(){
    this.name = 'Eh?';
    this.hobbies.push('chillin')
  }

  addHobby(hobby){
    console.log(hobby)
    this.hobbies.unshift(hobby)
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] === hobby){
        this.hobbies.splice(i, 1);
      }
    }
    console.log(hobby);
  }
}

interface Address{
  street:string;
  city:string;
  state:string;
}