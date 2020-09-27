import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.css']
})
export class PanneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-panne");
  }

  redirectEditer()
  {

  }
}
