function timeTrigger_getAllProducts() {
  
  sheetProdutos.clear();
  console.log("Dados da planilha resetados");

  // Atualiza os dados dos produtos
  DataProcessingOrchestration.processDataProducts();
   formatCellHeader();
  // Executa os testes do relatório após os dados serem atualizados
  initializeTest();

  console.log("Testes do relatório executados com sucesso!");
}
