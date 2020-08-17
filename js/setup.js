"use strict";

var WIZARD_FIRSTNAMES = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон",
];

var WIZARD_SECONDNAMES = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг",
];

var COAT_COLOR = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)",
];

var EYES_COLOR = ["black", "red", "blue", "yellow", "green"];

var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector("setup-similar-list");

var similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

function setRandomName() {
  return (
    WIZARD_FIRSTNAMES[Math.floor(Math.random() * WIZARD_FIRSTNAMES.length)] +
    " " +
    WIZARD_SECONDNAMES[Math.floor(Math.random() * WIZARD_SECONDNAMES.length)]
  );
}

function setRandomCoatColor() {
  return COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)];
}

function setRandomeyesColor() {
  return EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
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

similarListElement.appendChild(wizardElement);

userDialog.querySelector(".setup-similar").classList.remove("hidden");
