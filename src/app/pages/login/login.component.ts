import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private authStatusSub: Subscription;

  constructor( private authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListner().subscribe(
      authStatus => {
        // this.isLoading = false;
      }
    );
  }
  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  loginUser(form:any) {
    console.log("value",form.value)
    this.authService.loginUser(form.value.email, form.value.password);
  }

}
