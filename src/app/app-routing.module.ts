import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './estoque/components/cadastrar/cadastrar.component';
import { ListaComponent } from './estoque/components/lista/lista.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'estoque/lista',
    pathMatch: 'full'
  },
  {
    path:'estoque/cadastro',
    component: CadastrarComponent,
  },
  {
    path:'estoque/lista',
    component: ListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
