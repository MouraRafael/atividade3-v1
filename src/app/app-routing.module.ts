import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './estoque/components/cadastrar/cadastrar.component';

const routes: Routes = [
  {
    path:'estoque/cadastro',
    component: CadastrarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
