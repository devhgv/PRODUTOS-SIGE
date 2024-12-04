// Variáveis globais
const sheetDevUrl = "18JLFi01Nd454iZ7MoYejVncIcrT3ajCtScfoENugC58";
const sheetProdUrl = "1TBbL5O4-q_CIYu0ALZ2RDwf_ILYW1iwRNS5qcvZL-9A";
const adminEmail = [
  "tech.hgv@gmail.com",
  "portoreal.especiarias@gmail.com",
];
const emailDestiny = ["tech.hgv@gmail.com","Hgvportoreal@gmail.com","portoreal.especiarias@gmail.com"];
const emailTopic = "Informações SIGE faltando ou incorretas";
const emailMessage =
  "Um ou mais campos de valores primordiais estão vazios na planilha Produtos.";

// Nomes das planilhas/módulo
const moduleProductsName = "Produtos";
const sheetProdutos =
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Produtos");
const sheetRelatorios =
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Relatorios");

// Dados de planilhas
const dateFormat = getLocalDate();
const sheetDataProdutos = sheetProdutos.getDataRange().getValues();
const sheetDataRelatorios = sheetRelatorios.getDataRange().getValues();
const sheetHeaderProdutos = sheetDataProdutos.shift();

// Mensagens de erros
const errorMessageNullValues =
  "Nenhum campo primordial da requisição está vazio.";
const errorMessageNullVariations =
  "Todas as chaves VariacoesProduto têm valor nulo";
const errorMessageNullValuesVariations =
  "Pelo menos um valor da propriedade VariacoesProduto não tem valor nulo";
const errorMessageDataTransferDatabase =
  "Erro ao obter retorno da camada database";
const errorMessageDataTransferSIGE = "Erro ao obter retorno do Middleware";
const errorMessageDataTransferLogic = "Erro ao obter retorno da camada logic";
