
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/vente/services/client.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {



  clientForm: FormGroup;
  constructor(private clientService: ClientService) { this.clientForm = this.createFormGroup(); }

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
    console.log(this.clientForm.value)
    this.clientService.creer(this.clientForm.value);
  }

}
