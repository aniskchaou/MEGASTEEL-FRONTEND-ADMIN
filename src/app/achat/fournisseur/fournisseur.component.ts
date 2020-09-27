import { FournisseurService } from './../services/founisseur.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseurs;
  constructor(private router:Router,private fournisseurService:FournisseurService) { }

  ngOnInit() {
    this.fournisseurService.tous().subscribe(data=>{
      this.fournisseurs=data;
   
    })
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-fournisseur");
  }

  redirectEditer()
  {

  }
}
