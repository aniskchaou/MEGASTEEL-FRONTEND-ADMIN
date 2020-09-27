export class Article {
  
    private code:string;
                    private  unite:string;
                      private  hauteur:string;
                      private  largeur:string;
                      private  dimension:string;
                      private  poidsUnitaire:string;

	constructor($code: string, $unite: string, $hauteur: string, $largeur: string, $dimension: string, $poidsUnitaire: string) {
		this.code = $code;
		this.unite = $unite;
		this.hauteur = $hauteur;
		this.largeur = $largeur;
		this.dimension = $dimension;
		this.poidsUnitaire = $poidsUnitaire;
	}
    
}