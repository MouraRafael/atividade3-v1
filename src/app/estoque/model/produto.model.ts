import { EstoqueCategoria } from "../enums/categoria.enum";
export interface produtoModel{
  id:string;
  nome:string;
	quantidade:number;
	fornecedor:string;
	validade:Date;
	categoria:EstoqueCategoria;

}
