
export class Of {

	constructor($id: number, $codeOF: string, $quantiteRealise: string, $quantiteRestant: string, $codemachine: string, $articlesortant: string, $articleentrant: string, $etat: string) {
		this.id = $id;
		this.codeOF = $codeOF;
		this.quantiteRealise = $quantiteRealise;
		this.quantiteRestant = $quantiteRestant;
		this.codemachine = $codemachine;
		this.articleSortant = $articlesortant;
		this.articleEntrant = $articleentrant;
		this.etat = $etat;
	}

 

    private id:number;
    private codeOF:string;
    private quantiteRealise:string;
    private quantiteRestant:string;
    private codemachine:string;
    private articleSortant:string;
    private articleEntrant:string;
    private etat:string;

	

}