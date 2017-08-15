let easyMode = 15;
let avgMode = 30;
let hardMode = 60;
  let mineArray = [];
let button = "<input type='button' value='?' class='button'>"; // This populates  the cells with buttons

function genGrid() { // This function is a massively inefficient way of generating a table with unique cell ids

    let x = document.createElement("TABLE");
      x.setAttribute("id", "Game");
        /*x.setAttribute("border", "1");*/
          document.body.appendChild(x);

for (var i = 0; i < 16; i++) { // This creates 16 rows
    let table = document.getElementById("Game");
        let row = table.insertRow(0);
        row.setAttribute("id", i); // i is now going to be equal to an id range of 0-15 (16 rows)
        table.appendChild(row);
      }
for (var i = 0; i < 16; i++) { // Create a loop that iteratively adds cells to the initial 16 rows (i)
  let row = document.getElementById(i); // Find the rows that were created above in linees 17-22 and cycle through them
  let cell = row.insertCell(0);
  cell.setAttribute("id", ("C"+i));
  row.appendChild(cell);
  cell.innerHTML = button;

  let secondRow = document.getElementById("C15");

  if (secondRow){ // If the script finds a value with ID=15, which it should
    for (var y = 0; y < 16; y++) {
      let row = document.getElementById(y);
      let cell = row.insertCell(0);
      cell.setAttribute("id", "C"+(y+16));
      row.appendChild(cell);
      cell.innerHTML = button;

    let thirdRow = document.getElementById("C31");

      if (thirdRow){
        for (var z = 0; z < 16; z++) {
          let row = document.getElementById(z);
          let cell = row.insertCell(0);
          cell.setAttribute("id", "C"+(z+32));
          row.appendChild(cell);
          cell.innerHTML = button;

    let fourthRow = document.getElementById("C47");

    if (fourthRow){
      for (var r = 0; r < 16; r++) {
        let row = document.getElementById(r);
        let cell = row.insertCell(0);
        cell.setAttribute("id", "C"+(r+48));
        row.appendChild(cell);
        cell.innerHTML = button;

        let fifthRow = document.getElementById("C63");

        if (fifthRow){
          for (var q = 0; q < 16; q++) {
            let row = document.getElementById(q);
            let cell = row.insertCell(0);
            cell.setAttribute("id", "C"+(q+64));
            row.appendChild(cell);
            cell.innerHTML = button;

            let sixthRow = document.getElementById("C79");

            if (sixthRow){
              for (var w = 0; w < 16; w++) {
                let row = document.getElementById(w);
                let cell = row.insertCell(0);
                cell.setAttribute("id", "C"+(w+80));
                row.appendChild(cell);
                cell.innerHTML = button;

                let seventhRow = document.getElementById("C95");

                if (seventhRow){
                  for (var e = 0; e < 16; e++) {
                    let row = document.getElementById(e);
                    let cell = row.insertCell(0);
                    cell.setAttribute("id", "C"+(e+96));
                    row.appendChild(cell);
                    cell.innerHTML = button;

                    let eightRow = document.getElementById("C111");

                    if (eightRow){
                      for (var t = 0; t < 16; t++) {
                        let row = document.getElementById(t);
                        let cell = row.insertCell(0);
                        cell.setAttribute("id", "C"+(t+112));
                        row.appendChild(cell);
                        cell.innerHTML = button;

                        let ninethRow = document.getElementById("C127");

                        if (ninethRow){
                          for (var a = 0; a < 16; a++) {
                            let row = document.getElementById(a);
                            let cell = row.insertCell(0);
                            cell.setAttribute("id", "C"+(a+128));
                            row.appendChild(cell);
                            cell.innerHTML = button;

                            let tenthRow = document.getElementById("C143");

                            if (tenthRow){
                              for (var s = 0; s < 16; s++) {
                                let row = document.getElementById(s);
                                let cell = row.insertCell(0);
                                cell.setAttribute("id", "C"+(s+144));
                                row.appendChild(cell);
                                cell.innerHTML = button;

                                let eleventhRow = document.getElementById("C159");

                                if (eleventhRow){
                                  for (var d = 0; d < 16; d++) {
                                    let row = document.getElementById(d);
                                    let cell = row.insertCell(0);
                                    cell.setAttribute("id", "C"+(d+160));
                                    row.appendChild(cell);
                                    cell.innerHTML = button;

                                    let twelvthRow = document.getElementById("C175");

                                    if (twelvthRow){
                                      for (var f = 0; f < 16; f++) {
                                        let row = document.getElementById(f);
                                        let cell = row.insertCell(0);
                                        cell.setAttribute("id", "C"+(f+176));
                                        row.appendChild(cell);
                                        cell.innerHTML = button;

                                        let thirteenthRow = document.getElementById("C191");

                                        if (thirteenthRow){
                                          for (var c = 0; c < 16; c++) {
                                            let row = document.getElementById(c);
                                            let cell = row.insertCell(0);
                                            cell.setAttribute("id", "C"+(c+192));
                                            row.appendChild(cell);
                                            cell.innerHTML = button;

                                            let fourteenthRow = document.getElementById("C207");

                                            if (fourteenthRow){
                                              for (var v = 0; v < 16; v++) {
                                                let row = document.getElementById(v);
                                                let cell = row.insertCell(0);
                                                cell.setAttribute("id", "C"+(v+208));
                                                row.appendChild(cell);
                                                cell.innerHTML = button;

                                                let fifteenthRow = document.getElementById("C223");

                                                if (fifteenthRow){
                                                  for (var b = 0; b < 16; b++) {
                                                    let row = document.getElementById(b);
                                                    let cell = row.insertCell(0);
                                                    cell.setAttribute("id", "C"+(b+224));
                                                    row.appendChild(cell);
                                                    cell.innerHTML = button;

                                                    let sixteenthRow = document.getElementById("C239");

                                                    if (sixteenthRow){
                                                      for (var n = 0; n < 16; n++) {
                                                        let row = document.getElementById(n);
                                                        let cell = row.insertCell(0);
                                                        cell.setAttribute("id", "C"+(n+240));
                                                        row.appendChild(cell);
                                                        cell.innerHTML = button;
                                                        if (n==15){console.log("THE TABLE SHOULD BE DONE NOW");}
    }
      }
        }
          }
            }
              }
                }
                  }
                    }
                      }
                        }
                          }
                            }
                              }
                                }
                                  }
                    }
                      }
                    }
                      }
                    }
                      }
                    }
                      }
                    }
                      }
                    }
                      }
                    }
                      }
                    }
                      }

