import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeComponent } from './components/commande/commande/commande.component';
import { EditerClientComponent } from './components/client/editer-client/editer-client.component';
import { EditerBonLivraisonComponent } from './components/bon-livraison/editer-bon-livraison/editer-bon-livraison.component';
import { EditerBonReservationComponent } from './components/bon-reservation/editer-bon-reservation/editer-bon-reservation.component';
import { AjouterBonLivraisonComponent } from './components/bon-livraison/ajouter-bon-livraison/ajouter-bon-livraison.component';
import { BonsLivraisonComponent } from './components/bon-livraison/bons-livraison/bons-livraison.component';
import { AjouterBonReservationComponent } from './components/bon-reservation/ajouter-bon-reservation/ajouter-bon-reservation.component';
import { BonsReservationComponent } from './components/bon-reservation/bons-reservation/bons-reservation.component';
import { AjouterClientComponent } from './components/client/ajouter-client/ajouter-client.component';
import { ClientsComponent } from './components/client/clients/clients.component';
import { AjouterCommandeComponent } from './components/commande/ajouter-commande/ajouter-commande.component';
import { EditerCommandeComponent } from './components/commande/editer-commande/editer-commande.component';

@NgModule({
  declarations: [CommandeComponent, BonsReservationComponent, BonsLivraisonComponent,
    ClientsComponent, AjouterCommandeComponent, AjouterBonLivraisonComponent,
    AjouterBonReservationComponent, AjouterClientComponent, EditerClientComponent,
    EditerCommandeComponent, EditerBonLivraisonComponent, EditerBonReservationComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, RouterModule
  ]
})
export class VenteModule { }
