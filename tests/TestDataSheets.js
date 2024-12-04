const TestDataSheets = (function () {
  const moduleProductsName = "Módulo Produtos";
  const dateFormat = new Date().toLocaleDateString();

  function toBe(module, nametest, actual, expected, dataAtual) {
    if (actual !== expected) {
      return [
        module,
        nametest,
        Session.getActiveUser().getEmail(),
        dataAtual,
        "REPROVADO",
      ];
    }
    return [
      module,
      nametest,
      Session.getActiveUser().getEmail(),
      dataAtual,
      "APROVADO",
    ];
  }

  function toBeTruthy(module, nametest, condition, dataAtual) {
    return condition
      ? [module, nametest, Session.getActiveUser().getEmail(), dataAtual, "APROVADO"]
      : [module, nametest, Session.getActiveUser().getEmail(), dataAtual, "REPROVADO"];
  }

  function runAllTests(sheetDataProdutos, sheetRelatorios) {
    const titlesTestsColumns = ["MÓDULO", "DESCRIÇÃO", "DEV RESPONSÁVEL", "DATA", "RESULTADO"];
    let testResults = [];

    // Testar dados carregados
    testResults.push(
      toBeTruthy(
        moduleProductsName,
        "Dados de produtos carregados",
        sheetDataProdutos.length > 0,
        dateFormat
      )
    );

    // Testar IDs
    const produtosComID = sheetDataProdutos.filter((produto) => produto[0] !== "");
    testResults.push(
      toBe(
        moduleProductsName,
        "Todos os produtos têm um ID",
        produtosComID.length,
        sheetDataProdutos.length,
        dateFormat
      )
    );

    // Adicionar resultados à planilha
    const insertTitlesTests = sheetRelatorios.getLastRow() + 1;
    sheetRelatorios.getRange(insertTitlesTests, 1, 1, titlesTestsColumns.length).setValues([titlesTestsColumns]);

    sheetRelatorios
      .getRange(insertTitlesTests + 1, 1, testResults.length, titlesTestsColumns.length)
      .setValues(testResults);

    return testResults;
  }

  return { runAllTests };
})();
