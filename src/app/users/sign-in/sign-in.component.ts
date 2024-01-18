import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  createForm = new FormControl({
    "username": new FormControl(),
    "password" : new FormControl()
  });
  constructor(private usersService : UsersService){}
  
  validate():void{
    this.usersService.validateUser(this.createForm.value).subscribe((data)=>{
      console.log(data)
    })
  }
}
