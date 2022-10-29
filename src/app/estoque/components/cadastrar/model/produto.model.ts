import { EstoqueCategoria } from "src/app/estoque/enums/categoria.enum";
export interface produtoModel{
  id:string;
  nomeProduto:string;
	quantidade:number;
	fornecedor:string;
	validade:Date;
	categoria:EstoqueCategoria;

}
