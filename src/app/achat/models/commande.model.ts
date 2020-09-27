export class Commande{

    private numCommande:string;
                                      private dateCreation:string;
                                      private  DateLimite:string;
                                      private  etat:string;

	constructor($numCommande: string, $dateCreation: string, $DateLimite: string, $etat: string) {
		this.numCommande = $numCommande;
		this.dateCreation = $dateCreation;
		this.DateLimite = $DateLimite;
		this.etat = $etat;
	}
   
}