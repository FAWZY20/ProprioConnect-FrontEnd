import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locataire } from '../dataModel/locataire.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {
  locataireUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.locataireUrl = 'http://localhost:8081/locataire';
  }

  findLocataireByMail(locataireMail: string) {
    return this.http.get<Locataire>(this.locataireUrl + `/${locataireMail}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('userAuth')}` } });
  }

  findLocataireById(locataireId: string): Observable<Locataire> {
    return this.http.get<Locataire>(this.locataireUrl + `/${locataireId}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('userAuth')}` } });
  }

}
