import { BonEntreeAchatService } from './../services/bon.entree.achat.service';
import { OfService } from './../../production/services/of.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-bon-entree-achat',
  templateUrl: './editer-bon-entree-achat.component.html',
  styleUrls: ['./editer-bon-entree-achat.component.css']
})
export class EditerBonEntreeAchatComponent implements OnInit {

 
model
constructor(private route:ActivatedRoute,private bonEntreeAchatService:BonEntreeAchatService) { }

ngOnInit() {
 this.bonEntreeAchatService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
  this.model=data;
  console.log(this.model);
 })
 
}

onSubmit() { 
  this.bonEntreeAchatService.creer(this.model);
  console.log(this.model);
  }

}
