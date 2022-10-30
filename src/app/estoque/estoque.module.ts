import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';



@NgModule({
  declarations: [CadastrarComponent],
  imports: [
    CommonModule,
  ],
  exports: [CadastrarComponent]
})
export class EstoqueModule { }
