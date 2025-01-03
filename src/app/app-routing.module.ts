import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './model/connexion/connexion.component';
import { HomeProprietaireComponent } from './model/home-proprietaire/home-proprietaire.component';
import { DocumentsComponent } from './model/documents/documents.component';
import { PaiementsComponent } from './model/paiements/paiements.component';

const routes: Routes = [
  { path: "", component: ConnexionComponent },
  {
    path: "proprietaire",
    children: [
      { path: "", component: HomeProprietaireComponent },
      { path: "document", component: DocumentsComponent },
      { path: "paiement", component: PaiementsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
