import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScriptsComponent } from './shared/scripts/scripts.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuComponent,
    FooterComponent,
    ScriptsComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
