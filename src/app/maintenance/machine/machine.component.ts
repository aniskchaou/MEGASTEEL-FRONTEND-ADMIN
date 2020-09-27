

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MachineService } from '../services/machine.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  
  machines;
  constructor(private router:Router,
    private machineService:MachineService) { }

  ngOnInit() {
    this.machineService.tous().subscribe(data=>{
      this.machines=data;
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
