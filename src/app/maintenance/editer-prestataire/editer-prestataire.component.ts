import { OfService } from './../../production/services/of.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-prestataire',
  templateUrl: './editer-prestataire.component.html',
  styleUrls: ['./editer-prestataire.component.css']
})
export class EditerPrestataireComponent implements OnInit {

 
model
constructor(private route:ActivatedRoute,private ofService:OfService) { }

ngOnInit() {
 this.ofService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
  this.model=data;
  console.log(this.model);
 })
 
}

onSubmit() { 
  this.ofService.creer(this.model);
  console.log(this.model);
  }

}
