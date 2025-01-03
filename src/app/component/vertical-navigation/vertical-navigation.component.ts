import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  styleUrls: ['./vertical-navigation.component.css']
})
export class VerticalNavigationComponent {

  constructor(
    private loginService: LoginService
  ) { }

  logout() {
    this.loginService.logout();
  }

}
