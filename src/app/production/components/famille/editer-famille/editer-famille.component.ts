
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FamilleService } from 'src/app/production/services/famille.service';

@Component({
  selector: 'app-editer-famille',
  templateUrl: './editer-famille.component.html',
  styleUrls: ['./editer-famille.component.css']
})
export class EditerFamilleComponent implements OnInit {


  model
  constructor(private route: ActivatedRoute, private familleService: FamilleService) { }

  ngOnInit() {
    this.familleService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.model = data;
      console.log(this.model);
    })

  }

  onSubmit() {
    this.familleService.creer(this.model);
    console.log(this.model);
  }

}
