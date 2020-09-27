export class Fournisseur {
  private codeFournisseur: string;
  private nom: string;
  private adresse: string;
  private tVA: string;
  private téléphone: string;
  private responsable: string;
  private fax: string;

	constructor($codeFournisseur: string, $nom: string, $adresse: string, $tVA: string, $responsable: string, $fax: string) {
		this.codeFournisseur = $codeFournisseur;
		this.nom = $nom;
		this.adresse = $adresse;
		this.tVA = $tVA;
		this.responsable = $responsable;
		this.fax = $fax;
	}
  
}
