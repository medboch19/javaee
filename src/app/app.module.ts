import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatComponent } from './candidat/candidat.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import {FormsModule} from '@angular/forms';
import { NewCandidatComponent } from './new-condidat/new-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { DossierComponent } from './dossier/dossier.component';
import { NewDossierComponent } from './new-dossier/new-dossier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DefinitionComponent } from './definition/definition.component';
import { UnitedeValeurComponent } from './unitede-valeur/unitede-valeur.component';
import { NewUnitesComponent } from './new-unites/new-unites.component';
const appRoutes: Routes=[
  
  { path: 'new-candidat' , component : NewCandidatComponent },

  { path: 'candidat' , component : CandidatComponent },

  { path: 'definition' , component : DefinitionComponent },

  { path: 'new-dossier' , component : NewDossierComponent },

  { path: 'new-unites' , component : NewUnitesComponent  },

    { path: '',redirectTo:'/candidats', pathMatch :'full' }
];

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    CandidatComponent,
    NewCandidatComponent,
    EditCandidatComponent,
    DossierComponent,
    NewDossierComponent,
    FooterComponent,
    DefinitionComponent,
    UnitedeValeurComponent,
    NewUnitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
