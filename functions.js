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
};

console.log("salt> Functions loaded");
