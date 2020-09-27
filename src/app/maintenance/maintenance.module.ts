import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from './machine/machine.component';
import { OperateurComponent } from './operateur/operateur.component';
import { MaintenancePreventiveComponent } from './maintenance-preventive/maintenance-preventive.component';
import { DemandeInterventionComponent } from './demande-intervention/demande-intervention.component';
import { PieceComponent } from './piece/piece.component';
import { PanneComponent } from './panne/panne.component';
import { PrestataireComponent } from './prestataire/prestataire.component';
import { BonEntreePieceComponent } from './bon-entree-piece/bon-entree-piece.component';
import { AjouterBonEntreePieceComponent } from './ajouter-bon-entree-piece/ajouter-bon-entree-piece.component';
import { AjouterDemandeInterventionComponent } from './ajouter-demande-intervention/ajouter-demande-intervention.component';
import { AjouterMachineComponent } from './ajouter-machine/ajouter-machine.component';
import { AjouterMaintenancePreventiveComponent } from './ajouter-maintenance-preventive/ajouter-maintenance-preventive.component';
import { AjouterOperateurComponent } from './ajouter-operateur/ajouter-operateur.component';
import { AjouterPanneComponent } from './ajouter-panne/ajouter-panne.component';
import { AjouterPieceComponent } from './ajouter-piece/ajouter-piece.component';
import { AjouterPrestataireComponent } from './ajouter-prestataire/ajouter-prestataire.component';
import { EditerPrestataireComponent } from './editer-prestataire/editer-prestataire.component';
import { EditerPieceComponent } from './editer-piece/editer-piece.component';
import { EditerPanneComponent } from './editer-panne/editer-panne.component';
import { EditerOperateurComponent } from './editer-operateur/editer-operateur.component';
import { EditerMaintenancePreventiveComponent } from './editer-maintenance-preventive/editer-maintenance-preventive.component';
import { EditerMachineComponent } from './editer-machine/editer-machine.component';
import { EditerDemandeInterventionComponent } from './editer-demande-intervention/editer-demande-intervention.component';

@NgModule({
  declarations: [MachineComponent, OperateurComponent, MaintenancePreventiveComponent, DemandeInterventionComponent, PieceComponent, PanneComponent, PrestataireComponent, BonEntreePieceComponent, AjouterBonEntreePieceComponent, AjouterDemandeInterventionComponent, AjouterMachineComponent, AjouterMaintenancePreventiveComponent, AjouterOperateurComponent, AjouterPanneComponent, AjouterPieceComponent, AjouterPrestataireComponent, EditerPrestataireComponent, EditerPieceComponent, EditerPanneComponent, EditerOperateurComponent, EditerMaintenancePreventiveComponent, EditerMachineComponent, EditerDemandeInterventionComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,RouterModule
  ]
})
export class MaintenanceModule { }
