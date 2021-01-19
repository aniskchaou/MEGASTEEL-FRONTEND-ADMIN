import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-privilige',
  templateUrl: './privilige.component.html',
  styleUrls: ['./privilige.component.css']
})
export class PriviligeComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    super.loadScripts()
  }

}
