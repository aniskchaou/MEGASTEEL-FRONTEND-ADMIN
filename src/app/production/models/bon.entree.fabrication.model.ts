
class BonEntreeFabrication {
    private code:string;
    private codeOF:string;
    private  quantite:string;
    private duree:string;
    private date:string;
    private unite:string;
    private quantiterestante:string;
    

	constructor($code: string, $codeOF: string, $quantite: string, $duree: string, $date: string, $unite: string, $quantiterestante: string) {
		this.code = $code;
		this.codeOF = $codeOF;
		this.quantite = $quantite;
		this.duree = $duree;
		this.date = $date;
		this.unite = $unite;
		this.quantiterestante = $quantiterestante;
	}

}