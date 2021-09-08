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


Logical Bool Operators

```
and : Bool -> Bool -> Bool
or : Bool -> Bool -> Bool
not : Bool -> Bool
xor : Bool -> Bool -> Bool
```

Event Arithmetic
```
event_after : Event -> Event
event_before : Event -> Event
event_within : Event -> Event -> Event
```

- design the totally ordered set of OrderedSymbols

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

# TODO

Regulative Composition
```
HENCE : Regulative -> Regulative -> Regulative
-- AND compose two regulatives
LEST : Regulative -> Regulative -> Regulative
-- XOR compose two regulatives

-- Or (?? does this even make sense or exists)
```

- will need some new type or update Regulative

symbolic binding (constitutive variables)
- party
- event

Quantitative types
- partially ordered set of quantitative symbols
- functions that map quantitative symbols to Bool

Integer types
- choose i out of n predicates
- ?? do we need arithmetic ??
