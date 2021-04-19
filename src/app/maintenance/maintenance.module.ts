import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from './components/machine/machine/machine.component';
import { OperateurComponent } from './components/operateur/operateur/operateur.component';
import { MaintenancePreventiveComponent } from './components/maintenance-preventive/maintenance-preventive/maintenance-preventive.component';
import { DemandeInterventionComponent } from './components/demande-intervention/demande-intervention/demande-intervention.component';
import { PieceComponent } from './components/piece/piece/piece.component';
import { PanneComponent } from './components/panne/panne/panne.component';
import { PrestataireComponent } from './components/prestataire/prestataire/prestataire.component';
import { BonEntreePieceComponent } from './components/bon-entree-piece/bon-entree-piece/bon-entree-piece.component';
import { AjouterBonEntreePieceComponent } from './components/bon-entree-piece/ajouter-bon-entree-piece/ajouter-bon-entree-piece.component';
import { AjouterDemandeInterventionComponent } from './components/demande-intervention/ajouter-demande-intervention/ajouter-demande-intervention.component';
import { AjouterMachineComponent } from './components/machine/ajouter-machine/ajouter-machine.component';
import { AjouterMaintenancePreventiveComponent } from './components/maintenance-preventive/ajouter-maintenance-preventive/ajouter-maintenance-preventive.component';
import { AjouterOperateurComponent } from './components/operateur/ajouter-operateur/ajouter-operateur.component';
import { AjouterPanneComponent } from './components/panne/ajouter-panne/ajouter-panne.component';
import { AjouterPieceComponent } from './components/piece/ajouter-piece/ajouter-piece.component';
import { AjouterPrestataireComponent } from './components/prestataire/ajouter-prestataire/ajouter-prestataire.component';
import { EditerPrestataireComponent } from './components/prestataire/editer-prestataire/editer-prestataire.component';
import { EditerPieceComponent } from './components/piece/editer-piece/editer-piece.component';
import { EditerPanneComponent } from './components/panne/editer-panne/editer-panne.component';
import { EditerOperateurComponent } from './components/operateur/editer-operateur/editer-operateur.component';
import { EditerMaintenancePreventiveComponent } from './components/maintenance-preventive/editer-maintenance-preventive/editer-maintenance-preventive.component';
import { EditerMachineComponent } from './components/machine/editer-machine/editer-machine.component';
import { EditerDemandeInterventionComponent } from './components/demande-intervention/editer-demande-intervention/editer-demande-intervention.component';

@NgModule({
  declarations: [MachineComponent, OperateurComponent, MaintenancePreventiveComponent,
    DemandeInterventionComponent, PieceComponent, PanneComponent, PrestataireComponent,
    BonEntreePieceComponent, AjouterBonEntreePieceComponent, AjouterDemandeInterventionComponent,
    AjouterMachineComponent, AjouterMaintenancePreventiveComponent, AjouterOperateurComponent,
    AjouterPanneComponent, AjouterPieceComponent, AjouterPrestataireComponent, EditerPrestataireComponent,
    EditerPieceComponent, EditerPanneComponent, EditerOperateurComponent,
    EditerMaintenancePreventiveComponent, EditerMachineComponent, EditerDemandeInterventionComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, RouterModule
  ]
})
export class MaintenanceModule { }
