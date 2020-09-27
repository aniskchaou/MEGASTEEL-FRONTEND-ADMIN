import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfComponent } from './of/of.component';
import { BonEntreeFabricationComponent } from './bon-entree-fabrication/bon-entree-fabrication.component';
import { FamilleComponent } from './famille/famille.component';
import { ActiviteComponent } from './activite/activite.component';
import { VoirActiviteComponent } from './voir-activite/voir-activite.component';
import { VoirBonEntreeFabricationComponent } from './voir-bon-entree-fabrication/voir-bon-entree-fabrication.component';
import { VoirFamilleComponent } from './voir-famille/voir-famille.component';
import { VoirOfComponent } from './voir-of/voir-of.component';
import { EditerActiviteComponent } from './editer-activite/editer-activite.component';
import { EditerBonEntreeFabricationComponent } from './editer-bon-entree-fabrication/editer-bon-entree-fabrication.component';
import { EditerFamilleComponent } from './editer-famille/editer-famille.component';
import { EditerOfComponent } from './editer-of/editer-of.component';
import { AjouterOfComponent } from './ajouter-of/ajouter-of.component';
import { AjouterActiviteComponent } from './ajouter-activite/ajouter-activite.component';
import { AjouterBonEntreeFabricationComponent } from './ajouter-bon-entree-fabrication/ajouter-bon-entree-fabrication.component';
import { AjouterFamilleComponent } from './ajouter-famille/ajouter-famille.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OfComponent, BonEntreeFabricationComponent, FamilleComponent, ActiviteComponent, VoirActiviteComponent, VoirBonEntreeFabricationComponent, VoirFamilleComponent, VoirOfComponent, EditerActiviteComponent, EditerBonEntreeFabricationComponent, EditerFamilleComponent, EditerOfComponent, AjouterOfComponent, AjouterActiviteComponent, AjouterBonEntreeFabricationComponent, AjouterFamilleComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class ProductionModule { }
