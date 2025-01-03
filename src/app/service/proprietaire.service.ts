import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proprietaire } from '../dataModel/proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {
  proprietaireUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.proprietaireUrl = 'http://localhost:8081/proprietaire';
  }

  findProprietaireByMail(proprioMail: string) {
    return this.http.get<Proprietaire>(this.proprietaireUrl + `/${proprioMail}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('userAuth')}` } });
  }

  
}
