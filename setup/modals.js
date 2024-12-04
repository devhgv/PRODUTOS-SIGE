// VARIÁVEIS DE TÍTULOS E MENSAGENS MODAIS
const titleModalAboutProducts = "Sobre o módulo de Produtos";
const titleModalAboutTests = "Sobre o relatório de Testes";
const messageModalAbout =
  "Este módulo tem como propósito fornecer dados sobre os produtos. Espera-se que este módulo faça uma requisição dos dados dos produtos e que todos sejam renderizados corretamente na planilha. Não se espera que nenhum dado esteja incorreto, mas é possível que alguns valores sejam de fatos nulos ou vazios.";
const messageModalAboutTests = 'Este relatório tem como propósito fornecer os resultados dos testes do módulo de produtos. Espera-se que os testes forneçam resultados satisfatórios, de preferência a coluna Resultados deve possuir todos os valores APROVADOS';

// FUNCÕES MODAIS
function modalAboutProducts() {
  const ui = SpreadsheetApp.getUi();
  ui.alert(titleModalAboutProducts, messageModalAbout, ui.ButtonSet.OK);
}

function modalAboutTests() {
  const ui = SpreadsheetApp.getUi();
  ui.alert(titleModalAboutTests, messageModalAboutTests, ui.ButtonSet.OK);
}