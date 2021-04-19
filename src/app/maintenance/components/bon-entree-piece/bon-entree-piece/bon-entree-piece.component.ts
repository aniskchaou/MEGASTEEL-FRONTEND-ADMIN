import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-bon-entree-piece',
  templateUrl: './bon-entree-piece.component.html',
  styleUrls: ['./bon-entree-piece.component.css']
})
export class BonEntreePieceComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit() {
    super.loadScripts()
  }

}
