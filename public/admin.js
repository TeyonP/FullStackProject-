const btnAddAnchorChart = document.getElementById("addAnchorBtn");
const btnUpdateAnchorChart = document.getElementById("updateAnchorBtn");
const btnDelelteAnchorChart = document.getElementById("deleteAnchorBtn");
const updateBtn = document.getElementById("updateBtn");
const inputTopic = document.getElementById("inputTopic");
const inputSubject = document.getElementById("inputSubject");
const inputGrade = document.getElementById("inputGrade");
const inputPrice = document.getElementById("inputPrice");

btnAddAnchorChart.addEventListener("click", e => {
  e.preventDefault();
  console.log("clicked");
  const newAnchorChart = {
    topic: inputTopic.value,
    subject: inputSubject.value,
    grade: inputGrade.value,
    price: inputPrice.value
  };
  console.log(newAnchorChart);
  fetch("http://localhost:3000/anchorChart/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAnchorChart)
  });

  location.replace("http://localhost:3000/admin");
});

updateBtn.addEventListener("click", e => {
  e.preventDefault();
  console.log("clicked");
  const currentAnchorChart = {
    topic: inputTopic.value,
    subject: inputSubject.value,
    grade: inputGrade.value,
    price: inputPrice.value
  };
  console.log(currentAnchorChart);
  fetch("http://localhost:3000/anchorChart/:id", {
    method: "Get",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(currentAnchorChart)
  });
});
