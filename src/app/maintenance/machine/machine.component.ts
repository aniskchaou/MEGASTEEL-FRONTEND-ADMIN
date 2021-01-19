

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MachineService } from '../services/machine.service';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent extends URLLoader implements OnInit {
  
  machines;
  loading: boolean=true;
  constructor(private router:Router,
    private machineService:MachineService) { super()}

  ngOnInit() {
    this.machineService.tous().subscribe(data=>{
      this.machines=data;
      this.loading=false;
      super.loadScripts()
    })
  }
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-machine");
  }

  redirectEditer()
  {

  }
}
