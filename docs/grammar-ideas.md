# TYPES
```
Regulative = R Party Deontic [Bool] Regulative | Symbol
Constitutive a = C a [Bool]
Deontic = MUST | MAY | SHANT
Bool = TRUE | FALSE
Event = Constitutive OrderedSymbol
Party = Constitutive Symbol
Symbol
OrderedSymbol
```

- symbols are just identifiers like in prolog
- ordered symbols are symbols that have an order relation with every other ordered symbol (total ordered set)

# CONSTANTS
```
now : Event
```

- now is an input to a realization of a contract referring to an instant in time
# Prim Functions
```
IFR : Regulative -> Bool -> Regulative
IFC : Constitutive -> Bool -> Constituitve
GIVEN : Event -> Bool
UPON : Event -> Bool
BEFORE : Event -> Bool
```

- we need to distinguish the IF that specifies predicates as constraints for a regulative; and IF that is a constructor for a list of predicates forming a constitutive
# SUGAR
```
Action = Regulative

WHENR = UNLESSR = IFR
WHENC = UNLESSC = IFC

WHO : Party -> Bool -> Party
WHO = IFC
WHICH = WHO

AFTER = GIVEN
BY = BEFORE

```

Logical Bool Operators
- and
- or
- not
- xor

Regulative Composition
- And (HENCE)
- Xor (LEST)
- Or (?? does this even make sense)

Event Arithmetic
- After
- before
- within

symbolic binding (constitutive)
- party
- event

# TODO
Quantitative types?
