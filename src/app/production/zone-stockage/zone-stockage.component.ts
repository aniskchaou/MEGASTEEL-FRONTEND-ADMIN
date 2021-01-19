import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-zone-stockage',
  templateUrl: './zone-stockage.component.html',
  styleUrls: ['./zone-stockage.component.css']
})
export class ZoneStockageComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    super.loadScripts()
  }
  redirectAjouter(){
    
  }

}
