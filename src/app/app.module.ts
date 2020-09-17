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
  
  {path:'ajouter-tva',component:CommandeComponent},
  {path:'ajouter-articles',component:CommandeComponent},
  {path:'ajouter-bon-entree-achat',component:CommandeComponent},
  {path:'ajouter-commandes',component:CommandeComponent},
  {path:'ajouter-commandes-fournisseur',component:CommandeComponent},
  {path:'ajouter-fournisseurs',component:CommandeComponent},

  {path:'machines',component:MachineComponent},
  {path:'clients',component:ClientsComponent},
  {path:'bons-livraison',component:BonsLivraisonComponent},
  {path:'bon-reservation',component:BonsReservationComponent},
  
  {path:'maintenance-preventive',component:MaintenancePreventiveComponent},
  {path:'demande-intervention',component:DemandeInterventionComponent},

  {path:'demande-intervention',component:DemandeInterventionComponent},
  {path:'pieces',component:PieceComponent},
  {path:'bon-entree-piece',component:BonEntreePieceComponent},

  {path:'pannes',component:PanneComponent},
  {path:'prestataires',component:PrestataireComponent},

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
