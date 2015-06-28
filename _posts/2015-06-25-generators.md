---
layout: document
title: "Generators"
categories: [document]
---


# Parser Generators



## CNez

CNez is a parser generator for C/C++.

~~~bash
$ nez cnez -p math.nez > math.c
~~~

#### Limitations:

Known limitations are:

* no support for AST construction
* ...

## LPeg convertor

LPeg converter is a grammar converter that generates a grammar file written in LPeg.

~~~bash
$nez lpeg -p math.nez > math.lua
~~~



