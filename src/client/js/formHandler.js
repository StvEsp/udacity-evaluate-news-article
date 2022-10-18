const enterURLForm = document.forms.EnterURLForm;
const resultsSection = document.getElementById("sectionTwo");
const resultsContainer = document.getElementById("Results");
const urlField = document.getElementById("urltoeval");

enterURLForm.urltoeval.onchange = (event) => {
  event.target.value.length > 0
    ? urlField.checkValidity()
      ? ((urlField.className = "valid"),
        enterURLForm.submit.removeAttribute("disabled"))
      : ((urlField.className = "invalid"),
        enterURLForm.submit.setAttribute("disabled", "disabled"))
    : ((urlField.className = ""),
      enterURLForm.submit.setAttribute("disabled", "disabled"));
};

enterURLForm.onsubmit = (event) => {
  event.preventDefault();

  let formText = enterURLForm.urltoeval.value;

  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("url", formText);
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .then((resultsSection.style.display = "block"))
    .then(
      (resultsContainer.innerHTML =
        `<article><div class="submission-url">${formText}</div>` +
        `<div class="aggreement">AGGREEMENT</div>` +
        `<div class="subjectivity">SUBJECTIVE</div>` +
        `<div class="confidence">100</div>` +
        `<div class="irony">IRONIC</div>` +
        `</article>`)
    )
    .then(
      getEvalData().then((evalData) => {
        resultsContainer.innerHTML = `<article><div class="submission-url">${evalData}</div>`;
      })
    )
    .catch((error) => console.log("error", error));

  // enterURLForm.urltoeval.checkValidity() &&
  //   (resultsSection.style.display = "block"),
  //
};

async function getEvalData() {
  const response = await fetch("/evaluate");
  try {
    const evalData = await response.json();
    return evalData;
  } catch (error) {
    console.log("error:", error);
  }
}
