// const e = require("express");

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

// updateBtn.addEventListener("click", e => {
//   e.preventDefault();
//   console.log("clicked");
//   const currentAnchorChart = {
//     topic: inputTopic.value,
//     subject: inputSubject.value,
//     grade: inputGrade.value,
//     price: inputPrice.value
//   };
//   console.log(currentAnchorChart);
//   fetch("https://still-reef-68703.herokuapp.com/anchorChart/:id", {
//     method: "Get",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(currentAnchorChart)
//   });
// });

function deleteAnchorChart(id) {
  fetch(`https://still-reef-68703.herokuapp.com/anchorChart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  location.replace("https://still-reef-68703.herokuapp.com/admin");
}

function updateAnchorChart(id) {
  fetch(`https://still-reef-68703.herokuapp.com/anchorChart/${id}`)
    .then(response => {
      return response.json();
    })
    .then(anchorChart => {
      populateModal(anchorChart);
    });

  let updateAnchorButton = document.getElementById("updateAnchorButton");
  // console.log(anchorChart.id);
  updateAnchorButton.addEventListener(
    "click",
    function () {
      updateModalButton(id);
    },
    false
  );
  // console.log("Update has been clicked with id: ", id);
}

function populateModal(anchorChart) {
  // let myModal = new bootstrap.Modal(document.getElementById('my-modal'));

  let topicField = document.getElementById("topicField");
  // console.log(topicField.value);
  topicField.value = anchorChart.topic;

  let subjectField = document.getElementById("subjectField");
  // console.log(subjectField.value);
  subjectField.value = anchorChart.subject;

  let gradeField = document.getElementById("gradeField");
  // console.log(gradeField.value);
  gradeField.value = anchorChart.grade;

  let priceField = document.getElementById("priceField");
  // console.log(priceField.value);
  priceField.value = anchorChart.price;
}

function updateModalButton(id) {
  console.log(id);

  let topicField = document.getElementById("topicField");
  let subjectField = document.getElementById("subjectField");
  let gradeField = document.getElementById("gradeField");
  let priceField = document.getElementById("priceField");
  let parsedPriceField = parseInt(priceField.value);
  // let integer = parseInt(priceField);

  let anchorChart = {
    topic: topicField.value,
    subject: subjectField.value,
    grade: gradeField.value,
    price: parsedPriceField
  };

  fetch(`https://still-reef-68703.herokuapp.com/anchorChart/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(anchorChart)
  });
  location.replace("https://still-reef-68703.herokuapp.com/admin");
}
