import { ActiviteService } from './../services/activite.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent extends URLLoader implements OnInit {

  activites
  loading: boolean=true;
  constructor(private router:Router,private activiteService:ActiviteService) { 
    super()
  }

  ngOnInit() {
    
    this.activiteService.tous().subscribe(data=>{
      this.activites=data;
      this.loading=false;
      super.loadScripts()
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
