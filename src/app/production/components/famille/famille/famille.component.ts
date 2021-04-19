import { FamilleService } from '../../../services/famille.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent extends URLLoader implements OnInit {

  familles
  loading: boolean = true;
  constructor(private router: Router, private familleService: FamilleService) {
    super()
  }

  ngOnInit() {

    this.familleService.tous().subscribe(data => {
      this.familles = data;
      this.loading = false;
      super.loadScripts()
    })
  }

  redirectAjouter() {
    this.router.navigateByUrl("ajouter-famille");
  }

  redirectEditer() {

  }
}
