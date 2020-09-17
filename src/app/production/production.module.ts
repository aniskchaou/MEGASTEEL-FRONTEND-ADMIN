import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfComponent } from './of/of.component';
import { BonEntreeFabricationComponent } from './bon-entree-fabrication/bon-entree-fabrication.component';
import { FamilleComponent } from './famille/famille.component';
import { ActiviteComponent } from './activite/activite.component';

@NgModule({
  declarations: [OfComponent, BonEntreeFabricationComponent, FamilleComponent, ActiviteComponent],
  imports: [
    CommonModule
  ]
})
export class ProductionModule { }
