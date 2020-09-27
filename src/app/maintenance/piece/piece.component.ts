import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-piece");
  }

  redirectEditer()
  {

  }
}
