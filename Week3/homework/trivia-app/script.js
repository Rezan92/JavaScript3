const URL = "https://opentdb.com/api.php?amount=5";

window.onload = function main() {

  const triviaContainer = document.getElementById("trivia-container");

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const text = await response.json();
      text.results.forEach(addQuestionToDom);
    } catch (error) {
      console.log(error);
    };
  };

  fetchData(URL);

  function addQuestionToDom(obj) {
    const card = document.createElement("div");
    const questions = document.createElement("p");
    const answer = document.createElement("p");

    card.className = "trivia-card";
    questions.className = "question";
    answer.className = "answer";

    questions.textContent = removeEntities(obj.question);
    answer.textContent = removeEntities(obj.correct_answer);

    triviaContainer.appendChild(card);
    card.appendChild(questions);
    card.appendChild(answer);

    questions.addEventListener("click", () => {
      displayAnswers(questions, answer)
    });
  };

  function displayAnswers(questions, answer) {
    if (answer.style.display === "block") {
      answer.style.display = "none";
      questions.classList.remove("active");
    } else {
      answer.style.display = "block";
      questions.classList.add("active");
    };
  };

  function removeEntities(str) {
    const cleanString = [];
    str.split(" ").forEach(elem => {
      if (elem.includes("&") && elem.includes(";")) {
        const entity = elem.substring(elem.indexOf("&"), elem.indexOf(";") + 1);
        const regex = new RegExp(entity, "gi");
        cleanString.push(elem.replace(regex, ""));
      } else {
        cleanString.push(elem);
      };
    });
    return cleanString.join(" ");
  };

};