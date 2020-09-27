
export class Famille {
    
    private nom:string;
    private familleEntrant:string;
    private familleSortant:string;
    private nombreArticle:string;
    private nombreMachine:string;


	constructor($nom: string, $familleEntrant: string, $familleSortant: string, $nombreArticle: string, $nombreMachine: string) {
		this.nom = $nom;
		this.familleEntrant = $familleEntrant;
		this.familleSortant = $familleSortant;
		this.nombreArticle = $nombreArticle;
		this.nombreMachine = $nombreMachine;
	}
    


    
}