import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './agenda/contato/contato.component';
import { ContatosComponent } from './agenda/contatos/contatos.component';
import { HomeComponent } from './navegation/home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "contatos", component: ContatosComponent},
  {path:"cadastrarContato",component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
