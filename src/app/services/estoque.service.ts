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
    localStorage['estoque'] = JSON.stringify(produto);
    console.log("\n",produto,localStorage['estoque'])

  }
}
