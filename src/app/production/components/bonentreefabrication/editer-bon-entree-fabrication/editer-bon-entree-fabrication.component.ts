
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { BonfabricationService } from 'src/app/production/services/bonfabrication.service';

@Component({
  selector: 'app-editer-bon-entree-fabrication',
  templateUrl: './editer-bon-entree-fabrication.component.html',
  styleUrls: ['./editer-bon-entree-fabrication.component.css']
})
export class EditerBonEntreeFabricationComponent implements OnInit {


  model
  constructor(private route: ActivatedRoute, private bonfabricationService: BonfabricationService) { }

  ngOnInit() {
    this.bonfabricationService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.model = data;
      console.log(this.model);
    })

  }

  onSubmit() {
    this.bonfabricationService.creer(this.model);
    console.log(this.model);
  }

}
