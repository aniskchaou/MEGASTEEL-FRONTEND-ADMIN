import { OperateurService } from './../services/operateur.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-operateur',
  templateUrl: './operateur.component.html',
  styleUrls: ['./operateur.component.css']
})
export class OperateurComponent extends URLLoader implements OnInit {

  operateurs
  loading=true;
  constructor(private router:Router,
    private operateurService:OperateurService) { super() }

  ngOnInit() {
    this.operateurService.tous().subscribe(data=>{
      this.operateurs=data;
      this.loading=false;
      super.loadScripts()
    })
  }
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-operateur");
  }

  redirectEditer()
  {

  }
}
