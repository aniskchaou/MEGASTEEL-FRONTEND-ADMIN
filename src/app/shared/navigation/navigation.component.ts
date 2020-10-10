import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './../services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  
})
export class NavigationComponent implements OnInit {

  langUser
  langData: any;
  constructor(private language:LanguageService,private http:HttpClient) { 
    this.language.getLan().subscribe(lan =>{
      this.langUser=lan;
     this.selectLanguage(lan);
     
     
    });
  }

  ngOnInit() {
   
  }
  
  selectLanguage(language)
  {
   switch (language) {
     case 'en':
       this.getMenuData('en','./assets/language/menu/en_menu.json');
       break;
     
     case 'fr':
     this.getMenuData('fr','./assets/language/menu/fr_menu.json');
     break;  
   
     case 'de':
     this.getMenuData('de','./assets/language/menu/de_menu.json');
     break;

     default:
       break;
   }
  }

  getMenuData(language,path) {
   this.getJSON(language,path).subscribe(data => {
       this.langData=data;
      console.log(this.langData);
   });
    }

  public getJSON(language,path): Observable<any> {
   return this.http.get(path);
  }
  
}
