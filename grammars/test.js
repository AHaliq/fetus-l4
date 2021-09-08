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

exports.inputs = [
`
1 + 234
193 - 1233
4.32 * 24
`.trim(),
"1 + 234"
];

exports.render = x => x.calculations
  .map(({question, answer}) => `${question} = ${answer}`)
  .reduce((a, c, i) => `${a}\nQ${i}: ${c}`, "");
