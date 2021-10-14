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
  fetch("https://still-reef-68703.herokuapp.com/anchorChart/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAnchorChart)
  });

  location.replace("https://still-reef-68703.herokuapp.com/admin");
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
  fetch("https://still-reef-68703.herokuapp.com/anchorChart/:id", {
    method: "Get",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(currentAnchorChart)
  });
});

function deleteAnchorChart(id) {
  fetch(`https://still-reef-68703.herokuapp.com/anchorChart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  location.replace("https://still-reef-68703.herokuapp.com/admin");
}
