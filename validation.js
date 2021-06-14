const guestList = ["Henry fagbenro","Ahmed oyetoro","Tunde olumuyiwa","Muyiwa johnson","James ayodele", "Clinton fagbenro", "Adetunji fagbenroo"];

//When the validation button is click on the HTML page
 function validation() {
     let name = prompt("What is your Name?");
//After the name is been inputed in the prompt, it is assumed that they are not in capital letters, so we slice the first letter in the first name to make it capitalised
     let slicedNameA = name.slice(0,1);
     let firstUpperCasedNameA = slicedNameA.toUpperCase();
//After the first letter of the first name is sliced, we slice the remaining letters of the first name to change them to lowercase
     let slicedNameAA = name.slice(1,name.length);
     let lowerCasedNameAA = slicedNameAA.toLowerCase();
//The final name after changing the first letter of the first name to uppercase and remaining letters of first name to lowercase is called confirmedName_1
     let confirmedName_1 = firstUpperCasedNameA + lowerCasedNameAA
    if (guestList.includes(confirmedName_1)){
        alert ("Welcome! " + confirmedName_1 )
    /*  const anser = document.getElementById("Hidden").innerText;    
      document.getElementById("Hidden").innerText = ( "Welcome! " + confirmedName_1);*/
     } else alert ("Sorry your name is not on the guest List")
 }
