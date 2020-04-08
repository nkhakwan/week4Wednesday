function GrandTotal() {
  this.player1GrandTotal = 0,
  this.player2GrandTotal = 0
}

GrandTotal.prototype.updateTotal = function(turnTotal, playerId) {
  if (playerId === 1) {
    this.player1GrandTotal += turnTotal;
  } else if (playerId === 2) {
    this.player2GrandTotal += turnTotal;
  }
}


var eachRoll = function(){
  var randomGenerator = Math.floor(Math.random() * 6) +1;
if (randomGenerator === 1) {
  rollTotal = 0;
} else {
  rollTotal += randomGenerator;
  }
return rollTotal;
}




$(document).ready(function(){
  var player1Id = 1;
  var player2Id = 2;
  $("button#roll").click(function(){
    
  })
})





// User Interface Logic ---------
var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "  " + contact.email + " " + "</li>" ;
  contactsList.html(htmlForContactInfo);
});
contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email").html(contact.email);
  //$(".phy-address").html(contact.phyAddress);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmailAddress = $("input#emailAddress").val();
    //var inputtedphysicalAddress = $("input#physicalAddress").val();
    var streetNo = $("input#streetNo").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var oStreetNo = $("input#oStreetNo").val();
    var oCity = $("input#oCity").val();
    var oState = $("input#oState").val();
    var oZip = $("input#oZip").val();

    alert(inputtedFirstName + inputtedLastName + inputtedPhoneNumber + inputtedEmailAddress);
    alert(streetNo+city+state+zip+oStreetNo+oCity+oZip+oState);
   // $("input#new-first-name").val("");
    //$("input#new-last-name").val("");
   // $("input#new-phone-number").val("");
    //$("input#emailAddress").val("");
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress);
    var homeAddress = new Address(streetNo,city,state,zip);
    var officeAddress = new Address(oStreetNo,oCity,oState,oZip);
    addressBook.addContact(newContact, homeAddress, officeAddress);
    displayContactDetails(addressBook);
  })
})
