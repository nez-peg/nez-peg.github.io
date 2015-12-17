---
layout: default
---

# Nez : Open Grammar Language and tools

Nez is an open grammar specification language based on parsing expression grammars (PEGs). 
Once you write a grammar for complex data or computer languages, 
you can use it anywhere for various purposes including pattern matchers, 
transformers, interpreters, compilers and other language tools.

## Features

Nez is a PEG-based parsing library and parser generator tools. Nez features are characterized by:

* Grammar language
    * [Parsing expression grammars](https://en.wikipedia.org/wiki/Parsing_expression_grammar)
    * Flexible tree construction with PCRE-style notations
    * No action code, but allowing practical context-sensitive parsing
* Parser generator anywhere
    * Parser source code generation for multiple languages
    * Grammar translation
    * Very fast parser interpreter (parsing virtual machine)
* Runtime technology
    * Constant-space packrat parsing
    * DFA-based optimizer (experimental)
* Applications
    * Programming languages
    * Big "Text" Data Analysis

Nez named after "nezumi", rats in Japanese. 
As name implies, Nez has been inspired by packrat parsing and Rats! parser generator. 

![logo](image/nez_logo.png){: class="logo-img"}


Quick Start
-----------

To use the nez command, download the nez.jar file:

~~~
$ curl -O http://nez-peg.github.io/download/nez.jar
$ sudo nez.jar /usr/local/lib/nez.jar
$ alias nez='java -jar /usr/local/lib/nez.jar'
~~~

Also, it is good idea to put the alias setting in your `.bash_profile` or something like it. 

Let us begin with ["Getting Started"](getting_started.html)

## Development
Nez is originally developed by [Kimio Kuramitsu](http://kuramitsulab.github.io/) with his graduate students in Yokohama National University, JAPAN. 

You are welcome to contribute code. 
Unless your contribution is really trivial you should get in touch with me first — this can prevent wasted effort on both sides. 
You can send code both as a patch or a GitHub pull request.

Note that Nez is still very much work in progress. 
There are no compatibility guarantees while the *beta* version.

