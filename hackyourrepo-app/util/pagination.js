import createAndAppendElement from "./createAndAppend.js"

export default function pagination(arr, wrapper, btnContainer) {
  let page = 0;
  const row = 5;
  function displayCurrentPage() {
    wrapper.innerHTML = "";
    const start = page * row;
    const end = start + row;
    const currentPage = arr.slice(start, end);
    for (let i = 0; i < currentPage.length; i++) {
      const div = createAndAppendElement("div", wrapper, "contributors-card");
      const img = createAndAppendElement("img", div);
      const a = createAndAppendElement("a", div, "userName", currentPage[i].login);
      const p = createAndAppendElement("p", div, false, currentPage[i].contributions);

      img.setAttribute("src", currentPage[i].avatar_url);
      img.setAttribute("alt", `${currentPage[i].login}'s avatar`);
      a.setAttribute("href", currentPage[i].html_url);
      a.setAttribute("target", "_blank");
    }
  }

  function pageBtns() {
    const countPages = Math.ceil(arr.length / row);
    btnContainer.textContent = "";
    if (arr.length > 5) {
      btnContainer.style.display = "flex";
      for (let i = 0; i < countPages; i++) {
        const button = createAndAppendElement("button", btnContainer, false, i + 1);
        if (i === 0) button.classList.add("active")
        button.addEventListener("click", () => {
          page = i;
          displayCurrentPage();
          const currentButton = document.querySelector(".pagination button.active");
          console.log("active button", currentButton)
          currentButton.classList.remove("active");
          button.classList.add("active")
        });
      };
    } else {
      btnContainer.textContent = "";
      btnContainer.style.display = "none";
    };
  };
  displayCurrentPage();
  pageBtns();
};