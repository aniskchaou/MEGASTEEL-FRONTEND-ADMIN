import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent extends URLLoader implements OnInit {

  constructor(private router:Router) { super() }

  ngOnInit() {
    super.loadScripts()
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-piece");
  }

  redirectEditer()
  {

  }
}
