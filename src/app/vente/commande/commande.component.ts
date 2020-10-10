import { CommandeService } from './../../achat/services/commande.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  
  commandes
  loading: boolean=true;
  constructor(private router:Router,private commandeService:CommandeService) { }

  ngOnInit() {
    this.commandeService.tous().subscribe(data=>{
      this.commandes=data;
      this.loading=false;
    })
  }

  
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-commande");
  }

  redirectEditer()
  {

  }
}
