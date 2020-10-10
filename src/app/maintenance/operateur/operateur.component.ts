import { OperateurService } from './../services/operateur.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operateur',
  templateUrl: './operateur.component.html',
  styleUrls: ['./operateur.component.css']
})
export class OperateurComponent implements OnInit {

  operateurs
  loading=true;
  constructor(private router:Router,
    private operateurService:OperateurService) { }

  ngOnInit() {
    this.operateurService.tous().subscribe(data=>{
      this.operateurs=data;
      this.loading=false;
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
