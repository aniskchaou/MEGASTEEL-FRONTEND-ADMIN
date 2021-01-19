import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    super.loadScripts()
  }

}
