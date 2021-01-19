
import { OfService } from './../services/of.service';
import {FormGroup} from '@angular/forms';
import { Of } from './../models/of.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLLoader } from 'src/app/config/urls/URLLoader';


@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent extends URLLoader implements OnInit {
   
   ofs
   loading=true

 

  constructor(private route:ActivatedRoute,private router: Router,private ofService:OfService) {
   super()
  }

  redirectTo(uri:string){
   
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  ngOnInit() {
    
    this.ofService.tous().subscribe(data=>{
      
      this.ofs=data;
      this.loading=false;
      super.loadScripts();
    })


    const action=this.route.snapshot.paramMap.get('action')
    console.log(action);
    if(action==="delete")
    {
      const res=   this.ofService.supprimer(this.route.snapshot.paramMap.get('id'));
      this.redirectTo("/of");
    }

    
  }
 
  ngOnChanges()
  {
   
    this.ofService.tous().subscribe(data=>{
      this.ofs=data;
      this.loading=false;
    })
  }

  redirectAddOf()
  {
    this.router.navigateByUrl("/ajouter-of");
  }

  
}
