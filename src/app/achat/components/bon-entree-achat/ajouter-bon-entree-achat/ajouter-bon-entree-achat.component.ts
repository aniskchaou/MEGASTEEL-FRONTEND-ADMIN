
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BonEntreeAchatService } from 'src/app/achat/services/bon.entree.achat.service';

@Component({
  selector: 'app-ajouter-bon-entree-achat',
  templateUrl: './ajouter-bon-entree-achat.component.html',
  styleUrls: ['./ajouter-bon-entree-achat.component.css']
})
export class AjouterBonEntreeAchatComponent implements OnInit {



  bonAchatForm: FormGroup;
  constructor(private bonAchatService: BonEntreeAchatService) { this.bonAchatForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {
    return new FormGroup({
      code: new FormControl(''),
      date: new FormControl(),
      quantite: new FormControl(),
      unite: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.bonAchatForm.value)
    this.bonAchatService.creer(this.bonAchatForm.value);
  }

}
