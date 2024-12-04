function getLocalDate() {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false, // Use o formato 24 horas
  };

  const localDate = new Date().toLocaleString(undefined, options);
  return localDate;
}

// Função para formatar o valor monetário
function formatMonetaryValue(value) {
  return value.replace(",", ".");
}

// Função para verificar se uma string é um JSON
function isValidJSONString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    console.error("JSON parse error: ", e);
    return false;
  }
  return true;
}
