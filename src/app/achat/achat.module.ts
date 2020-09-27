import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvaComponent } from './tva/tva.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { BonEntreeAchatComponent } from './bon-entree-achat/bon-entree-achat.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { ArticleComponent } from './article/article.component';
import { DemandeAchatComponent } from './demande-achat/demande-achat.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { AjouterBonEntreeAchatComponent } from './ajouter-bon-entree-achat/ajouter-bon-entree-achat.component';
import { AjouterCommandeComponent } from './ajouter-commande/ajouter-commande.component';
import { AjouterCommandeFournisseurComponent } from './ajouter-commande-fournisseur/ajouter-commande-fournisseur.component';
import { AjouterDemandeAchatComponent } from './ajouter-demande-achat/ajouter-demande-achat.component';
import { AjouterFournisseurComponent } from './ajouter-fournisseur/ajouter-fournisseur.component';
import { AjouterTvaComponent } from './ajouter-tva/ajouter-tva.component';
import { VoirArticleComponent } from './voir-article/voir-article.component';
import { VoirBonEntreeAchatComponent } from './voir-bon-entree-achat/voir-bon-entree-achat.component';
import { VoirCommandeComponent } from './voir-commande/voir-commande.component';
import { VoirCommandeFounisseurComponent } from './voir-commande-founisseur/voir-commande-founisseur.component';
import { VoirCommandeAchatComponent } from './voir-commande-achat/voir-commande-achat.component';
import { VoirCommandeFournisseurComponent } from './voir-commande-fournisseur/voir-commande-fournisseur.component';
import { VoirTvaComponent } from './voir-tva/voir-tva.component';
import { EditerArticleComponent } from './editer-article/editer-article.component';
import { EditerBonEntreeAchatComponent } from './editer-bon-entree-achat/editer-bon-entree-achat.component';
import { EditerCommandeComponent } from './editer-commande/editer-commande.component';
import { EditerCommandeFounisseurComponent } from './editer-commande-founisseur/editer-commande-founisseur.component';
import { EditerDemandeAchatComponent } from './editer-demande-achat/editer-demande-achat.component';
import { EditerFournisseurComponent } from './editer-fournisseur/editer-fournisseur.component';
import { EditerTvaComponent } from './editer-tva/editer-tva.component';

@NgModule({
  declarations: [TvaComponent, FournisseurComponent, BonEntreeAchatComponent, CommandeComponent, CommandeFournisseurComponent, ArticleComponent, DemandeAchatComponent, AjouterArticleComponent, AjouterBonEntreeAchatComponent, AjouterCommandeComponent, AjouterCommandeFournisseurComponent, AjouterDemandeAchatComponent, AjouterFournisseurComponent, AjouterTvaComponent, VoirArticleComponent, VoirBonEntreeAchatComponent, VoirCommandeComponent, VoirCommandeFounisseurComponent, VoirCommandeAchatComponent, VoirCommandeFournisseurComponent, VoirTvaComponent, EditerArticleComponent, EditerBonEntreeAchatComponent, EditerCommandeComponent, EditerCommandeFounisseurComponent, EditerDemandeAchatComponent, EditerFournisseurComponent, EditerTvaComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,RouterModule
  ]
})
export class AchatModule { }
