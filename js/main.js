let home = document.getElementById("home");
let about = document.getElementById("about");
let SERVICES = document.getElementById("SERVICES");
let WORK = document.getElementById("WORK");
let BLOG = document.getElementById("BLOG");
let CONTACT = document.getElementById("CONTACT");
home.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
about.addEventListener("click", function () {
  window.scroll({
    top: 650,
    behavior: "smooth",
  });
});
SERVICES.addEventListener("click", function () {
  window.scroll({
    top: 1200,
    behavior: "smooth",
  });
});
WORK.addEventListener("click", function () {
  window.scroll({
    top: 2420,
    behavior: "smooth",
  });
});
BLOG.addEventListener("click", function () {
  window.scroll({
    top: 3580,
    behavior: "smooth",
  });
});
CONTACT.addEventListener("click", function () {
  window.scroll({
    top: 4010,
    behavior: "smooth",
  });
});
let icon = document.getElementById("icon");
window.onscroll = function(){
  if(scrollY >= 200){
    icon.style.display = "block"
  }else{
    icon.style.display = "none"
  }
}
icon.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
