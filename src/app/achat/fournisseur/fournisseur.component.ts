import { FournisseurService } from './../services/founisseur.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent extends URLLoader implements OnInit {

  fournisseurs;
  constructor(private router:Router,private fournisseurService:FournisseurService) { super()}

  ngOnInit() {
    this.fournisseurService.tous().subscribe(data=>{
      this.fournisseurs=data;
      super.loadScripts()
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
