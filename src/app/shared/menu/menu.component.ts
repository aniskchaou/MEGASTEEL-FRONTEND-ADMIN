import { HttpClient } from '@angular/common/http';
import { LanguageService } from './../services/language.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  outputs:['menuEvent']
})
export class MenuComponent implements OnInit {
  public menuEvent=new EventEmitter<string>()
  userLanguage
  menuData
  imageURL=""
  constructor(private language:LanguageService,private http:HttpClient) { 
    this.language.getLan().subscribe(lan =>{
      this.userLanguage=lan;
      
    });
  }
  changeLanguage(lan){
    this.language.updateLan(lan); 
    this.userLanguage=lan;
    
  }
  ngOnInit() {
  }

 
}
