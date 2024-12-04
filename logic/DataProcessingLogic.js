const DataProcessingLogic = (function (database) {
function getDataSIGE() {
  try {
    // Irá ler a API
    const dataSheets = Middleware.getAllProducts();

    // Deixará apenas as colunas necessárias
    const filteredData = dataSheets.map(product => ({
      ID: product.ID,
      UltimaAlteracao: product.UltimaAlteracao,
      Categoria: product.Categoria,
      Marca: product.Marca,
      Fornecedor: product.Fornecedor,
      Codigo: product.Codigo,
      Ean: product.Ean,
      Pratileira: product.Pratileira,
      NumeroSerie: product.NumeroSerie,
      Nome: product.Nome,
    }));

    // Processa os dados necessários
    const cleanedDataSheets = getDataCleaned(filteredData);
    const checkedDataSheets = getDataChecked(cleanedDataSheets);

    // Insere os dados na planilha
    setDataSheets(checkedDataSheets, dataSheets);
    addLastUpdateColumn();

    return filteredData;
  } catch (error) {
    Logger.log(errorMessageDataTransferSIGE, `Message: ${error}`);
  }
}


  function sendEmailToAdmin() {
    const emailsToSend = emailDestiny.join(", ");
    GmailApp.sendEmail(emailsToSend, emailTopic, emailMessage);
  }

  function getDataCleaned(products) {
    console.log("CHECANDO VALORES VAZIOS");
    const emptyData = products.some((prod) => {
      prod.Nome === "" ||
        prod.PesoKG === "" ||
        prod.PrecoMinimoVenda === "" ||
        prod.PrecoVenda === "";
    });
    if (emptyData) {
      sendEmailToAdmin();
    } else {
      Logger.log("TODOS OS VALORES PRIMORDAIS ESTÃO COMPLETOS");
    }
    return products;
  }

  function getDataChecked(products) {
    console.log("CHECANDO VARIAÇÕES NULAS");
    const allVariationsNull = products.every((prod) => {
      if (prod.VariacoesProduto) {
        return prod.VariacoesProduto.every(
          (variacao) =>
            variacao.Codigo === null &&
            variacao.PrecoCusto === null &&
            variacao.PrecoVenda === null
        );
      }
      return true; // Se não houver variações, considere como válido
    });
    if (allVariationsNull) {
      Logger.log(errorMessageNullVariations);
    } else {
      Logger.log(errorMessageNullValuesVariations);
    }
    return products; // Retorna os produtos após a verificação
  }


function setupHeaders() {
  console.log("CONFIGURANDO OS CABEÇALHOS");
  const headers = [
    "ID",
    "UltimaAlteracao",
    "Categoria",
    "Marca",
    "Fornecedor",
    "Codigo",
    "Ean",
    "Pratileira",
    "NumeroSerie",
    "Nome",
  ];

  const insertTitles = sheetProdutos.getLastRow() + 1;
  const inputTitle = sheetProdutos.getRange(insertTitles, 1, 1, headers.length);
  inputTitle.setValues([headers]);
}

  function setupValues(productsJson) {
  console.log("CONFIGURANDO OS DADOS");
  const valuesMatrix = productsJson.map(product => [
    product.ID,
    product.UltimaAlteracao,
    product.Categoria,
    product.Marca,
    product.Fornecedor,
    product.Codigo,
    product.Ean,
    product.Pratileira,
    product.NumeroSerie,
    product.Nome,
  ]);

  const numColumns = valuesMatrix[0].length;
  const insertValues = sheetProdutos.getLastRow() + 1;
  const inputValue = sheetProdutos.getRange(
    insertValues,
    1,
    valuesMatrix.length,
    numColumns
  );
  inputValue.setValues(valuesMatrix);
}

  function setDataSheets(precoVendasRegioes, dataSheets) {
    setupHeaders(precoVendasRegioes, dataSheets);
    setupValues(precoVendasRegioes, dataSheets);
  }

  function addLastUpdateColumn() {
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Produtos");
    const lastColumn = sheet.getLastColumn() + 1; // Obtém o número da última coluna

    const lastUpdateTitle = "ÚltimaAtualização";
    sheet.getRange(1, lastColumn).setValue(lastUpdateTitle);

    const currentDatetime = new Date();
    const formattedDatetime = Utilities.formatDate(
      currentDatetime,
      Session.getScriptTimeZone(),
      "dd/MM/yyyy HH:mm:ss"
    );

    const numRows = sheet.getLastRow() - 1; // Subtrai 1 para não incluir a linha do cabeçalho
    const dateValues = new Array(numRows).fill([formattedDatetime]);

    const dataRange = sheet.getRange(2, lastColumn, numRows, 1);
    dataRange.setValues(dateValues);
  }

  return {
    getDataSIGE,
  };
})(DataProcessingDatabase);
