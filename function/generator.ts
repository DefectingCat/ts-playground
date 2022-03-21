function* createFibonacci(n: number) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

for (const i of createFibonacci(10)) {
  console.log(i);
}

export default {};
