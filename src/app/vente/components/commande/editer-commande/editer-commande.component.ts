
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/achat/services/commande.service';

@Component({
  selector: 'app-editer-commande',
  templateUrl: './editer-commande.component.html',
  styleUrls: ['./editer-commande.component.css']
})
export class EditerCommandeComponent implements OnInit {


  model
  constructor(private route: ActivatedRoute, private commandeService: CommandeService) { }

  ngOnInit() {
    this.commandeService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.model = data;
      console.log(this.model);
    })

  }

  onSubmit() {
    this.commandeService.creer(this.model);
    console.log(this.model);
  }

}
