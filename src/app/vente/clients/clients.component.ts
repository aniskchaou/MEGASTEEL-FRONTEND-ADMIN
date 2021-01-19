import { ClientService } from './../services/client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent extends URLLoader implements OnInit {

  clients
  constructor(private router:Router,private clientService:ClientService) { super()}

  ngOnInit() {
    this.clientService.tous().subscribe(data=>{
      this.clients=data;
      super.loadScripts()
    })
  }


  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-client");
  }

  redirectEditer()
  {

  }
}
