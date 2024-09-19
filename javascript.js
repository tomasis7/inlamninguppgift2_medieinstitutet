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
