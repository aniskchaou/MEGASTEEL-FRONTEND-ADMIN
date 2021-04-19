import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-maintenance-preventive',
  templateUrl: './maintenance-preventive.component.html',
  styleUrls: ['./maintenance-preventive.component.css']
})
export class MaintenancePreventiveComponent extends URLLoader implements OnInit {

  constructor(private router:Router) { super() }

  ngOnInit() {
    super.loadScripts()
  }
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-preventive");
  }

  redirectEditer()
  {

  }
}
