import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { EstoqueCategoria } from '../../enums/categoria.enum';
import { EstoqueFornecedores } from '../../enums/fornecedores.enum';
import { produtoModel } from '../../model/produto.model';

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
    nomeProduto:['',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]],
    quantidade:['s',[Validators.required,Validators.pattern(/[0-9]/)]],
    fornecedor:['',[Validators.required]],
    validade:['',[Validators.required]],
    categoria:['',[Validators.required]],

    });
  }


  cadastrar():void{
    const estoque = this.produtoCadastroForm.getRawValue() as produtoModel;
    estoque.id = "asdf";
    console.log(estoque)
  }


  get nomeProduto() { return this.produtoCadastroForm.get("nomeProduto")!}
  get categoria() { return this.produtoCadastroForm.get("categoria") }
}
