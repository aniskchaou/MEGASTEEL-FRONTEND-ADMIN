import { OfService } from './../services/of.service';
import { Of } from './../models/of.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editer-of',
  templateUrl: './editer-of.component.html',
  styleUrls: ['./editer-of.component.css']
})
export class EditerOfComponent implements OnInit {

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