window.setTimeout(gameTime, 2); //My table was being generated at the same time I tried to find it. This solves that issue by waiting 1ms
function gameTime(){
    let table = document.getElementById("Game");
      for (var i=0;i<256;i++){ // Assign a value from 0-255 to every button generated by the hacky script above.
    let cell = document.getElementsByTagName("INPUT")[i];
      cell.setAttribute("id", i);
  }
  function mineField(x){ // This generates where the mines will go based on the mode passed in. The user will be able to select this in the future.
  for (var i=0; i<x; i++){
  mineArray.push(Math.round(Math.random() * 100));
}
};
  mineField(easyMode); // Hardcoding easy mode state for now.
  console.log(mineArray);
  let allButts = document.getElementsByTagName("input") // getElementsByTagName returns an array and I was trying to call the wrong thing on it. Fixed by iterating through it and assigning listeners.
  for (i = 0; i < allButts.length; i++) {
    allButts[i].addEventListener("click", isBoom);
}
  function isBoom(x) {
    console.log("This is what isboom thinks mineArray is ==> " + mineArray);
    console.log("This is what isBoom thinks was pressed ==> " + x.target.id);
    let inButt = parseInt(x.target.id);
    if (mineArray.includes(inButt)){
      document.getElementById("Game").innerHTML = "fuck everything, you're now dead"; // Test case for seeing if you clicked on a mine or not.
    }
  }

    };
