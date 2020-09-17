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

@NgModule({
  declarations: [MachineComponent, OperateurComponent, MaintenancePreventiveComponent, DemandeInterventionComponent, PieceComponent, PanneComponent, PrestataireComponent, BonEntreePieceComponent],
  imports: [
    CommonModule
  ]
})
export class MaintenanceModule { }
