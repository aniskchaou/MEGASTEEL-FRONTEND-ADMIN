import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'production';


  public router: string;

  constructor(private _router: Router) {
  }


  hasRoute(route: string) {
    return this._router.url.includes(route);
  }
}
