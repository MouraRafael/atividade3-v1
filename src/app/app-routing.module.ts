import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './estoque/components/cadastrar/cadastrar.component';
import { ListagemComponent } from './estoque/components/listagem/listagem.component';

const routes: Routes = [
  {
    path:'estoque/cadastro',
    component: CadastrarComponent,
  },
  {
    path:'estoque/listar',
    component: ListagemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
