class BonReservation {
    private codeCommande:string;
    private codeArticle:string;
    private codeClient:string;
    private quantite:string;
    private date:string;


	constructor($odeCommande: string, $codeArticle: string, $codeClient: string, $quantite: string, $date: string) {
		this.codeCommande = $odeCommande;
		this.codeArticle = $codeArticle;
		this.codeClient = $codeClient;
		this.quantite = $quantite;
		this.date = $date;
	}
}