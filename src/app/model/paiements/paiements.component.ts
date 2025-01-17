import { Component } from '@angular/core';
import { map, pipe, lastValueFrom } from 'rxjs';
import { Locataire } from 'src/app/dataModel/locataire.service';
import { Paiement } from 'src/app/dataModel/paiement';
import { LocataireService } from 'src/app/service/locataire.service';
import { LoginService } from 'src/app/service/login.service';
import { PaiementService } from 'src/app/service/paiement.service';

@Component({
  selector: 'app-paiements',
  templateUrl: './paiements.component.html',
  styleUrls: ['./paiements.component.css']
})
export class PaiementsComponent {
  paiements: any[] = [];  
  locataire: any = "";

  constructor(
    private paiementService: PaiementService,
    private loginService: LoginService,
    private locataireService: LocataireService
  ) { }

  getLocataire(idLocataire: string) {
    return this.locataireService.findLocataireById(idLocataire).pipe(
      map((locataire: any) => `${locataire.prenom} ${locataire.nom}`)
    );
  }

  ngOnInit(): void {
    this.loginService.decodeToken().subscribe((res: any) => {   
      this.paiementService.findPaiementByProprietaireId(res.id).pipe(
        map((paiements: any[]) =>{
          return paiements.map(async paiement => {
            const locataire = await lastValueFrom(this.getLocataire(paiement.locataireId));
            return {
              ...paiement,
              locataire
            }
          })
        })
      ).subscribe(async (paiements: any[]) => {
        this.paiements = await Promise.all(paiements); 
      });
    })
  } 

}
