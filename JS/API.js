let d1 = null;
let d2 = null;
function fetchData() {
  console.log("processed");
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "JS/data.json", true);
  xhr.onload = function() {
    if (this.status == 200) {
      console.log("processed");
      var data = JSON.parse(xhr.responseText);
      getData(data[0]);
      getDataHub(data);
    }
  };

  xhr.send();
}
function getDataHub(data) {
  d1 = data[0];
  d2 = data[1];
}
function getData(data) {
  $("#cardOne")
    .children(".card-body")
    .text(data.overview);
  $("#cardTwo")
    .children(".card-body")
    .html(data.features);
  $("#cardThree")
    .children(".card-body")
    .html(data.life);
  $("#cardFour")
    .children(".card-body")
    .html(data.history);
}
function getData2(data) {
  console.log(data);
  $("#cardOneX")
    .children(".card-body")
    .text(data.overview);
  $("#cardTwoX")
    .children(".card-body")
    .html(data.features);
  $("#cardThreeX")
    .children(".card-body")
    .html(data.life);
  $("#cardFourX")
    .children(".card-body")
    .html(data.history);
}
function overview(val) {
  $("#score").css("display", "none");
  if (val === "a") $("#parkImgBg").attr("src", "assets/gir-over.jpg");
  else if (val === "x") $("#parkImgBg").attr("src", "assets/ko.jpg");
}
function features(val) {
  $("#score").css("display", "none");
  if (val === "a") $("#parkImgBg").attr("src", "assets/gir-features.jpg");
  else if (val === "x") $("#parkImgBg").attr("src", "assets/k-f.jpg");
}

function life(val) {
  $("#score").css("display", "none");
  if (val === "a") $("#parkImgBg").attr("src", "assets/gir-life.jpg");
  else if (val === "x") $("#parkImgBg").attr("src", "assets/k-life.jpg");
}

function history(val) {
  $("#score").css("display", "none");
  if (val === "a") $("#parkImgBg").attr("src", "assets/gir-his.jpg");
  else if (val === "x") $("#parkImgBg").attr("src", "assets/k-m.jpg");
}
function quiz() {
  $("#parkImgBg").attr("src", "assets/plane.png");
  $("#score").css("display", "flex");
}
function quizC() {
  $("#score").text("True");
}
function quizW() {
  $("#score").text("False");
}
function prev() {
  window.location.href = "#!/park";
  setTimeout(() => {
    getData(d1);
  }, 300);
}
function next() {
  window.location.href = "#!/park2";
  setTimeout(() => {
    getData2(d2);
  }, 300);
}
