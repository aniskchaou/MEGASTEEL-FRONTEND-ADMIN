import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    super.loadScripts()
  }

}
