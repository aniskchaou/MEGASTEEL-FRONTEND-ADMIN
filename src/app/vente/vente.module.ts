import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeComponent } from './commande/commande.component';
import { BonsReservationComponent } from './bons-reservation/bons-reservation.component';
import { BonsLivraisonComponent } from './bons-livraison/bons-livraison.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [CommandeComponent, BonsReservationComponent, BonsLivraisonComponent, ClientsComponent],
  imports: [
    CommonModule
  ]
})
export class VenteModule { }
