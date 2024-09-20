function openSearch() {
  document.getElementById("loppensearchbar").style.display = "block";
}

function closeSearch() {
  document.getElementById("loppensearchbar").style.display = "none";
}

var coll = document.getElementsByClassName("menu");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var nav = this.nextElementSibling;
    if (nav.style.maxHeight) {
      nav.style.maxHeight = null;
    } else {
      nav.style.maxHeight = nav.scrollHeight + "px";
    }
  });
}
function kalendar_open() {
  document.getElementById("id_dropdown-content").style.display = "block";
}
function genre_open() {
  document.getElementById("id_dropdown-content1").style.display = "block";
}
function billeder_open() {
  document.getElementById("id_dropdown-content2").style.display = "block";
}
function info_open() {
  document.getElementById("id_dropdown-content3").style.display = "block";
}
function kontakt_open() {
  document.getElementById("id_dropdown-content4").style.display = "block";
}

function kalendar_close() {
  document.getElementById("id_dropdown-content").style.display = "none";
}
function genre_close() {
  document.getElementById("id_dropdown-content1").style.display = "none";
}
function billeder_close() {
  document.getElementById("id_dropdown-content2").style.display = "none";
}
