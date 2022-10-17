const enterNameForm = document.forms.EnterNameForm;
const resultsSection = document.getElementById("sectionTwo");

enterNameForm.onsubmit = (event) => {
  event.preventDefault();

  let formText = enterNameForm.name.value;
  formText &&
    postText("/evaluate", formText).then(
      (resultsSection.style.display = "block"),
      (document.getElementById("Results").innerHTML = res.message)
    );
};

const postText = async (url = "", text = "") => {
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", text);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/lang-4.0/identification",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(console.log(body))
    .catch((error) => console.log("error", error));
};
