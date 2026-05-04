const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click",() => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();
window.onbeforeunload = () => {
    for( const from of document.getElementsByTagName("form")) {
        form.reset();
    }
};
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}