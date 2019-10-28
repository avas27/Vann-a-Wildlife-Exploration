function homePagel() {
  setTimeout(() => {
    window.location.href = "#!/arrival";
  }, 2500);
}
function homeEntry() {
  window.location.href = "#!/land";
  document.getElementById("msg1").style.display = "none";
  // document.getElementById("m1").style.display = "none";
  // document.getElementById("m2").style.display = "none";
  // document.getElementById("m3").style.display = "none";
  // document.getElementById("m4").style.display = "none";
  // document.getElementById("m5").style.display = "none";
  setTimeout(() => {
    document.getElementById("m6").style.display = "block";
  }, 1500);
}
function park() {
  window.location.href = "#!/park";
  document.getElementsByTagName("body")[0].classList.add("park");
  document.getElementById("m6").style.display = "none";
  setTimeout(() => {
    document.getElementById("m7").style.display = "block";
  }, 1200);
  setTimeout(() => {
    document.getElementById("m7").style.display = "none";
  }, 5000);
  setTimeout(() => {
    fetchData();
  }, 1000);
}
