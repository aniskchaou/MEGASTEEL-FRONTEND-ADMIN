class Client {
    
    private code:string;
    private tva:string;
    private adresse:string;
    private telephone:string;
    private fax:string;
    private email:string;
    

	constructor($code: string, $tva: string, $adresse: string, $telephone: string, $fax: string, $email: string) {
		this.code = $code;
		this.tva = $tva;
		this.adresse = $adresse;
		this.telephone = $telephone;
		this.fax = $fax;
		this.email = $email;
	}

}