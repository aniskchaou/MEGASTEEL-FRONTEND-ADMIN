import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-fiche-paie',
  templateUrl: './fiche-paie.component.html',
  styleUrls: ['./fiche-paie.component.css']
})
export class FichePaieComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    super.loadScripts()
  }

}
