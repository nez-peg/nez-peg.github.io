---
layout: default
title: "Getting Started"
categories: [document]
---

# Getting Started

For this introduction we assume that you have already installed java8 (jre) on MacOS X or other Unix-based operating system.

## Installation

To use the nez command, download the `nez.jar` file:

~~~bash
curl -O http://nez-peg.github.io/download/nez.jar
sudo cp nez.jar /usr/local/lib/nez.jar
alias nez='java -jar /usr/local/lib/nez.jar'
alias inez='java -jar /usr/local/lib/nez.jar shell'
~~~

Also, it is good idea to put the alias setting in your .bash_profile or something like it. 

To test the installation, enter the `nez` command and check the version: 

~~~
$ nez
inez
Nez-1.0-892 (beta) on Java JVM-1.8.0_05
Copyright (c) 2014-2016, Kimio Kuramitsu and Nez project authors

~~~


## Nez Grammar at a Glance

Nez grammar describes both syntactic constructs for the input and data structures for the output. 

The syntactic part is based on [parsing expression grammars](https://en.wikipedia.org/wiki/Parsing_expression_grammar). 

~~~
Expression = Sum
Sum = Product (( '+' / '-' ) Product )*
Product = Value (( '*' / '/' ) Value)*
Value = [0-9]+ / '(' Expression ')'
~~~

The data structure part can be specified by the Nez original notations such as `{ }` and `$( )`. 

~~~nez
Expression = Sum
Sum = Product {$left ( '+' #Add / '-' #Sub ) $right(Product) }*
Product = Value {$left ( '*' #Mul / '/' #Div ) $right(Value) }*
Value = { [0-9]+ #Integer } / '(' Expression ')'
~~~

### Sample files

Nez grammar is specified with Nez language and stored in a `.nez` file.
Before you learn how to [specify a grammar with Nez](/spec.html),
why don't you try sample grammars that Nez project has provided:

* `math.nez` - a mathematical operator
* `json.nez` - a syntax of JSON format
* `xml.nez` - a syntax of XML1.0 format
* `js.nez` - JavaScript grammar
* others - avaliable on [Grammar repository](https://github.com/nez-peg/nez-grammar).


## Generating a Parser

Nez generates a parser in three ways: source generation, grammar translation, and dynamic parsers.

### Parser source generation

Since the Yacc invented in the early 1970s, the parser source code generation is a standard and practical approach to modern parser development. As with the Yacc, you can generate a parser from your grammar. 

Use the `nez parser` command:

~~~bash
nez parser -g math.nez
~~~

The above command writes a parser written in C into a file with the name `math.c`. 

Thanks to Nez's declarative notations, your grammar does not depend on any programming languages. You can switch other parser languages by specifying different formats. 

~~~bash
nez parser -g math.nez –format java
~~~

The supported parser languages are also extensible. For further information, check here. 

### Grammar translation

Nez can translate your grammar into another PEG-dialects, such as PEGjs (JavaScript), PEGTL (C++), LPeg (Lua), etc. 
To translate a grammar, use the `nez peg` command:

~~~bash
nez peg -g pegjs --format pegjs
~~~

The above command writes the translated grammar into a file with the name `math.pegjs`. As with in the parser source code generation, you can switch other grammar languages by specifying different formats. 

The translated grammar is available to generate a parser with third-parties rules. 

### Dynamic parsing

Nez itself can parse the input by loading your grammar at runtime.
This is a new style of parsing, which requires no source code generation.

To parse an input, use the `nez parse` command with input files or `--input` specified inline text. 

~~~bash
nez parse -g math.nez --input '1+2*3'
~~~


