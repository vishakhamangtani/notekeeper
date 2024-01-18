import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  createForm = new FormGroup({
    fullName: new FormControl(),
    username: new FormControl(),
    mobile_no: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(private userService: UsersService) {}
  submit(): string {
    this.userService.registerUser(this.createForm.value).subscribe((data) => {
      console.log(data + 'data gng back');
      return 'success';
    });
    return '';
  }
}
