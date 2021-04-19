import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-licenciment',
  templateUrl: './licenciment.component.html',
  styleUrls: ['./licenciment.component.css']
})
export class LicencimentComponent extends URLLoader implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    super.loadScripts()
  }

}
