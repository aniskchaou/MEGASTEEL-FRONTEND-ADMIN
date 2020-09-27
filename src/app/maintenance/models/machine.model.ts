export class Machine{
    private nom:string;
    private production:string;
    private fonctionnement:string;
    private tempsArret:string;
    private etat:string;


	constructor($nom: string, $production: string, $fonctionnement: string, $tempsArret: string, $etat: string) {
		this.nom = $nom;
		this.production = $production;
		this.fonctionnement = $fonctionnement;
		this.tempsArret = $tempsArret;
		this.etat = $etat;
	}

}