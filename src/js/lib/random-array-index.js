import Promise from 'native-promise-only';

export default function getRandomArrayIndex(arraySize) {
  return new Promise((resolve, reject) => {
    const lastIndex = arraySize - 1;
    const randomNumberServiceURL = `https://www.random.org/integers/
?num=1&col=1&base=10&format=plain&rnd=new
&min=0&max=${lastIndex.toString()}`;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function onXHRComplete () {
      if (this.status === 200) {
        var randomIndex = parseInt(this.responseText, 10);
        return resolve(randomIndex);
      }
      console.warn('Random number service responded with error, generating pseudo-random number', this.responseText);

      const pseudoRandomIndex = Math.ceil(arraySize * Math.random()) - 1;
      resolve(pseudoRandomIndex);
    });

    xhr.open('GET', randomNumberServiceURL);
    xhr.send();
  });
}
