---
layout: default
title: "Nez Language Specification"
categories: [document]
---

# Nez Language Specification (Version 1.0)


## Table of Contents

* [Productions](#Production)
* [Expressions](#Expression)


## Productions {#Production}

A production is a mapping of a nonterminal name `A` into an parsing expression `e`.

~~~nez
A = e
~~~

## Expressions {#Expression}


### Terminals

* `'abc'` - match the exactly same string `'abc'`
* `.` - match any single byte characters
* `[A-Z]` - match characters ranging from `'A'` to `'Z'`
* `[Aa]` - match either `'A'` or `'a'`

### NonTerminals

* NonTerminal
* `"string"`

### PEG operators

* `e1 e2`- sequence
* `e2 / e2` - choice
* `e?` - option
* `e*` - repetition
* `e+` - one more repetition (`e e*`)
* `&e` - and lookahead predicate
* `!e` - not lookahead predicate

### AST constructors {#ast}

* `{e}` - creating a new node with capturing a substring that is matched with `e`.
* `@e` - linking a child node that is constructed with `e` to the left node
* `{@ e}`
* `#Tag` - tagging `#Tag` to the left node
* `str` - replacing a captured string of the left node with the specified string `str`

### Symbol table {#symbols}

(TBA)
