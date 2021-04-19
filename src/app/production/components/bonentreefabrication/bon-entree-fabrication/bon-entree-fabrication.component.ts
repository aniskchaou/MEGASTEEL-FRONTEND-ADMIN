
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';
import { BonfabricationService } from 'src/app/production/services/bonfabrication.service';

@Component({
  selector: 'app-bon-entree-fabrication',
  templateUrl: './bon-entree-fabrication.component.html',
  styleUrls: ['./bon-entree-fabrication.component.css']
})
export class BonEntreeFabricationComponent extends URLLoader implements OnInit {

  fabrications
  loading: boolean = true;
  constructor(private router: Router, private bonEntreFabrication: BonfabricationService) {
    super()
  }

  ngOnInit() {

    this.bonEntreFabrication.tous().subscribe(data => {
      this.fabrications = data;
      this.loading = false;
      super.loadScripts()
    })
  }


  redirectAjouter() {
    this.router.navigateByUrl("ajouter-bon-entree-fabrication");
  }

  redirectEditer() {

  }
}
