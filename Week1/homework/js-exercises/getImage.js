const URL = "https://xkcd.now.sh/?comic=latest";

function getImageXml(method, url) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url, true);

  xhr.send();

  xhr.onload = () => {
    if (xhr.status = 200) {
      const data = JSON.parse(xhr.response);
      renderImage(data.img, data.alt, "HMLHttpRequest", "green");
      console.log("Data from XMLHttpRequest :", data);
    } else {
      console.log("Not found");
    }
  }

  xhr.onerror = () => {
    console.log("error");
  }
};

function getImageAxios(url) {
  axios.get(url)
    .then(res => {
      renderImage(res.data.img, res.data.alt, "Axios", "yellow");
      console.log("Data from axios", res.data);
    })
    .catch(error => console.log(error));
};

function renderImage(imgUrl, alt, text, color) {
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  div.style.border = "1px solid black"
  div.style.padding = "10px"
  div.style.textAlign = "center"
  div.style.maxWidth = "1300px"
  div.style.margin = "auto"
  div.style.marginTop = "2rem"
  div.style.background = color

  img.setAttribute("src", imgUrl);
  h1.textContent = text
  h3.textContent = alt
  document.body.appendChild(div);
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(h3);
};

getImageXml("GET", URL);
getImageAxios(URL);