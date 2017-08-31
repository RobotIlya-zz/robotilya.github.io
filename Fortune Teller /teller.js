let dC = []
function getFortune(){
  let fortune = ["Your high-minded principles spell success.","You will soon find what you seek","You will be sad unless you eat less tacos"];
    let rand = Math.round(Math.round(Math.random()*10)/4);
if (fortune[rand] == undefined){ // Error handling in case the index called is outside of the # of fortunes we have
      rand = 0
}
dC.push(rand);  
console.log("Potentially duplicate input value is " + rand);
console.log(dC);
console.log(dC[dC.length-2]);
if (rand == dC[dC.length-2]){
  console.log("DUPLICATE!");
  rand+=1
}
console.log("Non duplicate value: " + rand)
document.getElementById("test").innerHTML = fortune[rand]; // Write the fortune to the page
}
function load(){ // Initializes the button listener on body load
document.getElementById("fortune").addEventListener("click", getFortune);
}
