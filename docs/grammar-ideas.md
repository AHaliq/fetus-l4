# TYPES
```
Regulatives = HENCE Regulative Regulatives | LEST Regulative Regulatives | ONLY Regulative
Regulative = R (Maybe Party) Deontic [Bool] Regulatives | Action
Constitutive = C [Bool]
Deontic = MUST | MAY | SHANT
Bool = TRUE | FALSE
```

- If `Nothing` is specified for a `Regulative` term, it means the party it is referring to is inherited when it is used in a `Regulatives` expression

# CONSTANTS
```
now : Event
```

- now is an input to a realization of a contract referring to an instant in time
# Prim Functions
```
IFR : Regulative -> Bool -> Regulative
IFC : Constitutive -> Bool -> Constituitve
```

- we need to distinguish the IF that specifies predicates as constraints for a regulative; and IF that is a constructor for a list of predicates forming a constitutive


Logical Bool Operators

```
and : Bool -> Bool -> Bool
or : Bool -> Bool -> Bool
not : Bool -> Bool
xor : Bool -> Bool -> Bool
```

Event Comparison
```
(<) : Event -> Event -> Bool
(>) : Event -> Event -> Bool
(=) : Event -> Event -> Bool
within : Event -> Event -> Event -> Bool
```

- the user will need to define the function `(<)` on all Events defined in the contract where predicates involving them are needed

Event Comparison to now

```
GIVEN : Event -> Bool
UPON : Event -> Bool
BEFORE : Event -> Bool
```

Create Events Relative to another
```
event_after : Event -> Event
event_before : Event -> Event
event_within : Event -> Event -> Event
```

Regulative Composition
```
hence : Regulatives -> Regulatives -> Regulatives
-- AND compose two regulatives
lest : Regulatives -> Regulatives -> Regulatives
-- XOR compose two regulatives
```


# SUGAR
```
Event = Constitutive
Party = Constitutive

WHENR = UNLESSR = IFR
WHENC = UNLESSC = IFC

WHO : Party -> Bool -> Party
WHO = IFC
WHICH = WHO

AFTER = GIVEN
BY = BEFORE
```

# Variables

- variables are identifiers bound to some value or user input
- we have variables for:
    - Constitutive ( Party, Event )
    - Regulatives
    - Bool         ( Predicates, Constraints )

# TODO

Quantitative types
- partially ordered set of quantitative symbols
- functions that map quantitative symbols to Bool

Integer types
- choose i out of n predicates
- ?? do we need arithmetic ??

Definition hierarchy
- some sort of module system that automatically names variables (e.g. 1.1.2, 3.4.1.6)
