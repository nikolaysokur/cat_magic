"use strict";

var wizardFirstNames = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон",
];

var wizardSecondNames = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг",
];

var coatColor = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)",
];

var eyesColor = ["black", "red", "blue", "yellow", "green"];

var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");

var similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

function setRandomName() {
  return (
    wizardFirstNames[Math.floor(Math.random() * wizardFirstNames.length)] +
    " " +
    wizardSecondNames[Math.floor(Math.random() * wizardSecondNames.length)]
  );
}

function setRandomCoatColor() {
  return coatColor[Math.floor(Math.random() * coatColor.length)];
}

function setRandomeyesColor() {
  return eyesColor[Math.floor(Math.random() * eyesColor.length)];
}

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: setRandomName(),
    coatColor: setRandomCoatColor(),
    eyesColor: setRandomeyesColor(),
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector(".setup-similar").classList.remove("hidden");
