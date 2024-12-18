function initializeTest() {
  sheetRelatorios.clear();
  Logger.log("Limpeza da planilha de relatórios realizada");

  TestDataSheets.runAllTests(sheetDataProdutos, sheetRelatorios);
  Logger.log("Testes executados");

  formatCellsBasedOnResult();
  Logger.log("Formato das células do relatório atualizado");
}
