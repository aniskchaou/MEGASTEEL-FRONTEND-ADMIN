import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestataire',
  templateUrl: './prestataire.component.html',
  styleUrls: ['./prestataire.component.css']
})
export class PrestataireComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-prestataire");
  }

  redirectEditer()
  {

  }
}
