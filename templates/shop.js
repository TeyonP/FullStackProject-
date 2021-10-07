function anchorChartData() {
  fetch("http://localhost:3000/anchorChart", {
    // credentials: "include",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  }).then(res => {
    res.render("./shopping_page.html");
  });
}
