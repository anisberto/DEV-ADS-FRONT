import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './agenda/contatos/contatos.component';
import { HomeComponent } from './navegation/home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "contatos", component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
