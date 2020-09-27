export class bonEntreeAchat {

    private code:string;
    private date:string;
    private  quantite:string;
    private  unite:string;


	constructor($code: string, $date: string, $quantite: string, $unite: string) {
		this.code = $code;
		this.date = $date;
		this.quantite = $quantite;
		this.unite = $unite;
	}
	
    
}