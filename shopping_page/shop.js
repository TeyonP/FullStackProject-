const anchorChartData = () => {
  fetch("http://localhost:3000/anchorChart", {
    // credentials: "include",
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "no-cors",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};

anchorChartData();
