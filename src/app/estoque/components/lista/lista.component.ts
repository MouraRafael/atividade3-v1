import { Component, OnInit } from '@angular/core';
import { EstoqueFornecedoresLabel } from '../../enums/fornecedores.enum';
import { EstoqueCategoriaLabel } from '../../enums/categoria.enum';
import { ProdutoModel } from '../../model/produto.model';
import { EstoqueService } from '../../services/estoque.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  produtos!:ProdutoModel[];
  displayedColumns:string[] =  ['nome','quantidade', 'fornecedor', 'validade','categoria','editar','remover']
  dataSource!:MatTableDataSource<ProdutoModel>;
  clickedRows!:ProdutoModel;


  constructor(private estoqueService:EstoqueService) { }

  ngOnInit(): void {
    this.produtos = this.estoqueService.listar();
    this.dataSource = new MatTableDataSource(this.produtos);
    console.log(this.produtos,this.dataSource)
  }

  listar():ProdutoModel[]{
    return this.produtos;
  }

  remover(id:string):void{
    this.estoqueService.remover(id);
  }


  editar(id:string):void{}


  /***********Labels */
  estoqueFornecedoresLabel(fornecedor:number){
    return EstoqueFornecedoresLabel.get(fornecedor)!;
  }
  estoqueCategoriaLabel(categoria:number){
    return EstoqueCategoriaLabel.get(categoria)!;
  }
}
