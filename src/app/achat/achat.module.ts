import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvaComponent } from './components/tva/tva/tva.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur/fournisseur.component';
import { BonEntreeAchatComponent } from './components/bon-entree-achat/bon-entree-achat/bon-entree-achat.component';
import { CommandeComponent } from './components/commande/commande/commande.component';
import { CommandeFournisseurComponent } from './components/commande-founisseur/commande-fournisseur/commande-fournisseur.component';
import { ArticleComponent } from './components/article/article/article.component';
import { DemandeAchatComponent } from './components/demande-achat/demande-achat/demande-achat.component';
import { AjouterArticleComponent } from './components/article/ajouter-article/ajouter-article.component';
import { AjouterBonEntreeAchatComponent } from './components/bon-entree-achat/ajouter-bon-entree-achat/ajouter-bon-entree-achat.component';
import { AjouterCommandeComponent } from './components/commande/ajouter-commande/ajouter-commande.component';
import { AjouterCommandeFournisseurComponent } from './components/commande-founisseur/ajouter-commande-fournisseur/ajouter-commande-fournisseur.component';
import { AjouterDemandeAchatComponent } from './components/demande-achat/ajouter-demande-achat/ajouter-demande-achat.component';
import { AjouterFournisseurComponent } from './components/fournisseur/ajouter-fournisseur/ajouter-fournisseur.component';
import { AjouterTvaComponent } from './components/tva/ajouter-tva/ajouter-tva.component';
import { VoirArticleComponent } from './components/article/voir-article/voir-article.component';
import { VoirBonEntreeAchatComponent } from './components/bon-entree-achat/voir-bon-entree-achat/voir-bon-entree-achat.component';
import { VoirCommandeComponent } from './components/commande/voir-commande/voir-commande.component';
import { VoirCommandeAchatComponent } from './components/demande-achat/voir-commande-achat/voir-commande-achat.component';
import { VoirCommandeFournisseurComponent } from './components/commande-founisseur/voir-commande-fournisseur/voir-commande-fournisseur.component';
import { VoirTvaComponent } from './components/tva/voir-tva/voir-tva.component';
import { EditerArticleComponent } from './components/article/editer-article/editer-article.component';
import { EditerBonEntreeAchatComponent } from './components/bon-entree-achat/editer-bon-entree-achat/editer-bon-entree-achat.component';
import { EditerCommandeComponent } from './components/commande/editer-commande/editer-commande.component';
import { EditerCommandeFounisseurComponent } from './components/commande-founisseur/editer-commande-founisseur/editer-commande-founisseur.component';
import { EditerDemandeAchatComponent } from './components/demande-achat/editer-demande-achat/editer-demande-achat.component';
import { EditerFournisseurComponent } from './components/fournisseur/editer-fournisseur/editer-fournisseur.component';
import { EditerTvaComponent } from './components/tva/editer-tva/editer-tva.component';

@NgModule({
  declarations: [TvaComponent, FournisseurComponent, BonEntreeAchatComponent,
    CommandeComponent, CommandeFournisseurComponent, ArticleComponent,
    DemandeAchatComponent, AjouterArticleComponent, AjouterBonEntreeAchatComponent,
    AjouterCommandeComponent, AjouterCommandeFournisseurComponent, AjouterDemandeAchatComponent,
    AjouterFournisseurComponent, AjouterTvaComponent, VoirArticleComponent, VoirBonEntreeAchatComponent,
    VoirCommandeComponent, VoirCommandeFournisseurComponent, VoirCommandeAchatComponent,
    VoirCommandeFournisseurComponent, VoirTvaComponent, EditerArticleComponent,
    EditerBonEntreeAchatComponent, EditerCommandeComponent, EditerCommandeFounisseurComponent,
    EditerDemandeAchatComponent, EditerFournisseurComponent, EditerTvaComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, RouterModule
  ]
})
export class AchatModule { }
