---
layout: document
title: "Getting Started"
categories: [document]
---

##Getting Started

~~~nez

File
    = { (__ @SourceElement)* __ #Source }

SINGLE_LINE_COMMENT
    = '//' (!LINE_TERMINATOR? .)*
SPACE
    = [\t\v\f \u00A0\uFEFF]
// Space including line terminator
__
    [example: /* comment*/[]]
    [example: //comment]
    = (<block>SPACE+ / !LINE_TERMINATOR_SEQUENCE / COMMENT)*
EOS
    = __ '//'
    / _ SINGLE_LINE_COMMENT? LINE_TERMINATOR_SEQUENCE
    / _ "}"

~~~
