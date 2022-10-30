import { EstoqueCategoria } from "../enums/categoria.enum";
import { EstoqueFornecedores } from "../enums/fornecedores.enum";
export interface ProdutoModel{
  id:string;
  nome:string;
	quantidade:number;
	fornecedor:EstoqueFornecedores;
	validade:Date;
	categoria:EstoqueCategoria;

}
