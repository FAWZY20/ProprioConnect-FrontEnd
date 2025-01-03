import { Appartements } from "./appartements";
import { Proprietaire } from "./proprietaire";

export class Locataire {
  nom: string = "";
  prenom: string = ""; 
  mdp: string = "";
  telephone: string = "";
  email: string = "";
  dateNaissance: Date = new Date();
  dateInscription: Date = new Date();
  proprietaire: Proprietaire = new Proprietaire();
  appartement: Appartements = new Appartements();
  contrat: File = new File([],"");
}
