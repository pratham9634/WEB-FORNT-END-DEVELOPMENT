const mytext = document.getElementById("mytext"); // taking input for user 
const mysubmit = document.getElementById("submit"); // they submit input by user
const result =document.getElementById("result");
let age;

mysubmit.onclick = function(){ // if the user sumit the age they use this function to show the result
 age = mytext.value;// it use store the value by given value
 age = Number(age)// the input is string it convert number 
    if(age>100){
        console.log("You are to old for driving dude");
        result.textContent =  "You are to old for driving dude" // it show the result in webpage by give id
    }
    else if (age< 0){
        console.log("you are just born now");
        result.textContent ="you are just born now"
    } 
    else if(age<18){
        console.log("you are too young to drive");
        result.textContent ="you are too young to drive"
    }
    else{
        console.log("you are eligible to drive");
        result.textContent ="you are eligible to drive"
    }
}



