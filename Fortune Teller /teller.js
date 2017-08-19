function getFortune(){
  let fortune = ["You will die today","You will find luck in a bar","You will be sad unless you eat less tacos"];
    let rand = Math.round(Math.round(Math.random()*10)/4);
if (fortune[rand] == undefined){ // Error handling in case the index called is outside of the # of fortunes we have
      rand = 0
}
document.getElementById("test").innerHTML = fortune[rand]; // Write the fortune to the page
}
function load(){ // Initializes the button listener on body load
document.getElementById("fortune").addEventListener("click", getFortune);
}
