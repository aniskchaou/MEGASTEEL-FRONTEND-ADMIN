import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeComponent } from './commande/commande.component';
import { BonsReservationComponent } from './bons-reservation/bons-reservation.component';
import { BonsLivraisonComponent } from './bons-livraison/bons-livraison.component';
import { ClientsComponent } from './clients/clients.component';
import { AjouterCommandeComponent } from './ajouter-commande/ajouter-commande.component';
import { AjouterBonLivraisonComponent } from './ajouter-bon-livraison/ajouter-bon-livraison.component';
import { AjouterBonReservationComponent } from './ajouter-bon-reservation/ajouter-bon-reservation.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { EditerClientComponent } from './editer-client/editer-client.component';
import { EditerCommandeComponent } from './editer-commande/editer-commande.component';
import { EditerBonLivraisonComponent } from './editer-bon-livraison/editer-bon-livraison.component';
import { EditerBonReservationComponent } from './editer-bon-reservation/editer-bon-reservation.component';

@NgModule({
  declarations: [CommandeComponent, BonsReservationComponent, BonsLivraisonComponent, ClientsComponent, AjouterCommandeComponent, AjouterBonLivraisonComponent, AjouterBonReservationComponent, AjouterClientComponent, EditerClientComponent, EditerCommandeComponent, EditerBonLivraisonComponent, EditerBonReservationComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,RouterModule
  ]
})
export class VenteModule { }
