import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoModel } from '../../model/produto.model';
import { EstoqueService } from '../../services/estoque.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  itemEstoque!:ProdutoModel;

  constructor(
    private estoqueService: EstoqueService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.itemEstoque = this.estoqueService.localizarPorID(id);
  }

}
