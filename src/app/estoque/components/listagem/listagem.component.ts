import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { MatTableDataSource } from "@angular/material/table";
import { DomSanitizer } from '@angular/platform-browser';
import { ProdutoModel } from '../../model/produto.model';
import { EstoqueService } from '../../services/estoque.service';
import { EstoqueCategoriaLabel } from "../../enums/categoria.enum";
import { EstoqueFornecedoresLabel } from '../../enums/fornecedores.enum';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  produtos!:ProdutoModel[];
  displayedColumns: string[] = ['nome','quantidade','fornecedor','validade','categoria','editar','remover'];

  dataSource!:MatTableDataSource<ProdutoModel>;

  clickedRow!:ProdutoModel;

  constructor(private estoqueService:EstoqueService) { }

  ngOnInit(): void {
    this.produtos = this.estoqueService.listar();
    this.dataSource = new MatTableDataSource(this.produtos);
    console.log(this.produtos,this.dataSource)
  }

  listar():ProdutoModel[]{
    return this.produtos;
  }





  estoqueCategoriaLabel(id:number):string{
    return EstoqueCategoriaLabel.get(id)!;
  }
  estoqueFornecedorLabel(id:number):string{
    return EstoqueFornecedoresLabel.get(id)!;
  }
}
