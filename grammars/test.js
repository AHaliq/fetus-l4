exports.rules = {
  expression(token, dataObject) {
    dataObject.calculations.push({
      question: token.value,
      answer: eval(token.value)
    });
  }
};

exports.init = {
  calculations: []
};
