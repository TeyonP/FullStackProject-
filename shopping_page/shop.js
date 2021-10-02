const anchorChartData = () => {
  fetch("http://localhost:3000/anchorChart", {
    // credentials: "include",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};

anchorChartData();
