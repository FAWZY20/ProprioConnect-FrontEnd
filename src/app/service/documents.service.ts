import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentsUrl: string;;

  constructor(
    private HttpClient: HttpClient
  ) {
    this.documentsUrl = 'http://localhost:8081/document';
  }


  getDocumentsDestinataire(destinataireId: number): Observable<any> {
    return this.HttpClient.get(this.documentsUrl + `/destinataire/${destinataireId}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('userAuth')}` }});
  }

  getDocumentsAuteur(auteurId: number): Observable<any> {
    return this.HttpClient.get(this.documentsUrl + `/auteur/${auteurId}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('userAuth')}` }});
  }
}
