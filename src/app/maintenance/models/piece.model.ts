export class Piece{
    private code:string;
    private nom:string; 
    private quantite:string;
    private stockMinimale:string;
    private unite:string;
    private prix:string;


	constructor($code: string, $nom: string, $quantite: string, $stockMinimale: string, $unite: string, $prix: string) {
		this.code = $code;
		this.nom = $nom;
		this.quantite = $quantite;
		this.stockMinimale = $stockMinimale;
		this.unite = $unite;
		this.prix = $prix;
	}
    
}