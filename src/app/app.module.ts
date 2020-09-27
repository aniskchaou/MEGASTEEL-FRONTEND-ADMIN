import { EditerArticleComponent } from './achat/editer-article/editer-article.component';
import { EditerBonEntreeAchatComponent } from './achat/editer-bon-entree-achat/editer-bon-entree-achat.component';
import { EditerFournisseurComponent } from './achat/editer-fournisseur/editer-fournisseur.component';
import { EditerClientComponent } from './vente/editer-client/editer-client.component';
import { EditerBonLivraisonComponent } from './vente/editer-bon-livraison/editer-bon-livraison.component';
import { EditerBonReservationComponent } from './vente/editer-bon-reservation/editer-bon-reservation.component';
import { AjouterMachineComponent } from './maintenance/ajouter-machine/ajouter-machine.component';
import { EditerCommandeComponent } from './vente/editer-commande/editer-commande.component';
import { AjouterOperateurComponent } from './maintenance/ajouter-operateur/ajouter-operateur.component';
import { EditerOperateurComponent } from './maintenance/editer-operateur/editer-operateur.component';
import { EditerMachineComponent } from './maintenance/editer-machine/editer-machine.component';
import { AjouterClientComponent } from './vente/ajouter-client/ajouter-client.component';
import { AjouterBonLivraisonComponent } from './vente/ajouter-bon-livraison/ajouter-bon-livraison.component';
import { AjouterBonReservationComponent } from './vente/ajouter-bon-reservation/ajouter-bon-reservation.component';
import { AjouterTvaComponent } from './achat/ajouter-tva/ajouter-tva.component';
import { AjouterArticleComponent } from './achat/ajouter-article/ajouter-article.component';
import { AjouterBonEntreeAchatComponent } from './achat/ajouter-bon-entree-achat/ajouter-bon-entree-achat.component';
import { AjouterCommandeComponent } from './vente/ajouter-commande/ajouter-commande.component';
import { AjouterFournisseurComponent } from './achat/ajouter-fournisseur/ajouter-fournisseur.component';
import { EditerActiviteComponent } from './production/editer-activite/editer-activite.component';
import { EditerBonEntreeFabricationComponent } from './production/editer-bon-entree-fabrication/editer-bon-entree-fabrication.component';
import { EditerFamilleComponent } from './production/editer-famille/editer-famille.component';
import { EditerOfComponent } from './production/editer-of/editer-of.component';
import { AjouterFamilleComponent } from './production/ajouter-famille/ajouter-famille.component';
import { AjouterBonEntreeFabricationComponent } from './production/ajouter-bon-entree-fabrication/ajouter-bon-entree-fabrication.component';
import { AjouterActiviteComponent } from './production/ajouter-activite/ajouter-activite.component';
import { AjouterOfComponent } from './production/ajouter-of/ajouter-of.component';
import { PrestataireComponent } from './maintenance/prestataire/prestataire.component';
import { PanneComponent } from './maintenance/panne/panne.component';
import { PieceComponent } from './maintenance/piece/piece.component';
import { BonEntreePieceComponent } from './maintenance/bon-entree-piece/bon-entree-piece.component';
import { DemandeInterventionComponent } from './maintenance/demande-intervention/demande-intervention.component';
import { MaintenancePreventiveComponent } from './maintenance/maintenance-preventive/maintenance-preventive.component';
import { ClientsComponent } from './vente/clients/clients.component';
import { BonsReservationComponent } from './vente/bons-reservation/bons-reservation.component';
import { BonsLivraisonComponent } from './vente/bons-livraison/bons-livraison.component';
import { MachineComponent } from './maintenance/machine/machine.component';
import { DemandeAchatComponent } from './achat/demande-achat/demande-achat.component';
import { FournisseurComponent } from './achat/fournisseur/fournisseur.component';
import { CommandeFournisseurComponent } from './achat/commande-fournisseur/commande-fournisseur.component';
import { CommandeComponent } from './vente/commande/commande.component';
import { BonEntreeAchatComponent } from './achat/bon-entree-achat/bon-entree-achat.component';
import { TvaComponent } from './achat/tva/tva.component';
import { ArticleComponent } from './achat/article/article.component';
import { ActiviteComponent } from './production/activite/activite.component';
import { OperateurComponent } from './maintenance/operateur/operateur.component';
import { VenteModule } from './vente/vente.module';
import { AchatModule } from './achat/achat.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { OfComponent } from './production/of/of.component';
import { FamilleComponent } from './production/famille/famille.component';
import { BonEntreeFabricationComponent } from './production/bon-entree-fabrication/bon-entree-fabrication.component';
import { ProductionModule } from './production/production.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScriptsComponent } from './shared/scripts/scripts.component';
import { WidgetsComponent } from './shared/widgets/widgets.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import {APP_BASE_HREF} from '@angular/common';
import { NotificationComponent } from './shared/notification/notification.component';
import { MessageComponent } from './shared/message/message.component';
import { UserComponent } from './shared/user/user.component';

