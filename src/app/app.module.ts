import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './home/cabecalho-home/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { SuculentasComponent } from './suculentas/suculentas.component'
import { RouterModule } from '@angular/router';
import { FolhagensComponent } from './folhagens/folhagens.component';
import { ArvoresEFrutiferasComponent } from './arvores-e-frutiferas/arvores-e-frutiferas.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CabecalhoSuculentasComponent } from './suculentas/cabecalho-suculentas/cabecalho-suculentas.component';
import { Indice1Component } from './suculentas/indice1/indice1.component';
import { Indice2Component } from './suculentas/indice2/indice2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContatoComponent } from './contato/contato.component';
import { FolhagensCabecalhoComponent } from './folhagens/folhagens-cabecalho/folhagens-cabecalho.component';
import { Indice3Component } from './folhagens/indice3/indice3.component';
import { ArvoresCabecalhoComponent } from './arvores-e-frutiferas/arvores-cabecalho/arvores-cabecalho.component';
import { Indice4Component } from './arvores-e-frutiferas/indice4/indice4.component';
import { WishlistCabecalhoComponent } from './wishlist/wishlist-cabecalho/wishlist-cabecalho.component';
import { SemIdComponent } from './sem-id/sem-id.component';
import { SemIdCabecalhoComponent } from './sem-id/sem-id-cabecalho/sem-id-cabecalho.component';
import { GenerosSuculentasComponent } from './generos-suculentas/generos-suculentas.component';
import { EspeciesSuculentasComponent } from './especies-suculentas/especies-suculentas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    SuculentasComponent,
    FolhagensComponent,
    ArvoresEFrutiferasComponent,
    WishlistComponent,
    CabecalhoSuculentasComponent,
    Indice1Component,
    Indice2Component,
    FeedbackComponent,
    ContatoComponent,
    FolhagensCabecalhoComponent,
    Indice3Component,
    ArvoresCabecalhoComponent,
    Indice4Component,
    WishlistCabecalhoComponent,
    SemIdComponent,
    SemIdCabecalhoComponent,
    GenerosSuculentasComponent,
    EspeciesSuculentasComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
