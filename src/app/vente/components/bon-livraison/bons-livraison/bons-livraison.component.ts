
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';
import { BonLivraisonService } from 'src/app/vente/services/bon-livraison.service';

@Component({
  selector: 'app-bons-livraison',
  templateUrl: './bons-livraison.component.html',
  styleUrls: ['./bons-livraison.component.css']
})
export class BonsLivraisonComponent extends URLLoader implements OnInit {

  livraisons
  loading: boolean = true;
  constructor(private router: Router, private bonLivraisonService: BonLivraisonService) {
    super()
  }

  ngOnInit() {
    this.bonLivraisonService.tous().subscribe(data => {
      this.livraisons = data;
      this.loading = false;
      super.loadScripts()
    })
  }


  redirectAjouter() {
    this.router.navigateByUrl("ajouter-bon-livraison");
  }

  redirectEditer() {

  }
}
