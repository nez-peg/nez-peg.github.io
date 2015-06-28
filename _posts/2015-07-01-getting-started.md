---
layout: document
title: "Getting Started"
categories: [document]
---

#Getting Started

## Installation

An official installation is to be announced soon. 

Here is a very quick (unofficial) installation.

~~~bash
cd /usr/local/lib
sudo curl -O http://nez-peg.github.io/dist/nez.jar
alias nez='java -jar /usr/local/lib/nez.jar'
~~~

Now, you will try the nez command in your terminal. 

## Grammar

Nez grammar is stored in a `.nez` file.

Here is a simple sample of Nez grammar for basic mathematical operators. 

~~~nez

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

/* Example */

example Expression 1
example Expression 1+A*3

example Expression '''
1*2+3
'''

/* Formats */

format #Add[2]      `($[0] + $[1])`
format #Sub[2]      `($[0] - $[1])`
format #Mul[2]      `($[0] * $[1])`
format #Div[2]      `($[0] / $[1])`
format #Mod[2]      `($[0] % $[1])`
format #Int[0]      `${text}`
format #Variable[0] `${text}`

~~~

The Nez.jar package contains several useful grammar files in `nez/lib/*`. 

 * math.nez - a mathematical operator
 * konoha.nez - a small and static scripting language
 * json.nez - a syntax of JSON format
 * xml.nez - a syntax of XML1.0 format
 
You will find other grammar definitions at https://github.com/nez-peg/nez-sample .

## Invoking an Interactive Parser

Execute the nez command by specifying a grammar file (e.g., `math.nez`) with the `-p` option.

~~~bash
$ nez -p math.nez
Nez-0.9.0 (yokohama) on Java JVM-1.8.0_05
Copyright (c) 2014-2015, Nez project authors
>>> 

~~~

`>>>` is a prompt to type in what you want to do. 

You will evaluate the nonterminal `Expression` with your input string.

~~~
>>> Expression 1+2*3

#Add[
   #Int['1']
   #Mul[
      #Int['2']
      #Int['3']
   ]
]
Formatted: (1 + (2 * 3))

>>> Expression 1*2+3

#Add[
   #Mul[
      #Int['1']
      #Int['2']
   ]
   #Int['3']
]
Formatted: ((1 * 2) + 3)

~~~




~~~nez

File
    = { (__ @SourceElement)* __ #Source }

SINGLE_LINE_COMMENT
    = '//' (!LINE_TERMINATOR? .)*
SPACE
    = [\t\v\f \u00A0\uFEFF]

// Space including line terminator
__
    = (<block>SPACE+ / !LINE_TERMINATOR_SEQUENCE / COMMENT)*
EOS
    = __ '//'
    / _ SINGLE_LINE_COMMENT? LINE_TERMINATOR_SEQUENCE
    / _ "}"

~~~
