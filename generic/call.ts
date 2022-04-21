function call<T extends unknown[], R>(fn: (...args: T) => R, ...args: T): R {
  return fn(...args);
}

function fill(length: number, value: string): string[] {
  return new Array(length).fill(value);
}

const test = call(fill, 10, 'xfy');
console.log(test);
