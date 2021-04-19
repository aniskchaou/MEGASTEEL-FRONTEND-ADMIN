
import { EditerArticleComponent } from './achat/components/article/editer-article/editer-article.component';
import { EditerBonEntreeAchatComponent } from './achat/components/bon-entree-achat/editer-bon-entree-achat/editer-bon-entree-achat.component';
import { EditerFournisseurComponent } from './achat/components/fournisseur/editer-fournisseur/editer-fournisseur.component';
import { EditerClientComponent } from './vente/components/client/editer-client/editer-client.component';
import { EditerBonLivraisonComponent } from './vente/components/bon-livraison/editer-bon-livraison/editer-bon-livraison.component';
import { EditerBonReservationComponent } from './vente/components/bon-reservation/editer-bon-reservation/editer-bon-reservation.component';
import { AjouterMachineComponent } from './maintenance/components/machine/ajouter-machine/ajouter-machine.component';
import { AjouterOperateurComponent } from './maintenance/components/operateur/ajouter-operateur/ajouter-operateur.component';
import { EditerOperateurComponent } from './maintenance/components/operateur/editer-operateur/editer-operateur.component';
import { EditerMachineComponent } from './maintenance/components/machine/editer-machine/editer-machine.component';
import { AjouterTvaComponent } from './achat/components/tva/ajouter-tva/ajouter-tva.component';
import { AjouterArticleComponent } from './achat/components/article/ajouter-article/ajouter-article.component';
import { AjouterBonEntreeAchatComponent } from './achat/components/bon-entree-achat/ajouter-bon-entree-achat/ajouter-bon-entree-achat.component';
import { AjouterFournisseurComponent } from './achat/components/fournisseur/ajouter-fournisseur/ajouter-fournisseur.component';
import { EditerActiviteComponent } from './production/components/activite/editer-activite/editer-activite.component';
import { AjouterBonEntreeFabricationComponent } from './production/components/bonentreefabrication/ajouter-bon-entree-fabrication/ajouter-bon-entree-fabrication.component';
import { AjouterActiviteComponent } from './production/components/activite/ajouter-activite/ajouter-activite.component';
import { AjouterOfComponent } from './production/components/of/ajouter-of/ajouter-of.component';
import { PrestataireComponent } from './maintenance/components/prestataire/prestataire/prestataire.component';
import { PanneComponent } from './maintenance/components/panne/panne/panne.component';
import { PieceComponent } from './maintenance/components/piece/piece/piece.component';
import { BonEntreePieceComponent } from './maintenance/components/bon-entree-piece/bon-entree-piece/bon-entree-piece.component';
import { DemandeInterventionComponent } from './maintenance/components/demande-intervention/demande-intervention/demande-intervention.component';
import { MaintenancePreventiveComponent } from './maintenance/components/maintenance-preventive/maintenance-preventive/maintenance-preventive.component';
import { MachineComponent } from './maintenance/components/machine/machine/machine.component';
import { DemandeAchatComponent } from './achat/components/demande-achat/demande-achat/demande-achat.component';
import { FournisseurComponent } from './achat/components/fournisseur/fournisseur/fournisseur.component';
import { CommandeFournisseurComponent } from './achat/components/commande-founisseur/commande-fournisseur/commande-fournisseur.component';
import { CommandeComponent } from './vente/components/commande/commande/commande.component';
import { BonEntreeAchatComponent } from './achat/components/bon-entree-achat/bon-entree-achat/bon-entree-achat.component';
import { TvaComponent } from './achat/components/tva/tva/tva.component';
import { ArticleComponent } from './achat/components/article/article/article.component';

