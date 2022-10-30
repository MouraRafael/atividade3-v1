import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button"

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const materialModules = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [CadastrarComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ...materialModules,
  ],
  exports: [CadastrarComponent]
})
export class EstoqueModule { }
