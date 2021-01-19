import { BonEntreeAchatService } from './../services/bon.entree.achat.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-bon-entree-achat',
  templateUrl: './bon-entree-achat.component.html',
  styleUrls: ['./bon-entree-achat.component.css']
})
export class BonEntreeAchatComponent extends URLLoader implements OnInit {

  achats;
  loading: boolean=true;
  constructor(private router:Router,private bonEntreeAchatService:BonEntreeAchatService) { super()}
 
  ngOnInit() {
    this.bonEntreeAchatService.tous().subscribe(data=>{
      this.achats=data;
      this.loading=false;
      super.loadScripts()
    })
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-bon-entree-achat");
  }

  redirectEditer()
  {

  }

}
