import { OFService } from './../../achat/services/of.service';
import { OfService } from './../services/of.service';
import {FormGroup} from '@angular/forms';
import { Of } from './../models/of.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
   
   ofs;
   
  constructor(private router: Router,private ofService:OfService) {
   }
    

  ngOnInit() {
    this.ofService.tous().subscribe(data=>{
      this.ofs=data;
    })
  }

  redirectAddOf()
  {
    this.router.navigateByUrl("/ajouter-of");
   /* let ofModel=new Of(1,"qe","qd,","fq","zqd","zqd","qd","dz");
    this.ofs.push(ofModel);
    this.ofs.push(ofModel);
    this.ofs.push(ofModel);
    this.ofs.push(ofModel);*/
  }

  redirectEditerOf()
  {
    this.router.navigateByUrl("/editer-of/2");
  }

  redirectSupprimerOf()
  {
    this.router.navigateByUrl("/ajouter-of");
  }
}
