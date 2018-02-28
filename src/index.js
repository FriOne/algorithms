import { mergeSortRecursive } from './algorithms';
import { generateRandomIntArray, measureTime } from './helpers';

import './styles.scss';

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.js-start').addEventListener('click', measure);
});

function measure() {
  console.clear();
  measureTime(mergeSortRecursive, [3, 2, 1, 0])
  measureTime(mergeSortRecursive, generateRandomIntArray())
}
