import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  paiementUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.paiementUrl = 'http://localhost:8081/paiement';
  }

  public findPaiementByProprietaireId(proprietaireId: number): Observable<any> {
    return this.http.get(this.paiementUrl + '/proprietaire/' + proprietaireId, { headers: { 'Authorization': `Bearer ${localStorage.getItem('userAuth')}` }});
  }

}
