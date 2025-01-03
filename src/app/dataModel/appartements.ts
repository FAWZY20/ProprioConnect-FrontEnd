import { Locataire } from "./locataire.service";
import { Proprietaire } from "./proprietaire";

export class Appartements {
  address: string = "";
  codePostal: string = "";
  ville: string = "";
  surface: number = 0;
  pieces: number = 0;
  type: string = "";
  etage: number = 0;
  balcon: boolean = false;
  ascenseur: boolean = false;
  dateConstruction: Date = new Date();
  loyer: number = 0;
  description: string = "";
  proprietaire: Proprietaire = new Proprietaire();
  locataire: Locataire = new Locataire();
}
