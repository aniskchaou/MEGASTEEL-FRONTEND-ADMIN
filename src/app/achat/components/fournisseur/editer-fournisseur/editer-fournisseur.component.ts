import { FournisseurService } from '../../../services/founisseur.service';
import { OfService } from '../../../../production/services/of.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-fournisseur',
  templateUrl: './editer-fournisseur.component.html',
  styleUrls: ['./editer-fournisseur.component.css']
})
export class EditerFournisseurComponent implements OnInit {


  model
  constructor(private route: ActivatedRoute, private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.fournisseurService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.model = data;
      console.log(this.model);
    })

  }

  onSubmit() {
    this.fournisseurService.creer(this.model);
    console.log(this.model);
  }

}
