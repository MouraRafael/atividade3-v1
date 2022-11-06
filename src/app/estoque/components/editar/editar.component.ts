import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstoqueCategoria } from '../../enums/categoria.enum';
import { EstoqueFornecedores } from '../../enums/fornecedores.enum';
import { ProdutoModel } from '../../model/produto.model';
import { EstoqueService } from '../../services/estoque.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
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



  itemEstoque!:ProdutoModel;
  produtoEditarForm!:FormGroup;


  constructor(
    private estoqueService: EstoqueService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.itemEstoque = this.estoqueService.localizarPorID(id);

    this.produtoEditarForm = this.formBuilder.group({
      nome:[this.itemEstoque.nome,[Validators.required,Validators.pattern(/^[a-zA-Z]/)]],
      quantidade:[this.itemEstoque.quantidade,[Validators.required,Validators.pattern(/[0-9]/)]],
      fornecedor:[this.itemEstoque.fornecedor,[Validators.required]],
      validade:[this.itemEstoque.validade,[Validators.required]],
      categoria:[this.itemEstoque.categoria,[Validators.required]],

      })
  }


  editar(){
    this.itemEstoque.nome = this.produtoEditarForm.get("nome")!.value;
    this.itemEstoque.quantidade = this.produtoEditarForm.get("quantidade")!.value;
    this.itemEstoque.fornecedor = this.produtoEditarForm.get("fornecedor")!.value;
    this.itemEstoque.validade = this.produtoEditarForm.get("validade")!.value;
    this.itemEstoque.categoria = this.produtoEditarForm.get("categoria")!.value;

    this.estoqueService.editar(this.itemEstoque)
  }

  get nomeProduto() {return this.produtoEditarForm.get("nome")!}
  get categoria() {return this.produtoEditarForm.get("categoria")!}

}