import { OperateurComponent } from './maintenance/components/operateur/operateur/operateur.component';
import { VenteModule } from './vente/vente.module';
import { AchatModule } from './achat/achat.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { FamilleComponent } from './production/components/famille/famille/famille.component';

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
import { APP_BASE_HREF } from '@angular/common';
import { NotificationComponent } from './shared/notification/notification.component';
import { MessageComponent } from './shared/message/message.component';
import { UserComponent } from './shared/user/user.component';
import { EmployeesComponent } from './rh/components/employe/employees/employees.component';
import { CongeComponent } from './rh/components/conge/conge/conge.component';
import { GroupeComponent } from './utilisateur/components/groupe/groupe.component';
import { OfStatistiqueComponent } from './statistique/of-statistique/of-statistique.component';
import { AjouterZoneStockageComponent } from './production/components/zonestockage/ajouter-zone-stockage/ajouter-zone-stockage.component';
import { SystemeConfigurationComponent } from './configuration/systeme-configuration/systeme-configuration.component';
import { EmailConfigurationComponent } from './configuration/email-configuration/email-configuration.component';
import { CompanyConfigurationComponent } from './configuration/company-configuration/company-configuration.component';
import { EditerLicenciementComponent } from './rh/components/licenciement/editer-licenciement/editer-licenciement.component';
import { EditerOfComponent } from './production/components/of/editer-of/editer-of.component';
import { OfComponent } from './production/components/of/of/of.component';
import { ActiviteComponent } from './production/components/activite/activite/activite.component';
import { BonEntreeFabricationComponent } from './production/components/bonentreefabrication/bon-entree-fabrication/bon-entree-fabrication.component';
import { EditerBonEntreeFabricationComponent } from './production/components/bonentreefabrication/editer-bon-entree-fabrication/editer-bon-entree-fabrication.component';
import { AjouterFamilleComponent } from './production/components/famille/ajouter-famille/ajouter-famille.component';
import { EditerFamilleComponent } from './production/components/famille/editer-famille/editer-famille.component';
import { ZoneStockageComponent } from './production/components/zonestockage/zone-stockage/zone-stockage.component';
import { EditerCongeComponent } from './rh/components/conge/editer-conge/editer-conge.component';
import { AjouterEmployeComponent } from './rh/components/employe/ajouter-employe/ajouter-employe.component';
import { EditerEmployeComponent } from './rh/components/employe/editer-employe/editer-employe.component';
import { EditerFichePaieComponent } from './rh/components/fiche-paie/editer-fiche-paie/editer-fiche-paie.component';
import { FichePaieComponent } from './rh/components/fiche-paie/fiche-paie/fiche-paie.component';
import { LicencimentComponent } from './rh/components/licenciement/licenciment/licenciment.component';
import { PriviligeComponent } from './utilisateur/components/privilige/privilige.component';
import { UtilisateurComponent } from './utilisateur/components/utilisateur/utilisateur.component';
import { AjouterBonLivraisonComponent } from './vente/components/bon-livraison/ajouter-bon-livraison/ajouter-bon-livraison.component';
import { BonsLivraisonComponent } from './vente/components/bon-livraison/bons-livraison/bons-livraison.component';
import { AjouterBonReservationComponent } from './vente/components/bon-reservation/ajouter-bon-reservation/ajouter-bon-reservation.component';
import { BonsReservationComponent } from './vente/components/bon-reservation/bons-reservation/bons-reservation.component';
import { AjouterClientComponent } from './vente/components/client/ajouter-client/ajouter-client.component';
import { ClientsComponent } from './vente/components/client/clients/clients.component';
import { AjouterCommandeComponent } from './vente/components/commande/ajouter-commande/ajouter-commande.component';
import { EditerCommandeComponent } from './vente/components/commande/editer-commande/editer-commande.component';
import { AjouterCongeComponent } from './rh/components/conge/ajouter-conge/ajouter-conge.component';
import { AjouterFichePaieComponent } from './rh/components/fiche-paie/ajouter-fiche-paie/ajouter-fiche-paie.component';
import { AjouterLicenciementComponent } from './rh/components/licenciement/ajouter-licenciement/ajouter-licenciement.component';
import { AddMenuComponent } from './shared/add-menu/add-menu.component';
import { EditUserComponent } from './shared/edit-user/edit-user.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [

  { path: 'of', component: OfComponent },
  { path: 'familles', component: FamilleComponent },
  { path: 'bon-entree-fabrication', component: BonEntreeFabricationComponent },
  { path: 'activites', component: ActiviteComponent },
  { path: 'operateurs', component: OperateurComponent },
  { path: 'commandes', component: CommandeComponent },

  { path: 'tva', component: TvaComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'bon-entree-achat', component: BonEntreeAchatComponent },
  { path: 'commandes', component: CommandeComponent },
  { path: 'commandes-fournisseur', component: CommandeFournisseurComponent },
  { path: 'fournisseurs', component: FournisseurComponent },
  { path: 'demande-achat', component: DemandeAchatComponent },

  { path: 'ajouter-tva', component: AjouterTvaComponent },
  { path: 'ajouter-article', component: AjouterArticleComponent },
  { path: 'ajouter-bon-entree-achat', component: AjouterBonEntreeAchatComponent },
  { path: 'ajouter-commande', component: AjouterCommandeComponent },
  { path: 'ajouter-commandes-fournisseur', component: CommandeComponent },
  { path: 'ajouter-fournisseur', component: AjouterFournisseurComponent },

  { path: 'machines', component: MachineComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'bons-livraison', component: BonsLivraisonComponent },
  { path: 'bon-reservation', component: BonsReservationComponent },

  { path: 'ajouter-client', component: AjouterClientComponent },
  { path: 'ajouter-bon-livraison', component: AjouterBonLivraisonComponent },
  { path: 'ajouter-bon-reservation', component: AjouterBonReservationComponent },

  { path: 'maintenance-preventive', component: MaintenancePreventiveComponent },
  { path: 'demande-intervention', component: DemandeInterventionComponent },
  { path: 'demande-intervention', component: DemandeInterventionComponent },
  { path: 'pieces', component: PieceComponent },
  { path: 'bon-entree-piece', component: BonEntreePieceComponent },
  { path: 'pannes', component: PanneComponent },
  { path: 'prestataires', component: PrestataireComponent },

  { path: 'ajouter-of', component: AjouterOfComponent },
  { path: 'ajouter-activite', component: AjouterActiviteComponent },
  { path: 'ajouter-bon-entree-fabrication', component: AjouterBonEntreeFabricationComponent },
  { path: 'ajouter-famille', component: AjouterFamilleComponent },
  { path: 'ajouter-machine', component: AjouterMachineComponent },
  { path: 'editer-client/:id', component: EditerClientComponent },
  { path: 'editer-of/:id', component: EditerOfComponent },
  { path: 'editer-famille/:id', component: EditerFamilleComponent },
  { path: 'editer-bon-entree-fabrication/:id', component: EditerBonEntreeFabricationComponent },
  { path: 'editer-activite/:id', component: EditerActiviteComponent },
  { path: 'editer-machine/:id', component: EditerMachineComponent },
  { path: 'editer-operateur/:id', component: EditerOperateurComponent },
  { path: 'ajouter-operateur', component: AjouterOperateurComponent },
  { path: 'editer-commande/:id', component: EditerCommandeComponent },
  { path: 'editer-bon-reservation/:id', component: EditerBonReservationComponent },
  { path: 'editer-bon-livraison/:id', component: EditerBonLivraisonComponent },
  { path: 'editer-fournisseur/:id', component: EditerFournisseurComponent },
  { path: 'editer-bon-entree-achat/:id', component: EditerBonEntreeAchatComponent },
  { path: 'editer-fournisseur/:id', component: EditerFournisseurComponent },
  { path: 'editer-article/:id', component: EditerArticleComponent },
  { path: 'supprimer-of/:action/:id', component: OfComponent },
  { path: 'zone-stockage', component: ZoneStockageComponent },
  { path: 'licenciement', component: LicencimentComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'fiche-de-paie', component: FichePaieComponent },
  { path: 'conges', component: CongeComponent },
  { path: 'groupes', component: GroupeComponent },
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'privileges', component: PriviligeComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'messages', component: MessageComponent },
  { path: 'statistique-of', component: OfStatistiqueComponent },
  { path: 'ajouter-zone-stockage', component: AjouterZoneStockageComponent },
  { path: 'systeme-config', component: SystemeConfigurationComponent },
  { path: 'email-config', component: EmailConfigurationComponent },
  { path: 'entreprise-config', component: CompanyConfigurationComponent },
  { path: 'profile', component: UserComponent },
  { path: 'ajouter-conge', component: AjouterCongeComponent },
  { path: 'ajouter-employe', component: AjouterEmployeComponent },
  { path: 'ajouter-fiche-paie', component: AjouterFichePaieComponent },
  { path: 'ajouter-licenciement', component: AjouterLicenciementComponent },
  { path: 'edit-profile', component: EditUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

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
    EmployeesComponent,
    FichePaieComponent,
    CongeComponent,
    LicencimentComponent,
    UtilisateurComponent,
    GroupeComponent,
    PriviligeComponent,
    OfStatistiqueComponent,
    AjouterZoneStockageComponent,
    AjouterEmployeComponent,
    SystemeConfigurationComponent,
    EmailConfigurationComponent,
    CompanyConfigurationComponent,
    EditerCongeComponent,
    EditerEmployeComponent,
    EditerFichePaieComponent,
    EditerLicenciementComponent,
    AjouterCongeComponent,
    AjouterEmployeComponent,
    AjouterFichePaieComponent,
    AjouterFichePaieComponent,
    AjouterLicenciementComponent,
    AddMenuComponent,
    EditUserComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductionModule, MaintenanceModule, AchatModule, VenteModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
