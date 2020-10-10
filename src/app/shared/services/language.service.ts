import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
//default language
private language:BehaviorSubject<string> = new BehaviorSubject<string>('fr');

public getLan(){
  return this.language.asObservable();
}

public updateLan(lan){
  this.language.next(lan);
}
  constructor() { }
}
