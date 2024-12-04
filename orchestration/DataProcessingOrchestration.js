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
