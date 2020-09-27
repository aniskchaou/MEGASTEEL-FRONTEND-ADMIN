import { ActiviteService } from './../services/activite.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  activites
  constructor(private router:Router,private activiteService:ActiviteService) { }

  ngOnInit() {
    this.activiteService.tous().subscribe(data=>{
      this.activites=data;
    })
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-activite");
  }

  redirectEditer(id)
  {
    this.router.navigateByUrl("editer-activite/"+id);
  }

}
