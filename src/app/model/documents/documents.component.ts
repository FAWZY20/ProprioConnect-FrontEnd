import { Component } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
import { Documents } from 'src/app/dataModel/documents';
import { DocumentsService } from 'src/app/service/documents.service';
import { LocataireService } from 'src/app/service/locataire.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documentsRecus: any[] = [];
  documentsEnvoyer: any[] = [];
  dernierIndex: number = 0;

  constructor(
    private documentsService: DocumentsService,
    private loginService: LoginService,
    private locataireService: LocataireService
  ) { }

  getauteur(id: string): any {
    return this.locataireService.findLocataireById(id).pipe(
      map((locataire: any) => `${locataire.nom} ${locataire.prenom}`)
    );
  }

  ngOnInit(): void {
    this.loginService.decodeToken().subscribe((res: any) => {   
      
      this.documentsService.getDocumentsDestinataire(res.id).pipe(
        switchMap((documents: any[]) =>
          forkJoin(
            documents.map(doc =>
              this.getauteur(doc.auteur).pipe(
                map(auteur => ({
                  ...doc,
                  nomFichier: doc.nomFichier.split("."),
                  dernierIndex: doc.nomFichier.split(".").length - 1,
                  auteur: auteur
                }))
              )
            )
          )
        )
      ).subscribe((documents: Documents[]) => {
        this.documentsRecus = documents; 
        console.log(this.documentsRecus);
      });
      
      this.documentsService.getDocumentsAuteur(res.id).pipe(
        switchMap((documents: any[]) =>
          forkJoin(
            documents.map(doc =>
              this.getauteur(doc.destinataire).pipe(
                map(destinataire => ({
                  ...doc,
                  nomFichier: doc.nomFichier.split("."),
                  dernierIndex: doc.nomFichier.split(".").length - 1,
                  destinataire: destinataire
                }))
              )
            )
          )
        )
      ).subscribe((documents: Documents[]) => {
        this.documentsEnvoyer = documents;        
      });
    });
  }
  
}
