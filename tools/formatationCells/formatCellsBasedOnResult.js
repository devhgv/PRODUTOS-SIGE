function formatCellsBasedOnResult() {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Relatorios");
  const dataRange = sheet.getDataRange().getValues();
  const headerRow = dataRange[0]; // Cabeçalho

  // Encontrar o índice da coluna que contém a palavra "RESULTADO" e armazenar na variável columnIndex
  const columnIndex = headerRow.findIndex((header) => header === "RESULTADO");

  // Caso na coluna "RESULTADO" seja encontrada ou seja, diferente de -1
  if (columnIndex !== -1) {
    const backgroundColors = [];

    for (let i = 1; i < dataRange.length; i++) {
      // Começando da segunda linha, pois a primeira é o cabeçalho

      // result armazena os valores da coluna onde o index é o encontrado na columnIndex
      const result = dataRange[i][columnIndex];
      let color = null;

      if (result === "APROVADO") {
        color = "#B7E1CD";
      } else if (result === "REPROVADO") {
        color = "#EA9999";
      }

      backgroundColors.push([color]);
    }

    const backgroundRange = sheet.getRange(
      2,
      columnIndex + 1,
      backgroundColors.length,
      1
    ); // +1 para ajustar para a notação base 1
    backgroundRange.setBackgrounds(backgroundColors);
  } else {
    Logger.log("Coluna 'RESULTADO' não encontrada.");
  }
}

function formatCellHeader() {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Produtos");
  const headerRow = sheet.getRange(1, 1, 1, 10); // aqui defino que 10 colunas são necessárias
  headerRow.setBackground("#CCCCCC");
  headerRow.setFontWeight("bold");
}

