import Promise from 'native-promise-only';
import Ladda from 'ladda';

require('ladda/dist/ladda.min.css');
require('./css/main');

import getRandomArrayIndex from './lib/random-array-index';

function getListFromElement(elementId) {
  const listEl = document.getElementById(elementId);
  const list = listEl.value.split('\n');
  return list.filter(function (item) {
    return item.length > 0;
  });
}

function pickRandomItem(list, callback) {
  return new Promise((resolve, reject) => {
    return getRandomArrayIndex(list.length)
      .then((randomIndex) => {
        resolve(list[randomIndex]);
      });
  });
}

function displayText(text, elementId) {
  const element = document.getElementById(elementId);
  element.textContent = text;
}

const buttonEl = document.getElementById('pick-random-item-button');
const buttonSpinner = Ladda.create(buttonEl);
buttonEl.addEventListener('click', function () {
  const sourceListElementId = 'source-list';
  const randomItemElementId = 'random-item';

  buttonSpinner.start();

  pickRandomItem(getListFromElement(sourceListElementId))
    .then((randomPick) => {
      buttonSpinner.stop();
      displayText(randomPick, randomItemElementId);
    });
});
