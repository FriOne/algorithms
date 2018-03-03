export function mergeSortRecursive(elements) {
  if (elements.length <= 1) {
    return elements;
  }
  const middle = Math.floor(elements.length / 2);
  const left = mergeSortRecursive(elements.slice(0, middle));
  const right = mergeSortRecursive(elements.slice(middle, elements.length));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let leftElement = left.shift();
  let rightElement = right.shift();
  while (true) {
    if (leftElement >= rightElement) {
      result.push(rightElement);
      rightElement = right.shift();
    } else {
      result.push(leftElement);
      leftElement = left.shift();
    }
    if (!leftElement) {
      result.push(rightElement, ...right);
      break;
    } else if (!rightElement) {
      result.push(leftElement, ...left);
      break;
    }
  }
  return result;
}
