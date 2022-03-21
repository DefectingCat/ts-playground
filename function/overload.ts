type Reserve = {
  (from: Date, to: Date, destination: string): string;
  (from: Date, destination: string): string;
};

const reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (typeof toOrDestination === 'string') {
    return `We are start ${from} to ${toOrDestination}`;
  } else {
    return `We are start ${from} to ${destination} at ${toOrDestination}`;
  }
};

console.log(reserve(new Date(), 'Beijing'));
console.log(reserve(new Date(), new Date(), 'Beijing'));
