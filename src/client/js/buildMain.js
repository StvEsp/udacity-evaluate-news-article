const mainBuild = document.createDocumentFragment();

const mainForm = document.createElement("form");
mainForm.setAttribute("id", "EnterNameForm");
mainForm.setAttribute("name", "EnterNameForm");
//mainForm.setAttribute("onsubmit", "return Client.handleSubmit(event)");

const mainFieldset = document.createElement("fieldset");

const mainFormLegend = document.createElement("legend");
mainFormLegend.innerHTML =
  "<i class='material-symbols-rounded'>feed</i> <span>Evaluate a news article</span>";
mainFieldset.appendChild(mainFormLegend);

const mainFormInput = document.createElement("input");
mainFormInput.setAttribute("name", "name");
mainFormInput.setAttribute("type", "text");
mainFormInput.setAttribute("placeholder", "Name");
mainFormInput.setAttribute("value", "");
mainFieldset.appendChild(mainFormInput);

const mainFormSubmit = document.createElement("input");
mainFormSubmit.setAttribute("type", "submit");
mainFieldset.appendChild(mainFormSubmit);

mainForm.appendChild(mainFieldset);

const sectionOne = document.createElement("section");
sectionOne.setAttribute("id", "sectionOne");
sectionOne.appendChild(mainForm);

mainBuild.appendChild(sectionOne);

const sectionTwo = document.createElement("section");
sectionTwo.setAttribute("id", "sectionTwo");
sectionTwo.setAttribute("style", "display:none");
sectionTwo.innerHTML = "<strong>Form Results</strong>";

const resultsContainer = document.createElement("output");
resultsContainer.setAttribute("id", "Results");
sectionTwo.appendChild(resultsContainer);

mainBuild.appendChild(sectionTwo);

const bodyMain = document.getElementById("bodyMain");
bodyMain.appendChild(mainBuild);
