export class Operateur{
    private code:string;
    private nom:string;
    private prénom:string;
    private téléphone:string;
    private email:string;
    private etat:string;



	constructor($code: string, $nom: string, $email: string, $etat: string) {
		this.code = $code;
		this.nom = $nom;
		this.email = $email;
		this.etat = $etat;
	}

}