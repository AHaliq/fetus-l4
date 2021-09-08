const { Compiler } = require('../node_modules/bnf/Compiler');
const fs = require('fs');

const args = process.argv.splice(2);
const { files, is_bnfc } = args.reduce(({ files, is_bnfc }, c) =>
  c.match(/--b(nfc)?/) ?
    { files, is_bnfc: true } :
    { files: [...files, c], is_bnfc }
, { files: [], is_bnfc: false });

if (is_bnfc) {
  console.error("bnfc compiler not yet implemented");
} else {
  files.map(f => {
    console.log(`Compiling: ${f}`);
    const str = fs.readFileSync(`${f}.bnf`).toString();
    const c = new Compiler();
    c.AddLanguage(str, f);
    const { rules, init, inputs, render } = require(`../${f}.js`);
    c.SetRuleEvents(rules);
    inputs.map(i => {
      const s = {...init};
      c.ParseScript(i, s);
      console.log(render(s));
    });
  });
}
