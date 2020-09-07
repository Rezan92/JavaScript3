const getAnonName = (firstName) => {

  const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      if (firstName) {
        resolve(`${firstName} Doe`);
      } else {
        reject(new Error("You didn't pass in a first name!"));
      }
    }, 2000);
  })

  return myPromise
    .then(res => console.log(res))
    .catch(error => console.log(error))
};

getAnonName("John")