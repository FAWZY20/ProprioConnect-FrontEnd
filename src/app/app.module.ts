import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './model/connexion/connexion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerticalNavigationComponent } from './component/vertical-navigation/vertical-navigation.component';
import { HomeProprietaireComponent } from './model/home-proprietaire/home-proprietaire.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocumentsComponent } from './model/documents/documents.component';
import { PaiementsComponent } from './model/paiements/paiements.component';
import { SinistresComponent } from './model/sinistres/sinistres.component';
import { EtatLogementComponent } from './model/etat-logement/etat-logement.component';
import { MessagerieComponent } from './model/messagerie/messagerie.component';
import { ParametresComponent } from './model/parametres/parametres.component';
import { AideSupportComponent } from './model/aide-support/aide-support.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    VerticalNavigationComponent,
    HomeProprietaireComponent,
    DocumentsComponent,
    PaiementsComponent,
    SinistresComponent,
    EtatLogementComponent,
    MessagerieComponent,
    ParametresComponent,
    AideSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
