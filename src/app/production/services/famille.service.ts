import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  public host: string = "https://pfe2017-spring.herokuapp.com/famille";


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
