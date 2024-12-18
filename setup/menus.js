function normalMenu() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui
    .createMenu("Menu Produtos")
    .addItem("Sobre", "modalAboutProducts")
    .addSeparator()
    .addItem("Atualizar", "timeTrigger_getAllProducts")
  menu.addToUi();
}

function devMenu() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui
    .createMenu("Menu Testes")
    .addItem("Sobre", "modalAboutTests")
    .addSeparator()
    .addItem("Testar módulo", "initializeTest")
  menu.addToUi();
}
