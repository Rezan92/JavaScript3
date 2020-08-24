const URL = "https://www.randomuser.me/api";

function getRandomUsreXml(method, url) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url, true);

  xhr.send();

  xhr.onload = () => {
    if (xhr.status = 200) {
      const data = JSON.parse(xhr.response).results[0];
      console.log("Data from XMLHttpRequest :", data);
    } else {
      console.log("Not found");
    }
  }

  xhr.onerror = () => {
    console.log("error");
  }
};

function getRandomUsreAxios(url) {
  axios.get(url)
    .then(res => console.log("Data from axios request :", res.data.results[0]))
    .catch(error => console.log(error));
};


getRandomUsreXml("GET", URL);
getRandomUsreAxios(URL);