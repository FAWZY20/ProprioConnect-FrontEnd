export class Paiement {
    id: number = 0;
    proprietaireId: string = "";
    locataireId: string = "";
    montant: number = 0;
    dateEcheance: string = ""; 
    datePaiement: string = ""; 
    methodePaiement: string = "";
    statut: string = ""; 
    justificatif: Document = new Document;  
    note: string = "";
    dateCreation: Date = new Date(); 
    dateModification: Date = new Date;
}
