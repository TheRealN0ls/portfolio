let activemenu = "";
let activecolor = "";
function show(color) {
  let colorinset = document.querySelector(`.content-${color}`);
  if (colorinset) {
    colorinset.style.top = "0vh";
    activecolor = color;
  } else {
    console.error(`Element with class .content-${color} not found.`);
  }
}
function hide(color){
  let colorinset = document.querySelector(`.content-${color}`);
  if (colorinset) {
    colorinset.style.top = "100vh";
    activecolor = "";
  } else {
    console.error(`Element with class .content-${color} not found.`);
  }
}
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
      if (activecolor === "") {
      console.log("element is not active");
      } else{
        hide(activecolor);
      }
  }
});
function menuopen(soort){
  let insoort = document.querySelector(`.${soort}`);
  if (insoort){
    insoort.style.top = "20vh";
    activemenu = insoort;
  }
  else{
      console.log(`${soort} kan niet geactiveerd worden`);
    }
}
function menusluiten(soort)
{
  let insoort = document.querySelector(`.${soort}`);
  if (insoort){
    insoort.style.top = "-100vh";
    activemenu = "";
  }
  else{
      console.log(`${soort} kan niet geactiveerd worden`);
    } 
}