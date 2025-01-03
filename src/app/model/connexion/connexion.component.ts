import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  email: string = "";
  password: string = "";
  proprietaire: boolean = false;
  locataire: boolean = false;
  isOptionSelected: boolean = false;

  constructor(
    private loginService: LoginService
  ) { }

  checkRole(value: boolean) { 
    this.isOptionSelected = value;
  }

  onSubmit() {
    console.log(this.isOptionSelected);
    if (this.isOptionSelected == true) {
      localStorage.setItem('role', 'proprietaire');
      this.loginService.login(this.email, this.password, "proprietaire");
    } else if (this.isOptionSelected == false) {
      localStorage.setItem('role', 'locataire');
      this.loginService.login(this.email, this.password, "locataire");
    }
  }

}