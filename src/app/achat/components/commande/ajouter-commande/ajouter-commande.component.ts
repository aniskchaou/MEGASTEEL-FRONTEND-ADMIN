
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/vente/services/commande.service';

@Component({
  selector: 'app-ajouter-commande',
  templateUrl: './ajouter-commande.component.html',
  styleUrls: ['./ajouter-commande.component.css']
})
export class AjouterCommandeComponent implements OnInit {



  commandeForm: FormGroup;
  constructor(private commandeService: CommandeService) { this.commandeForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {
    return new FormGroup({
      codeFournisseur: new FormControl(''),
      date: new FormControl(),
      etat: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.commandeForm.value)
    this.commandeService.creer(this.commandeForm.value);
  }

}
