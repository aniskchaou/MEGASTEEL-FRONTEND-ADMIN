import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-demande-achat',
  templateUrl: './demande-achat.component.html',
  styleUrls: ['./demande-achat.component.css']
})
export class DemandeAchatComponent extends URLLoader implements OnInit {

  constructor() { super()}

  ngOnInit() {
    super.loadScripts()
  }

}
