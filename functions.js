const myFunctions = {
  getCompanyName: function () {
    return "SALT";
  },

  addListInMain: function (numberOfListItems) {
    const ulElement = document.createElement("ul");

    for (let i = 0; i < numberOfListItems; i++) {
      const liItem = document.createElement("li");
      liItem.textContent = `Item #${i + 1}`;
      ulElement.appendChild(liItem);
    }

    const main = document.querySelector("main");
    main.appendChild(ulElement);
  },
  removeDivById: function (id) {
    const element = document.getElementById(id);
    if (element != undefined && element != null) {
      element.remove();
    }
  },
  addResultStyling: function () {
  const mainResultElements = document.querySelectorAll(".mainResult");

  for (let i = 0; i < mainResultElements.length; i++) {
    const content = mainResultElements[i].textContent;

    this.addStyleBasedOnContent(mainResultElements[i], content);
  }
},
  addStyleBasedOnContent: function (element, content) {
    const value = parseFloat(content);
    if (isNaN(value)) {
      element.classList.add("negativeResult");
      element.textContent = "Not a number";
    } else if (value < 0) {
      element.classList.add("negativeResult");
    } else {
      element.classList.add("positiveResult");
    }
  }
};

console.log("salt> Functions loaded");
