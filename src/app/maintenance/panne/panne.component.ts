import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.css']
})
export class PanneComponent extends URLLoader implements OnInit {

  constructor(private router:Router) { super() }

  ngOnInit() {
    super.loadScripts()
  }
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-panne");
  }

  redirectEditer()
  {

  }
}
