---
layout: document
title: "Parser Generators"
categories: [document]
---

# Parser Generators

Here is a list of parser generators that are supported by Nez. 

* [CNez[(#CNez)
* [LPeg convertor](#LPeg)

## CNez {#cnez} 

CNez is a parser generator for C/C++.

~~~bash
$ nez cnez -p math.nez > math.c
~~~

#### Limitations:

* No support for AST construction
* ...

## LPeg convertor  {#lpeg}

LPeg converter is a grammar converter that generates a grammar file written in LPeg.

~~~bash
$ nez lpeg -p math.nez > math.lua
~~~

Or, 
~~~bash
$ nez lua -p math.nez > math.lua
~~~

#### Limitations:

* No support for AST construction
* No support for Symbol tables



