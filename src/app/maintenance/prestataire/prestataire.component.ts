import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-prestataire',
  templateUrl: './prestataire.component.html',
  styleUrls: ['./prestataire.component.css']
})
export class PrestataireComponent extends URLLoader implements OnInit {

  constructor(private router:Router) { super() }

  ngOnInit() {
    super.loadScripts()
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-prestataire");
  }

  redirectEditer()
  {

  }
}
