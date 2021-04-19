import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OfService {



  public host: string = "https://pfe2017-spring.herokuapp.com/of";


  constructor(private http: HttpClient, private router: Router) {

  }


  async creer(formData) {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(formData);
    console.log(this.host + "/create");
    await this.http.post(this.host + "/create", body, { 'headers': headers }).toPromise();
    this.redirectTo("/of");
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  tous() {
    return this.http.get(this.host + "/all");
  }

  editer(id) {
    return this.http.get(this.host + "/" + id);
  }


  async supprimer(id) {
    return await this.http.delete(this.host + "/delete/" + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).toPromise()
  }




}