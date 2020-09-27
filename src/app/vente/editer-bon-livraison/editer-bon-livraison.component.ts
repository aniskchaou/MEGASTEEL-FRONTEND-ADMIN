import { BonLivraisonService } from './../services/bon-livraison.service';
import { OfService } from './../../production/services/of.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-bon-livraison',
  templateUrl: './editer-bon-livraison.component.html',
  styleUrls: ['./editer-bon-livraison.component.css']
})
export class EditerBonLivraisonComponent implements OnInit {

 
model
constructor(private route:ActivatedRoute,private bonLivraisonService:BonLivraisonService) { }

ngOnInit() {
 this.bonLivraisonService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
  this.model=data;
  console.log(this.model);
 })
 
}

onSubmit() { 
  this.bonLivraisonService.creer(this.model);
  console.log(this.model);
  }

}
