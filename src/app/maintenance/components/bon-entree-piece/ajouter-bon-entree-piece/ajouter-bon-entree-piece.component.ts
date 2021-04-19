import { OfService } from '../../../../production/services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-bon-entree-piece',
  templateUrl: './ajouter-bon-entree-piece.component.html',
  styleUrls: ['./ajouter-bon-entree-piece.component.css']
})
export class AjouterBonEntreePieceComponent implements OnInit {



  bonPieceForm: FormGroup;
  constructor(private ofService: OfService) { this.bonPieceForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {
    return new FormGroup({
      codeOF: new FormControl(''),
      articleEntrant: new FormControl(),
      articleSortant: new FormControl(),
      quantiteRealise: new FormControl(''),
      quantiteRestant: new FormControl(''),
      codeMachine: new FormControl(),
      etat: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.bonPieceForm.value)
    this.ofService.creer(this.bonPieceForm.value);
  }

}
