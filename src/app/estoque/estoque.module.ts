import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button"
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EstoqueService } from './services/estoque.service';
import { ListaComponent } from './components/lista/lista.component';

const materialModules = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatTableModule,
]

@NgModule({
  declarations: [CadastrarComponent, ListaComponent],
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
