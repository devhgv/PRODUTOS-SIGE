function initializeTest() {
  sheetRelatorios.clear();

  TestDataSheets.runAllTests(sheetDataProdutos, sheetRelatorios);

  formatCellsBasedOnResult();

}
