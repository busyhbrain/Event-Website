

     const guestList = ["Henry fagbenro","Ahmed oyetoro","Tunde olumuyiwa","Muyiwa johnson","James ayodele", "Clinton fagbenro", "Adetunji fagbenroo", "Micheal farounbi"];
     
     
     // alert(guestList);
    /* function checkName() {
        fullName = document.getElementById("Name").value;
        guestList.push(fullName);
    console.log(guestList) }*/  

     function validation() {
     let name = prompt("What is your Name?");
    // var name = document.getElementById("Name").type("text");
    
     let slicedNameA = name.slice(0,1);
     let firstUpperCasedNameA = slicedNameA.toUpperCase();
     let slicedNameAA = name.slice(1,name.length);
     let lowerCasedNameAA = slicedNameAA.toLowerCase();
     let confirmedName_1 = firstUpperCasedNameA + lowerCasedNameAA
     let slicedNameB = name.slice(6,name.length);
     let slicedNameBB = slicedNameB.slice(0,1)
     let secondUppercasedNameBB = slicedNameBB.toUpperCase();
     let slicedNameBBB = slicedNameB.slice(1,name.length);
     let secondLowercasedNameBB = slicedNameBBB.toLowerCase()
     let confirmedName_2 = secondUppercasedNameBB + secondLowercasedNameBB
     let finalNameToConfirm = (confirmedName_1 +" "+ confirmedName_2);
    if (guestList.includes(confirmedName_1)){
        // alert ("Welcome! " + confirmedName_1 )
      let anser = document.getElementById("Welcome").innerText;    
      document.getElementById("Welcome").innerText = ("Welcome! " + confirmedName_1);
     } else document.getElementById("Welcome").innerText = ("Sorry your name is not on the guest List Kindly Register")
 }

 
 

//  "Henry fagbenro","Ahmed oyetoro","Tunde olumuyiwa","Muyiwa johnson","James ayodele", "Clinton fagbenro", "Adetunji fagbenroo", "Micheal farounbi"
