function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '1')); // Output: 2 (numerical addition)
console.log(foo('1','1')); //Output:2
console.log(foo(1,1)); //Output:2