import { Appartements } from "./appartements";
import { Locataire } from "./locataire.service";

export class Proprietaire {
    nom: string = "";
    prenom: string = ""; ;
    adresse: string = "";
    telephone: string = "";
    email: string = "";
    mdp: string = "";
    locataire: Locataire[] = [];
    appartement: Appartements[] = [];
}
