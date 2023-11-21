document.getElementById("btnLoad").addEventListener("click", function () {
  loadTeams();
});

const URL = "https://api.football-data.org/v2/competitions/WC/matches";
//const URL = "https://api.football-data.org/v4/competitions/BL1/teams";

function loadTeams() {
  fetch(URL, {
    headers: {
      "Accept-Encoding": "",
      "X-Auth-Token": "819babcd7902454f930c154272296d78",
    },
    mode: "cors",
  }).then((res) =>
    res.json().then((res) => {
      console.log(res);
    })
  );
}
