import { BonfabricationService } from './../services/bonfabrication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bon-entree-fabrication',
  templateUrl: './bon-entree-fabrication.component.html',
  styleUrls: ['./bon-entree-fabrication.component.css']
})
export class BonEntreeFabricationComponent implements OnInit {

  fabrications
  constructor(private router:Router,private bonEntreFabrication:BonfabricationService) { }
  
  ngOnInit() {
    this.bonEntreFabrication.tous().subscribe(data=>{
      this.fabrications=data;
    })
  }


  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-bon-entree-fabrication");
  }

  redirectEditer()
  {

  }
}
