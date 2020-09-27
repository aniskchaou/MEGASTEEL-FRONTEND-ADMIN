import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BonLivraisonService {


 
  public host: string = "https://pfe2017-spring.herokuapp.com/bonlivraison";


  constructor(private http: HttpClient) {

  }

  
  creer(formData) {
    
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(formData);
    console.log(this.host+"/create");
    this.http.post(this.host+"/create",  body,{'headers':headers}).subscribe(data=>{
      console.log(data);
    });
  }

  tous() {
    return this.http.get(this.host+"/all");
  }
  
  editer(id) {
    return this.http.get(this.host+"/"+id);
  }

  
  supprimer(id) {
    return this.http.get(this.host);
  }

 


}