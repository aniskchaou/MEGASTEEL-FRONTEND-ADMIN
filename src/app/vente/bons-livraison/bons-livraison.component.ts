import { BonEntreeAchatService } from './../../achat/services/bon.entree.achat.service';
import { BonLivraisonService } from './../services/bon-livraison.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bons-livraison',
  templateUrl: './bons-livraison.component.html',
  styleUrls: ['./bons-livraison.component.css']
})
export class BonsLivraisonComponent implements OnInit {
  
  livraisons
  loading: boolean=true;
  constructor(private router:Router,private bonLivraisonService:BonLivraisonService) { }

  ngOnInit() {
    this.bonLivraisonService.tous().subscribe(data=>{
      this.livraisons=data;
      this.loading=false;
    })
  }


  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-bon-livraison");
  }

  redirectEditer()
  {

  }
}
