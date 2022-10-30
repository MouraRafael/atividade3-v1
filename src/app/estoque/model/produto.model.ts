import { EstoqueCategoria } from "../enums/categoria.enum";
export interface ProdutoModel{
  id:string;
  nome:string;
	quantidade:number;
	fornecedor:string;
	validade:Date;
	categoria:EstoqueCategoria;

}
