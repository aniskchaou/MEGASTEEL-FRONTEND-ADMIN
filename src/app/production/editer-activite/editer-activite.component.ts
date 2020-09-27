import { ActiviteService } from './../services/activite.service';
import { OfService } from './../services/of.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-activite',
  templateUrl: './editer-activite.component.html',
  styleUrls: ['./editer-activite.component.css']
})
export class EditerActiviteComponent implements OnInit {

 
model
constructor(private route:ActivatedRoute,private activiteService:ActiviteService) { }

ngOnInit() {
 this.activiteService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
  this.model=data;
  console.log(this.model);
 })
 
}

onSubmit() { 
  this.activiteService.creer(this.model);
  console.log(this.model);
  }

}
