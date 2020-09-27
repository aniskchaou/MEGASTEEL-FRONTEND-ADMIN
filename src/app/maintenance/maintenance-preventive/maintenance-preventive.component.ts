import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-preventive',
  templateUrl: './maintenance-preventive.component.html',
  styleUrls: ['./maintenance-preventive.component.css']
})
export class MaintenancePreventiveComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-preventive");
  }

  redirectEditer()
  {

  }
}
