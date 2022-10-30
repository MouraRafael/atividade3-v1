import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../../model/produto.model';
import { EstoqueService } from '../../services/estoque.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  produtos!:ProdutoModel[];

  constructor(private estoqueService:EstoqueService) { }

  ngOnInit(): void {
    this.produtos = this.estoqueService.listar();

  }

  listar():ProdutoModel[]{
    return this.produtos;
  }

  remover(id:string):void{
    this.estoqueService.remover(id);
  }


  editar():void{}
}
