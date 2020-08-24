const URL = "https://dog.ceo/api/breeds/image/random";

const body = document.body;
const container = document.createElement("div")
const xmlDiv = document.createElement("div");
const axiosDiv = document.createElement("div");
const xmlBtn = document.createElement("button");
const axiosBtn = document.createElement("button");
const xmlUl = document.createElement("ul");
const axiosUl = document.createElement("ul");

container.className = "container";
xmlDiv.className = "card";
axiosDiv.className = "card";

xmlBtn.textContent = "Add a dog (xml)";
axiosBtn.textContent = "Add a dog (axios)";
body.appendChild(container);
container.appendChild(xmlDiv);
container.appendChild(axiosDiv);
xmlDiv.appendChild(xmlBtn);
xmlDiv.appendChild(xmlUl);
axiosDiv.appendChild(axiosBtn);
axiosDiv.appendChild(axiosUl);

xmlBtn.addEventListener("click", getRandomDogsPhotoXml);
axiosBtn.addEventListener("click", getRandomDogsPhotoAxios);

function getRandomDogsPhotoXml() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL, true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status = 200) {
      const data = JSON.parse(xhr.response).message;
      xmlUl.innerHTML += `<li><img src="${data}" alt="dog"></li>`;
    } else {
      console.log("Not found");
    };
  };
};

function getRandomDogsPhotoAxios() {
  axios
    .get(URL)
    .then(res => {
      const data = res.data.message;
      axiosUl.innerHTML += `<li><img src="${data}" alt="dog"></li>`;
    })
    .catch(error => console.log(error));
};