function timeTrigger_getAllProducts() {
  sheetProdutos.clear();
  console.log("Dados da planilha resetados");

  DataProcessingOrchestration.processDataProducts();
}
