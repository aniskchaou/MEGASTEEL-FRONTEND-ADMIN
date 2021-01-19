import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-demande-intervention',
  templateUrl: './demande-intervention.component.html',
  styleUrls: ['./demande-intervention.component.css']
})
export class DemandeInterventionComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit() {
    super.loadScripts()
  }

}
