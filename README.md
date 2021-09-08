# fetus-l4

currently the repo has a general framework to accept multiple grammars

this is so that we can iterate multiple grammars and test them rapidly while designing fetus-l4

```
npm i
npm run compile -- grammars/test
```

## defining grammars

- define a grammar in `grammars/` dir
- each grammar has to have the same name e.g. test will have `test.bnf` and `test.js`
- js files needs to export:
    - `rules`: the object argument for `c.SetRuleEvents`
    - `init`: the initial state object used when parsing
    - `inputs`: list of strings to be used as input to parse
    - `render`: a function that takes in the state object and outputs a string

## BNFC support

- eventually we can run `npm run compile -- --bnfc grammars/g1 grammars/g2`
- to make parsers from bnfc format files e.g. `test.cf`
- currently this is not supported
