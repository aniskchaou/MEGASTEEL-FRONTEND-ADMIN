import { ClientService } from './../services/client.service';
import { OfService } from './../../production/services/of.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-client',
  templateUrl: './editer-client.component.html',
  styleUrls: ['./editer-client.component.css']
})
export class EditerClientComponent implements OnInit {

  
model
constructor(private route:ActivatedRoute,private clientService:ClientService) { }

ngOnInit() {
 this.clientService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
  this.model=data;
  console.log(this.model);
 })
 
}

onSubmit() { 
  this.clientService.creer(this.model);
  console.log(this.model);
  }

}
