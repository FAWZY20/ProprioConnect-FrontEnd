import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Proprietaire } from '../dataModel/proprietaire';
import { BehaviorSubject, map } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { ProprietaireService } from './proprietaire.service';
import { LocataireService } from './locataire.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  usersUrl: string;
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private route: Router,
    private proprietaireService: ProprietaireService,
    private locataireService: LocataireService
  ) {
    this.usersUrl = 'http://localhost:8081/auth';
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('userAuth');
  }

  login(email: string, password: string, role: string) {

    let params = new HttpParams()
      .set('email', email)
      .set('mdp', password);

    return this.http.post(this.usersUrl + `/login/${role}`, null, { params, responseType: "text" }).pipe(
      map((response: any) => {
        localStorage.setItem('userAuth', response);
        return response;
      })).subscribe((res) => {
        if (res != null) {
          this.route.navigate(['/proprietaire']);
          this.authStatus.next(true);
        } else {
          localStorage.clear()
          this.route.navigate(['']);
        }
      });
  }

  decodeToken() {
    let token: any = localStorage.getItem('userAuth');
    if (token) {
      let decodedToken: any = jwt_decode.jwtDecode(token);
      if(localStorage.getItem('role') == 'locataire') {
        return this.locataireService.findLocataireByMail(decodedToken.sub);
      }else{
        return this.proprietaireService.findProprietaireByMail(decodedToken.sub);
      }
    } else {
      console.error('Token non trouvé dans le local storage.');
      return new Observable();
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['']);
    this.authStatus.next(false);
  }

}
