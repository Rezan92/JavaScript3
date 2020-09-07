const checkDoubleDigits = (num) => {

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve("The number is bigger than 10!");
      } else {
        reject(new Error("The number is smaller than 10..."));
      }
    }, 1000);
  });

  return myPromise
    .then(res => console.log(res))
    .catch(error => console.log(error))
};

checkDoubleDigits(1);
