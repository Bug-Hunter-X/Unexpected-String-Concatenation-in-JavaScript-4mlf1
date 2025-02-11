# Unexpected String Concatenation in JavaScript
This repository demonstrates a common JavaScript bug caused by loose typing and the + operator.  When adding numbers, ensure both operands are explicitly numeric to avoid unintended string concatenation.

## Bug Description
In JavaScript, the + operator performs both addition and string concatenation.  If one operand is a string, the other operand is implicitly converted to a string, resulting in concatenation.

## Solution
Use the Number() function to explicitly convert operands to numbers before performing addition.  This prevents accidental string concatenation.
