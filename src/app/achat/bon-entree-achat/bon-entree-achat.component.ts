import { BonEntreeAchatService } from './../services/bon.entree.achat.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-bon-entree-achat',
  templateUrl: './bon-entree-achat.component.html',
  styleUrls: ['./bon-entree-achat.component.css']
})
export class BonEntreeAchatComponent implements OnInit {

  achats;
  constructor(private router:Router,private bonEntreeAchatService:BonEntreeAchatService) { }
 
  ngOnInit() {
    this.bonEntreeAchatService.tous().subscribe(data=>{
      this.achats=data;
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
