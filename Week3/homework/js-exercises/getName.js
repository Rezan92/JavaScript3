// Exercise A
function getData(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
}

getData('https://randomfox.ca/floof/');

// Exercise A with async/await
async function getDataAsync(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}

getDataAsync('https://randomfox.ca/floof/')


// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: Not all items in the array are strings!');
      }
    });
    resolve(capsArray);
  });
};

makeAllCaps(arrayOfWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Exercise B with async/await
const makeAllCapsAsync = async (array) => {
  try {
    const myPromise = await new Promise((resolve, reject) => {
      let capsArray = array.map(word => {
        if (typeof word === "string") {
          return word.toUpperCase();
        } else {
          reject("Error: Not all items in the array are string!");
        }
      });
      resolve(capsArray);
    });
    console.log(myPromise);
  } catch (error) {
    console.log(error);
  };
};

makeAllCapsAsync(arrayOfWords);