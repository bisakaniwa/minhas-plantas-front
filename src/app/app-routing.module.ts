import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArvoresEFrutiferasComponent } from './arvores-e-frutiferas/arvores-e-frutiferas.component';
import { ContatoComponent } from './contato/contato.component';
import { FolhagensComponent } from './folhagens/folhagens.component';
import { GenerosSuculentasComponent } from './generos-suculentas/generos-suculentas.component';
import { HomeComponent } from './home/home.component';
import { SemIdComponent } from './sem-id/sem-id.component';
import { SuculentasComponent } from './suculentas/suculentas.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'suculentas', component: SuculentasComponent },
  { path: 'folhagens', component: FolhagensComponent },
  { path: 'arvores-e-frutiferas', component: ArvoresEFrutiferasComponent },
  { path: 'sem-id', component: SemIdComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'genero-suculentas', component: GenerosSuculentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
