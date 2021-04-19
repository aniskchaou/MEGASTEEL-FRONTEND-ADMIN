import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-commande-fournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.css']
})
export class CommandeFournisseurComponent extends URLLoader implements OnInit {

  constructor() {super() }

  ngOnInit() {
    super.loadScripts()
  }

}
