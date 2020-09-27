import { ClientService } from './../services/client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients
  constructor(private router:Router,private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.tous().subscribe(data=>{
      this.clients=data;
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
