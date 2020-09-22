
// 1- "createAndAppendElement" function create element.
// 2- It append the created element to parent. 
// 3- create className and content text(if needed).
// 3- return the created element.

export default function createAndAppendElement(elem, parent, className, text) {
  const element = document.createElement(elem);
  if (className) {
    element.className = className;
  };
  if (text) {
    element.textContent = text;
  }
  parent.appendChild(element);
  return element;
};