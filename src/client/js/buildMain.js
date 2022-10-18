const mainBuild = document.createDocumentFragment();

const mainForm = document.createElement("form");
mainForm.setAttribute("id", "EnterURLForm");
mainForm.setAttribute("name", "EnterURLForm");
//mainForm.setAttribute("onsubmit", "return Client.handleSubmit(event)");

const mainFieldset = document.createElement("fieldset");

const mainFormLegend = document.createElement("legend");
mainFormLegend.innerHTML =
  "<i class='material-symbols-rounded'>feed</i> <span>Evaluate a news article</span>";
mainFieldset.appendChild(mainFormLegend);

const helperText = document.createElement("label");
helperText.setAttribute("for", "urltoeval");
helperText.innerHTML = "Note: Make sure to include http:// or https://";
mainFieldset.appendChild(helperText);

const mainFormInput = document.createElement("input");
mainFormInput.setAttribute("name", "urltoeval");
mainFormInput.setAttribute("id", "urltoeval");
mainFormInput.setAttribute("type", "url");
mainFormInput.setAttribute("placeholder", "Enter URL");
mainFormInput.setAttribute("value", "");
mainFieldset.appendChild(mainFormInput);

const mainFormSubmit = document.createElement("input");
mainFormSubmit.setAttribute("type", "submit");
mainFormSubmit.setAttribute("name", "submit");
mainFormSubmit.setAttribute("disabled", "disabled");
mainFieldset.appendChild(mainFormSubmit);

mainForm.appendChild(mainFieldset);

const sectionOne = document.createElement("section");
sectionOne.setAttribute("id", "sectionOne");
sectionOne.appendChild(mainForm);

mainBuild.appendChild(sectionOne);

const sectionTwo = document.createElement("section");
sectionTwo.setAttribute("id", "sectionTwo");
sectionTwo.setAttribute("style", "display:none");
sectionTwo.innerHTML = "<strong>Evaluation Results</strong>";

const resultsContainer = document.createElement("output");
resultsContainer.setAttribute("id", "Results");
sectionTwo.appendChild(resultsContainer);

mainBuild.appendChild(sectionTwo);

const bodyMain = document.getElementById("bodyMain");
bodyMain.appendChild(mainBuild);
