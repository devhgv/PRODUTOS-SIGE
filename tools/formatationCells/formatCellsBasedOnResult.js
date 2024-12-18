function formatCellsBasedOnResult() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Relatorios");
  const dataRange = sheet.getDataRange().getValues();
  const headerRow = dataRange[0]; // Cabeçalho

  // Encontrar o índice da coluna que contém a palavra "RESULTADO" e armazenar na variável columnIndex
  const columnIndex = headerRow.findIndex((header) => header === "RESULTADO");

  if (columnIndex !== -1) {
    const backgroundColors = [];

    for (let i = 1; i < dataRange.length; i++) {
      const result = dataRange[i][columnIndex];
      let color = null;

      if (result === "APROVADO") {
        color = "#B7E1CD"; // Cor para aprovado
      } else if (result === "REPROVADO") {
        color = "#EA9999"; // Cor para reprovado
      }

      backgroundColors.push([color]);
    }

    const backgroundRange = sheet.getRange(
      2,
      columnIndex + 1,
      backgroundColors.length,
      1
    );
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