const routes:Routes=[
  {path:'',component:DashboardComponent},
  {path:'of',component:OfComponent},
  {path:'familles',component:FamilleComponent},
  {path:'bon-entree-fabrication',component:BonEntreeFabricationComponent},
  {path:'activites',component:ActiviteComponent},
  {path:'operateurs',component:OperateurComponent},
  {path:'commandes',component:CommandeComponent},

  {path:'tva',component:TvaComponent},
  {path:'articles',component:ArticleComponent},
  {path:'bon-entree-achat',component:BonEntreeAchatComponent},
  {path:'commandes',component:CommandeComponent},
  {path:'commandes-fournisseur',component:CommandeFournisseurComponent},
  {path:'fournisseurs',component:FournisseurComponent},
  {path:'demande-achat',component:DemandeAchatComponent},
  
  {path:'ajouter-tva',component:AjouterTvaComponent},
  {path:'ajouter-article',component:AjouterArticleComponent},
  {path:'ajouter-bon-entree-achat',component:AjouterBonEntreeAchatComponent},
  {path:'ajouter-commande',component:AjouterCommandeComponent},
  {path:'ajouter-commandes-fournisseur',component:CommandeComponent},
  {path:'ajouter-fournisseur',component:AjouterFournisseurComponent},

  {path:'machines',component:MachineComponent},
  {path:'clients',component:ClientsComponent},
  {path:'bons-livraison',component:BonsLivraisonComponent},
  {path:'bon-reservation',component:BonsReservationComponent},

  {path:'ajouter-client',component:AjouterClientComponent},
  {path:'ajouter-bon-livraison',component:AjouterBonLivraisonComponent},
  {path:'ajouter-bon-reservation',component:AjouterBonReservationComponent},
  
  {path:'maintenance-preventive',component:MaintenancePreventiveComponent},
  {path:'demande-intervention',component:DemandeInterventionComponent},
  {path:'demande-intervention',component:DemandeInterventionComponent},
  {path:'pieces',component:PieceComponent},
  {path:'bon-entree-piece',component:BonEntreePieceComponent},
  {path:'pannes',component:PanneComponent},
  {path:'prestataires',component:PrestataireComponent},
  
  {path:'ajouter-of',component:AjouterOfComponent},
  {path:'ajouter-activite',component:AjouterActiviteComponent},
  {path:'ajouter-bon-entree-fabrication',component:AjouterBonEntreeFabricationComponent},
  {path:'ajouter-famille',component:AjouterFamilleComponent},
  {path:'ajouter-machine',component:AjouterMachineComponent},
  {path:'editer-client/:id',component:EditerClientComponent},
  {path:'editer-of/:id',component:EditerOfComponent},
  {path:'editer-famille/:id',component:EditerFamilleComponent},
  {path:'editer-bon-entree-fabrication/:id',component:EditerBonEntreeFabricationComponent},
  {path:'editer-activite/:id',component:EditerActiviteComponent},
  {path:'editer-machine/:id',component:EditerMachineComponent},
  {path:'editer-operateur/:id',component:EditerOperateurComponent},
  {path:'ajouter-operateur',component:AjouterOperateurComponent},
  {path:'editer-commande/:id',component:EditerCommandeComponent},
  {path:'editer-bon-reservation/:id',component:EditerBonReservationComponent},
  {path:'editer-bon-livraison/:id',component:EditerBonLivraisonComponent},
  {path:'editer-fournisseur/:id',component:EditerFournisseurComponent},
  {path:'editer-bon-entree-achat/:id',component:EditerBonEntreeAchatComponent},
  {path:'editer-fournisseur/:id',component:EditerFournisseurComponent},
  {path:'editer-article/:id',component:EditerArticleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuComponent,
    FooterComponent,
    ScriptsComponent,
    WidgetsComponent,
    DashboardComponent,
    NotificationComponent,
    MessageComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductionModule,MaintenanceModule,AchatModule,VenteModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
