import Promise from 'native-promise-only';

import logger from './logger';

const OK_STATUS = 200;

export default function getRandomArrayIndex(arraySize) {
  return new Promise((resolve) => {
    const lastIndex = arraySize - 1;
    const randomNumberServiceURL = `https://www.random.org/integers/
?num=1&col=1&base=10&format=plain&rnd=new
&min=0&max=${lastIndex.toString()}`;

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      if (xhr.status === OK_STATUS) {
        const randomIndex = parseInt(xhr.responseText, 10);
        return resolve(randomIndex);
      }
      logger.warn(`Random number service responded with error,
        generating pseudo-random number. xhr.responseText: ${xhr.responseText}`);

      const pseudoRandomIndex = Math.ceil(arraySize * Math.random()) - 1;
      resolve(pseudoRandomIndex);
    });

    xhr.open('GET', randomNumberServiceURL);
    xhr.send();
  });
}
