// Business Logic --------------------------------------------
var round = 1;
var turnTotal = 0;

function GrandTotal() {
  this.player1GrandTotal = 0,
  this.player2GrandTotal = 0,
  this.playerId = 1
}

GrandTotal.prototype.updateTotal = function(turnTotal) {
  if (this.playerId === 1) {
    this.player1GrandTotal += turnTotal;
    this.switchPlayer();
  } else if (this.playerId === 2) {
    this.player2GrandTotal += turnTotal;
    round += 1;
    if (round === 4) {
      endOfGame();
    } else {
    this.switchPlayer();
    }
  }
}

GrandTotal.prototype.switchPlayer = function() {  
  if (this.playerId === 1) {
    this.playerId = 2;
    turnTotal = 0;
  } else if (this.playerId === 2) {
    this.playerId = 1;
    turnTotal = 0;
  }
}

var eachRoll = function() {
  var rollTotal = 0;
  var randomGenerator = Math.floor(Math.random() * 6) + 1;
  if (randomGenerator === 1) {
    return rollTotal = 0;
  } else {
    return randomGenerator;
  }
  
}

var roundTotal = function() {
 var rollResult = eachRoll();
 if (rollResult === 0){
  turnTotal = 0;
  grandTotal.updateTotal(turnTotal);
  alert("hit 1"); 
  }
  else {
    turnTotal += rollResult;
    alert(turnTotal);
  } 
}



// User Interface Logic ------------------------------
var grandTotal = new GrandTotal();
var endOfGame = function() {
  $(".gameover").show();
}

var refreshScores = function() {
  $(".playerOneScore").html(grandTotal.player1GrandTotal);
  $(".playerTwoScore").html(grandTotal.player2GrandTotal);
  $(".round").html(round);
}


$(document).ready(function() {

  $("button#roll").click(function() {
    roundTotal();
    refreshScores();
  })
  //Update hold in the future so two places are not updating the same variable-best practice
  $("button#hold").click(function() {  
    grandTotal.updateTotal(turnTotal);
    refreshScores();
  })


})





// // Example User Interface Logic ---------
// var addressBook = new AddressBook();

// function displayContactDetails(addressBookToDisplay) {
//   var contactsList = $("ul#contacts");
//   var htmlForContactInfo = "";
//   addressBookToDisplay.contacts.forEach(function(contact) {
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "  " + contact.email + " " + "</li>" ;
//   contactsList.html(htmlForContactInfo);
// });
// contactsList.html(htmlForContactInfo);
// };

// function showContact(contactId) {
//   var contact = addressBook.findContact(contactId);
//   $("#show-contact").show();
//   $(".first-name").html(contact.firstName);
//   $(".last-name").html(contact.lastName);
//   $(".phone-number").html(contact.phoneNumber);
//   $(".email").html(contact.email);
//   //$(".phy-address").html(contact.phyAddress);
//   var buttons = $("#buttons");
//   buttons.empty();
//   buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
// }

// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     showContact(this.id);
//   });
//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// };

// $(document).ready(function() {
//   attachContactListeners();
//   $("form#new-contact").submit(function() {
//  
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var inputtedPhoneNumber = $("input#new-phone-number").val();
//     var inputtedEmailAddress = $("input#emailAddress").val();
//     //var inputtedphysicalAddress = $("input#physicalAddress").val();
//     var streetNo = $("input#streetNo").val();
//     var city = $("input#city").val();
//     var state = $("input#state").val();
//     var zip = $("input#zip").val();
//     var oStreetNo = $("input#oStreetNo").val();
//     var oCity = $("input#oCity").val();
//     var oState = $("input#oState").val();
//     var oZip = $("input#oZip").val();

//     alert(inputtedFirstName + inputtedLastName + inputtedPhoneNumber + inputtedEmailAddress);
//     alert(streetNo+city+state+zip+oStreetNo+oCity+oZip+oState);
//    // $("input#new-first-name").val("");
//     //$("input#new-last-name").val("");
//    // $("input#new-phone-number").val("");
//     //$("input#emailAddress").val("");
//     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress);
//     var homeAddress = new Address(streetNo,city,state,zip);
//     var officeAddress = new Address(oStreetNo,oCity,oState,oZip);
//     addressBook.addContact(newContact, homeAddress, officeAddress);
//     displayContactDetails(addressBook);
//   })
// })
