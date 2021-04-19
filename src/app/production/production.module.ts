import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilleComponent } from './components/famille/famille/famille.component';

import { VoirActiviteComponent } from './components/activite/voir-activite/voir-activite.component';
import { VoirBonEntreeFabricationComponent } from './components/bonentreefabrication/voir-bon-entree-fabrication/voir-bon-entree-fabrication.component';
import { VoirFamilleComponent } from './components/famille/voir-famille/voir-famille.component';
import { VoirOfComponent } from './components/of/voir-of/voir-of.component';
import { EditerActiviteComponent } from './components/activite/editer-activite/editer-activite.component';


import { AjouterOfComponent } from './components/of/ajouter-of/ajouter-of.component';
import { AjouterActiviteComponent } from './components/activite/ajouter-activite/ajouter-activite.component';
import { AjouterBonEntreeFabricationComponent } from './components/bonentreefabrication/ajouter-bon-entree-fabrication/ajouter-bon-entree-fabrication.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfComponent } from './components/of/of/of.component';
import { EditerOfComponent } from './components/of/editer-of/editer-of.component';
import { ActiviteComponent } from './components/activite/activite/activite.component';
import { BonEntreeFabricationComponent } from './components/bonentreefabrication/bon-entree-fabrication/bon-entree-fabrication.component';
import { EditerBonEntreeFabricationComponent } from './components/bonentreefabrication/editer-bon-entree-fabrication/editer-bon-entree-fabrication.component';
import { EditerFamilleComponent } from './components/famille/editer-famille/editer-famille.component';
import { AjouterFamilleComponent } from './components/famille/ajouter-famille/ajouter-famille.component';
import { ZoneStockageComponent } from './components/zonestockage/zone-stockage/zone-stockage.component';

@NgModule({
  declarations: [OfComponent, BonEntreeFabricationComponent, FamilleComponent, ActiviteComponent,
    VoirActiviteComponent, VoirBonEntreeFabricationComponent, VoirFamilleComponent, VoirOfComponent,
    EditerActiviteComponent, EditerBonEntreeFabricationComponent,
    EditerFamilleComponent, EditerOfComponent, AjouterOfComponent, AjouterActiviteComponent,
    AjouterBonEntreeFabricationComponent, AjouterFamilleComponent, ZoneStockageComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ]
})
export class ProductionModule { }
