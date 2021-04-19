
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';
import { ActiviteService } from 'src/app/production/services/activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent extends URLLoader implements OnInit {

  activites
  loading: boolean = true;
  constructor(private router: Router, private activiteService: ActiviteService) {
    super()
  }

  delete(nom, id) {
    const res = this.activiteService.supprimer(id)
    const item = this.activites.find(item => item.nom === nom)
    this.activites.splice(this.activites.indexOf(item))
  }

  ngOnInit() {

    this.activiteService.tous().subscribe(data => {
      this.activites = data;
      this.loading = false;
      super.loadScripts()
    })
  }

  redirectAjouter() {
    this.router.navigateByUrl("ajouter-activite");
  }

  redirectEditer(id) {
    this.router.navigateByUrl("editer-activite/" + id);
  }

}
