import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private http: HttpClient,
               private  router: Router,
               private authService: AuthService) { }

  ngOnInit() {
  }


  addUser(userForm: any) {
    console.log("userForm",userForm);
    console.log("controls",userForm.controls);
    console.log("value",userForm.value)
    const authData: any = {name:userForm.value.userName , email: userForm.value.email, password: userForm.value.password, role: userForm.value.role};
    // return
    this.authService.addUser(userForm.value.userName, userForm.value.email, userForm.value.password, userForm.value.role )
  }
}
