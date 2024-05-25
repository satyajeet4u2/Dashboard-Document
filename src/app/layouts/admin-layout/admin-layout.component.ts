import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  role: any;

  private authListnerSubscription: Subscription;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.role = this.authService.getUserRole();
    console.log("role check", this.role);
  }


  getRole(){
  console.log("getrole func", this.authService.getUserRole())
  return this.authService.getUserRole();
  }

}
