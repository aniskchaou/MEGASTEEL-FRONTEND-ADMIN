import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent extends URLLoader implements OnInit {

  constructor() { 
     super()
  }

  ngOnInit() {
    super.loadScripts()
  }

}
