export function measureTime(fn, ...args) {
  console.groupCollapsed(fn.name);
  console.log('arguments', ...args);
  console.time('time');
  const result = fn(...args);
  console.timeEnd('time');
  console.log('result', result);
  console.groupEnd();
}

export function generateRandomInt(min = 0, max = 100) {
  return min + Math.floor((Math.random() * (max - min)))
}

export function generateRandomIntArray(length = 10, min = 0, max = 100) {
  return Array.from({length}, () => generateRandomInt(min, max));
}
