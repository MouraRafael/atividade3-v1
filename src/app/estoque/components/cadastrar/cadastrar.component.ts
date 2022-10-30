import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { EstoqueCategoria } from '../../enums/categoria.enum';
import { produtoModel } from '../../model/produto.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  categorias = [
    [EstoqueCategoria.BERMUDAS,"Bermudas"],
    [EstoqueCategoria.CALCAS,"Calças"],
    [EstoqueCategoria.CAMISAS,"Camisas"],
    [EstoqueCategoria.CAMISETAS,"Camisetas"],
    [EstoqueCategoria.SAPATOS,"Sapatos"],
    [EstoqueCategoria.SHORTS,"Shorts"]
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
}
