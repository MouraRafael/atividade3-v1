import { Injectable } from '@angular/core';
import { ProdutoModel } from '../estoque/model/produto.model';

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
}
