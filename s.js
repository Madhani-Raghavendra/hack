
var typed = new Typed(".auto-type", {
    strings:["FULL STACK DEVELOPMENT","DATA SCIENCE","AMAZON WEB DEVeLOPMENT","DIGITAL MARKETING"],
    typeSpeed:150,
    backSpeed:250,
    loop:true
})



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablinks of tablinks) {
    tablinks.classList.remove("active-link");
  }
  for (tabcontents of tabcontents) {
    tabcontents.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")

}