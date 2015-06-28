---
layout: document
title: "Language Specification"
categories: [document]
---

# Nez Language Specification (Version 1.0)

## Grammars

### Productions

A production is a mapping of a nonterminal name `A` into an parsing expression `e`. 

~~~nez
A = e
~~~


## Expressions


### Terminals

* `'abc'` - match the exactly same string `'abc'`
* `.` - match any single byte characters
* `[A-Z]` -- match characters ranging from `'A'` to `'Z'`
* `[Aa]` -- match either `'A'` or `'a'`

### NonTerminals

* NonTerminal
* "string"

### PEG operators

* `e1 e2`
* `e2 / e2`
* `e?`
* `e*`
* `e+`
* `!e`
* `&e`

### AST constructors

{e}
@e
{@ e}
@[e]
#t
`value`

### AST constructors