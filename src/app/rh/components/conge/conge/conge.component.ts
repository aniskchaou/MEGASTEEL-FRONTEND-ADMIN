import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent extends URLLoader implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    super.loadScripts()
  }

}
