import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button"
import { MatSelectModule } from "@angular/material/select";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EstoqueService } from './services/estoque.service';
import { ListagemComponent } from './components/listagem/listagem.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [CadastrarComponent, ListagemComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ...materialModules,
  ],
  exports: [CadastrarComponent],
  providers:[EstoqueService]
})
export class EstoqueModule { }
