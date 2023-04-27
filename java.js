"use strict";

// light and dark mode
let button = document.getElementById("color-button");
let body = document.getElementById("body");



//event listeners
button.addEventListener("click", function(){

// add conditional to see what mode you are on currently
 if(body.classList.contains("light")){
    body.classList.add("dark");
    body.classList.remove("light");
 }else{
    body.classList.add("light");
    body.classList.remove("dark");
 }
  
});

//user object created for form
let newUser = {
    userName: "",
    userPhoneNum: "",
    userEmail: "",
    userMessage: "",
    getUser: function() {
      return "Your Name: " + this.userName + "<br>Phone Number: " + this.userPhoneNum + "<br>Email: " + this.userEmail + "<br>Your Message: " + this.userMessage;
    }
  };

//form validation
function validateForm(event){
    //prevent default form submission
    event.preventDefault();
    
    //access the form itself and save in a variable
    let myForm = document.getElementById("myForm");
    
    //access all of the error spans to be used as error message holders
    let errorSpans = document.querySelectorAll(".message");
    
    //boolean variable used to track form validity
    let isValid = true;
    
    //reset display of the error inputs before validating
    let errorInputs = document.getElementsByClassName("errorInput");
    
    for(let input of errorInputs){
      input.classList.remove("errorInput");
    }
    //reset the display of the error message spans
    errorSpans.forEach(function(span){
      span.classList.remove("error");
    });
    
    //hide the success area on the page - this is what shows the user what they submitted in the form when submission is successful
    let output = document.getElementById("formSub");
    output.innerHTML = "";
    
    //regular expressions to validate the full name, phone number, and email address
    let fNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    let pNumberRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    let eMailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    // inputs
    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");

    //validate full name, it should not be blank and should match the full name regex
    if(!(fNameRegex.test(fullName.value))){
      //on error, add the errorInput class to the input itself
      fullName.classList.add("errorInput");
      //on error, add the error class to the span associated with this input that has the message class
      errorSpans[0].classList.add("error");
      //set the form validation tracking variable to false
      isValid = false;
    }else {
        newUser.userName = fullName.value;
      }

    //validates phone number and checks if user clicked this option making it required 
    if(myForm.phoneContact.checked) {
        if(!(pNumberRegex.test(phone.value))){
            //on error, add the errorInput class to the input itself
            phone.classList.add("errorInput");
            //on error, add the error class to the span associated with this input that has the message class
            errorSpans[1].classList.add("error");
            //set the form validation tracking variable to false
            isValid = false;
        }else {
            newUser.userPhoneNum = phone.value;
          }
      }

    //validates email address and checks if user clicked this option making it required 
    else if(myForm.emailContact.checked){
        if(!(eMailRegex.test(myForm.email.value))){
            //on error, add the errorInput class to the input itself
            myForm.email.classList.add("errorInput");
            //on error, add the error class to the span associated with this input that has the message class
            errorSpans[2].classList.add("error");
            //set the form validation tracking variable to false
            isValid = false;
        }else {
            newUser.userEmail = email.value;
          }
      }else{
        // if the user unchecks all radios, we have an error
        isValid = false;
        prefContact.innerHTML = "Please choose a contact method.";
      }

    //validate message, it should not be blank
    if(myForm.message.value.length === 0){
      //on error, add the errorInput class to the input itself
      myForm.message.classList.add("errorInput");
      //on error, add the error class to the span associated with this input that has the message class
      errorSpans[3].classList.add("error");
      //set the form validation tracking variable to false
      isValid = false;
    }else {
        newUser.userMessage = message.value;
      }
    
    //if the form is valid, submit it and reset
    if(isValid){
      //display the 'success' section to the user
      document.getElementById("success").classList.remove("hide");
      document.getElementById("success").classList.add("show");

        //display the user's info from the object to the page
        output.innerHTML = newUser.getUser();
      
      //clear the form and prepare for more input
      fullName.value = "";
      phone.value = "";
      email.value = "";
      message.value = "";
      myForm.fullName.focus();
    }
  }

  document.getElementById("mySubmit").addEventListener("click", validateForm);

// product display
let plantBtn1 = document.getElementById('plantBtn1');
let plantBtn2 = document.getElementById('plantBtn2');
let plantBtn3 = document.getElementById('plantBtn3');

//event listener for buttons
plantBtn1.addEventListener('click', function() {
    let plant1 = document.getElementById("plant1");
    let plant2 = document.getElementById("plant2");
    let plant3 = document.getElementById("plant3");

    plant2.classList.add('hide');
    plant3.classList.add('hide');
    plant1.classList.remove('hide');
});

plantBtn2.addEventListener('click', function() {
    let plant1 = document.getElementById("plant1");
    let plant2 = document.getElementById("plant2");
    let plant3 = document.getElementById("plant3");

    plant1.classList.add('hide');
    plant3.classList.add('hide');
    plant2.classList.remove('hide');
});

plantBtn3.addEventListener('click', function() {
    let plant1 = document.getElementById("plant1");
    let plant2 = document.getElementById("plant2");
    let plant3 = document.getElementById("plant3");

    plant1.classList.add('hide');
    plant2.classList.add('hide');
    plant3.classList.remove('hide');
}); 

// User Game Code

//random number generator function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function game(){
    //get the two spans where we'll display the numbers, and the one for the message
    let dieDisplay1 = document.getElementById("random1");
    let gameMessage = document.getElementById("gameMsg");
    let userInput = parseInt(userNum.value);
    
    //generate the random number between 1 and 10
    let die1 = getRandomNumber(1, 10);
    
    //display the number to the screen
    dieDisplay1.innerHTML = die1;
    
    //see if user and our number match, then display winning or losing message
    if (die1 === userInput){
      gameMessage.innerHTML = "You win a free plant!";
    }else{
      gameMessage.innerHTML = "You lose, Try Again.";
    }
  }
  //event listener 
  document.getElementById("gamePlay").addEventListener("click", game);