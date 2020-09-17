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

@NgModule({
  declarations: [TvaComponent, FournisseurComponent, BonEntreeAchatComponent, CommandeComponent, CommandeFournisseurComponent, ArticleComponent, DemandeAchatComponent, AjouterArticleComponent, AjouterBonEntreeAchatComponent, AjouterCommandeComponent, AjouterCommandeFournisseurComponent, AjouterDemandeAchatComponent, AjouterFournisseurComponent, AjouterTvaComponent],
  imports: [
    CommonModule
  ]
})
export class AchatModule { }
