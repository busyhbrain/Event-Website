var guestList = ["Henry fagbenro","Ahmed oyetoro","Tunde olumuyiwa","Muyiwa johnson","James ayodele", "Clinton fagbenro", "Adetunji fagbenroo"];

 function validation() {
     var name = prompt("What is your Name?");
    // var name = document.getElementById("Name").type("text");
     var slicedNameA = name.slice(0,1);
     var firstUpperCasedNameA = slicedNameA.toUpperCase();
     var slicedNameAA = name.slice(1,name.length);
     var lowerCasedNameAA = slicedNameAA.toLowerCase();
     var confirmedName_1 = firstUpperCasedNameA + lowerCasedNameAA
     var slicedNameB = name.slice(6,name.length);
     var slicedNameBB = slicedNameB.slice(0,1)
     var secondUppercasedNameBB = slicedNameBB.toUpperCase();
     var slicedNameBBB = slicedNameB.slice(1,name.length);
     var secondLowercasedNameBB = slicedNameBBB.toLowerCase()
     var confirmedName_2 = secondUppercasedNameBB + secondLowercasedNameBB
     var finalNameToConfirm = (confirmedName_1 +" "+ confirmedName_2);
    if (guestList.includes(confirmedName_1)){
        // alert ("Welcome! " + confirmedName_1 )
      var anser = document.getElementById("Hidden").innerText;    
      document.getElementById("Hidden").innerText = ( "Welcome! " + confirmedName_1);
     } else alert ("Sorry your name is not on the guest List")
 }