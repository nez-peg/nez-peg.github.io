---
layout: document
title: "Nez Language Specification"
categories: [document]
---

# Nez Language Specification (version 1.0)

## Grammars

### Productions

A production is a mapping of a nonterminal name `A` into an parsing expression `e`. 

~~~nez
A = e
~~~


## Expressions



### Terminals

'abc' - match the exactly same string
. - match any single byte characters
[A-Z] -- match characters ranging over 'A' to 'Z'
[Aa] -- match either 'A' or 'a'

### NonTerminals

NonTerminal
"string"

### PEG operators

e e
e / e
e?
e*
e+
!e
&e

### AST constructors

{e}
@e
{@ e}
@[e]
#t
`value`

### AST constructors