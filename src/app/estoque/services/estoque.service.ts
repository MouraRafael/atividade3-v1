import { Injectable } from '@angular/core';
import { ProdutoModel } from '../model/produto.model';

import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor() { }


  cadastro(produto:ProdutoModel){
    produto.id = uuid.v4();

    let estoque:ProdutoModel[] = this.listar();
    estoque.push(produto);

    localStorage.setItem('estoque', JSON.stringify(estoque))

    console.log("\n",produto,localStorage['estoque'])

  }

  listar():ProdutoModel[]{
    let lista = JSON.parse(localStorage.getItem('estoque')!) as ProdutoModel[] ?? [];

    return lista;
  }

  listarPorID(id:string):ProdutoModel{
    const produtos:ProdutoModel[] = this.listar();
    let produto!:ProdutoModel;

    for(let i = 0; i<produtos.length; i++){
      if(produtos[i].id === id){
        produto = produtos[i];
        break
      }
    }
    return produto;
  }

  remover(id:string):void{
    let produtos:ProdutoModel[] = this.listar();

    produtos = produtos.filter(produto => produto.id !== id);

    localStorage.setItem('estoque',JSON.stringify(produtos));
  }
}
