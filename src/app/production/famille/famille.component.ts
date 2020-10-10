import { FamilleService } from './../services/famille.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit {
  
  familles
  loading: boolean=true;
  constructor(private router:Router,private familleService:FamilleService) { }

  ngOnInit() {
    this.familleService.tous().subscribe(data=>{
      this.familles=data;
      this.loading=false;
    })
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-famille");
  }

  redirectEditer()
  {

  }
}
