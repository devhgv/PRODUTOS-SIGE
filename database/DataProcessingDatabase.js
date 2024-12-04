const DataProcessingDatabase = (function () {
  function getAllProductsSIGE() {
    try {
      return Middleware.getAllProducts();
    } catch (error) {
      Logger.log(errorMessageDataTransferSIGE, `Message: ${error}`);
    }
  }
  return {
    getAllProductsSIGE,
  };
})();
