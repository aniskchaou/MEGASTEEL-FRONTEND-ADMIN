class Commande {
    private numCommande:string;
    private dateCreation:string;
    private dateLimite:string;
    private etat:string;



	constructor($numCommande: string, $dateCreation: string, $dateLimite: string, $etat: string) {
		this.numCommande = $numCommande;
		this.dateCreation = $dateCreation;
		this.dateLimite = $dateLimite;
		this.etat = $etat;
	}

    
}