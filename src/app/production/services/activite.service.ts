import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  public host: string = "https://pfe2017-spring.herokuapp.com/activite";


  constructor(private http: HttpClient, private router: Router) {

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  creer(formData) {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(formData);
    console.log(this.host + "/create");
    this.http.post(this.host + "/create", body, { 'headers': headers }).subscribe(data => {
      console.log(data);
    });
    this.redirectTo("/activites")
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
