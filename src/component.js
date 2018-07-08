export default (text = "Oops I did it again") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};