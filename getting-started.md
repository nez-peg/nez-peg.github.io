---
layout: default
title: "Getting Started"
categories: [document]
---

# Getting Started


For this introduction we assume that you have already installed java8 (jre) on
MacOS X or other Unix-based operating system.

## Installation

~~~ shell

~~~

Here is a very quick installation.

~~~ bash
cd /usr/local/lib
sudo curl -O http://nez-peg.github.io/dist/nez.jar
alias nez='java -jar /usr/local/lib/nez.jar'
~~~

Now, you will try the `nez` command in your terminal.

~~~ bash
$ nez
Nez-0.9.0 (yokohama) on Java JVM-1.8.0_05
Copyright (c) 2014-2015, Nez project authors
>>>

~~~

> `>>>` is a prompt of the Nez interactive parser.
> You will exit by enter Control-D.
{:.information}

## Grammar Files

Nez grammar is specified with Nez language and stored in a `.nez` file.
Before you learn how to [specify a grammar with Nez](/spec.html),
why don't you try sample grammars that Nez project has provided:

* math.nez - a mathematical operator
* json.nez - a syntax of JSON format
* xml.nez - a syntax of XML1.0 format
* konoha.nez - a small and static scripting language
* others - avaliable on Grammar repository https://github.com/nez-peg/nez-sample.

Here is an excerption of the `math.nez` file.

~~~ nez

/**
 * math.nez: Basic mathematical operator
 * author: Kimio Kuramitsu
 */

File
	= Expression .*

/* Code Layout */

_
	= S*

S
	= [ \t]

"+"     = '+' _
"-"     = '-' _
"*"     = '*' _
"/"     = '/' _
"%"     = '%' _
"("     = '(' _
")"     = ')' _

/* Expression */

public Expression
	= Sum

Sum
	= Product {@ ( "+" #Add / "-" #Sub ) @Product }*

Product
	= Value {@ ( "*" #Mul / "/" #Div / "%" #Mod ) @Value }*

Value
	= { [0-9]+ #Int } _
	/ { [A-Za-z0-9_]+ #Variable } _
	/ "(" Expression ")"

~~~

## Invoking Interactive Parser

The Nez interactive parser is a good starting point to try Nez.
Use `-p` option to specify a grammar file that you want to load.

~~~ bash
$ nez -p math.nez
Nez-0.9.0 (yokohama) on Java JVM-1.8.0_05
Copyright (c) 2014-2015, Nez project authors
>>>

~~~

> Several grammars such as `math.nez` are contained in the nez.jar package.
> Without any settings, you can use these files as the default search path.



## Parsing with NonTerminals

You can parse your input string with a nonterminal defined in `math.nez`.
Let's try `Expression` nonterminal as follows:

~~~
>>> Expression 1+2*3

#Add[
   #Int['1']
   #Mul[
      #Int['2']
      #Int['3']
   ]
]

>>> Expression 1*2+3

#Add[
   #Mul[
      #Int['1']
      #Int['2']
   ]
   #Int['3']
]
~~~

> Note that `#T[..]` is an AST representation that is parsed by Nez.
> The #-prefixed label is a tag to identify the meaning of the AST node.
> The AST node consists of either a parsed string or a sequence of child AST nodes.

## Defining Productions

Now we will turn to how to define a new production in the interactive parser.

~~~
>>> DIGIT = [0-9]
...

>>> DIGIT 1

~~~
