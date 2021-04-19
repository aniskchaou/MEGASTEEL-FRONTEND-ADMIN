import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent extends URLLoader implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    super.loadScripts()
  }

}
