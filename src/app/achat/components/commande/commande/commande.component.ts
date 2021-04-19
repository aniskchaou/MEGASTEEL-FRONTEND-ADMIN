import { CommandeService } from '../../../services/commande.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent extends URLLoader implements OnInit {

  commandes;
  loading: boolean = true;
  constructor(private router: Router, private commandeService: CommandeService) { super() }

  ngOnInit() {
    this.commandeService.tous().subscribe(data => {
      this.commandes = data;
      this.loading = false;
      super.loadScripts()
    })
  }
  redirectAjouter() {
    this.router.navigateByUrl("ajouter-commande");
  }

  redirectEditer() {

  }

}
