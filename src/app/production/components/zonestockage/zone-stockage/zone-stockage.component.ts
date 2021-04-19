import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-zone-stockage',
  templateUrl: './zone-stockage.component.html',
  styleUrls: ['./zone-stockage.component.css']
})
export class ZoneStockageComponent extends URLLoader implements OnInit {

  constructor(private router: Router) {
    super()
  }

  ngOnInit() {
    super.loadScripts()
  }
  redirectAjouter() {
    this.router.navigateByUrl("/ajouter-zone-stockage");
  }

}
