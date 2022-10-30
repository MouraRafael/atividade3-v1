export enum EstoqueCategoria{
  CARNES,
  FRUTAS,
  LEGUMES,
  VEGETAIS,
  FRIOS,
  LATICINIOS,
}

export const EstoqueCategoriaLabel = new Map<number,string>([
  [EstoqueCategoria.CARNES,"Carnes"],
  [EstoqueCategoria.FRUTAS,"Frutas"],
  [EstoqueCategoria.LEGUMES,"Legumes"],
  [EstoqueCategoria.VEGETAIS,"Vegetais"],
  [EstoqueCategoria.FRIOS,"Frios"],
  [EstoqueCategoria.LATICINIOS,"Laticínios"],
])
