import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Add staff',  icon:'ni-chart-bar-32 text-blue', class: '' },
    // { path: '/maps', title: 'Documet list',  icon:'ni-collection text-orange', class: '' },
    { path: '/register', title: 'Add staff',  icon:'ni-chart-bar-32 text-blue', class: '' },
    { path: '/tables', title: 'Documet list',  icon:'ni-collection text-orange', class: '' },
    { path: '/user-profile', title: 'Chat',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Report',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  onLogOut() {
    this.authService.logOut();
  }
  
}
