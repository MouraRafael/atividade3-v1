import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { EstoqueCategoria } from '../../enums/categoria.enum';
import { EstoqueFornecedores } from '../../enums/fornecedores.enum';
import { ProdutoModel } from '../../model/produto.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  categorias = [
    [EstoqueCategoria.CARNES,"Carnes"],
    [EstoqueCategoria.FRUTAS,"Frutas"],
    [EstoqueCategoria.LEGUMES,"Legumes"],
    [EstoqueCategoria.VEGETAIS,"Vegetais"],
    [EstoqueCategoria.FRIOS,"Frios"],
    [EstoqueCategoria.LATICINIOS,"Laticínio"]
  ]
  fornecedores = [
    [EstoqueFornecedores.JOAO_BARROS,"Frigorífico João Barros"],
    [EstoqueFornecedores.MXS_VEGETAIS, "MxS Vegetais Frescos"],
    [EstoqueFornecedores.FALLIN_IMPORTADOS,"Fall In Importados Ltda."],
    [EstoqueFornecedores.DEMETER_LATICINIOS,"Demeter Laticínios & Mantimentos"]
  ]
  produtoCadastroForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.produtoCadastroForm = this.formBuilder.group({
    nome:['',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]],
    quantidade:['',[Validators.required,Validators.pattern(/[0-9]/)]],
    fornecedor:['',[Validators.required]],
    validade:['',[Validators.required]],
    categoria:['',[Validators.required]],

    });
  }


  cadastrar():void{
    const estoque = this.produtoCadastroForm.getRawValue() as ProdutoModel;
    estoque.id = "asdf";
    console.log(typeof estoque,estoque)
  }


  get nomeProduto() { return this.produtoCadastroForm.get("nome")!}
  get categoria() { return this.produtoCadastroForm.get("categoria") }
}
