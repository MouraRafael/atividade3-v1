export enum EstoqueFornecedores{
  JOAO_BARROS,
  MXS_VEGETAIS,
  FALLIN_IMPORTADOS,
  DEMETER_LATICINIOS,
}

export const EstoqueFornecedoresLabel = new Map<number,string>([
  [
    [EstoqueFornecedores.JOAO_BARROS,"Frigorífico João Barros"],
    [EstoqueFornecedores.MXS_VEGETAIS, "MxS Vegetais Frescos"],
    [EstoqueFornecedores.FALLIN_IMPORTADOS,"Fall In Importados Ltda."],
    [EstoqueFornecedores.DEMETER_LATICINIOS,"Demeter Laticínios & Mantimentos"]
  ]
])
