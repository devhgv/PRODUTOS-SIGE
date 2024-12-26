const DataProcessingOrchestration = (function (business) {
  function processDataProducts() {
    try {
      const result = business.getDataSIGE();
      return result;
    } catch (error) {
      Logger.log(errorMessageDataTransferLogic, `Message: ${error}`);
    }
  }
  return {
    processDataProducts,
  };
})(DataProcessingLogic);

function createTimeTrigger() {
  // Cria o gatilho para rodar a função timeTrigger_getAllProducts todos os dias.
  ScriptApp.newTrigger('timeTrigger_getAllProducts')
    .timeBased()
    .everyDays(1)
    .atHour(7) // Configura para rodar às 07:00 horas da manhã
    .create();
}
