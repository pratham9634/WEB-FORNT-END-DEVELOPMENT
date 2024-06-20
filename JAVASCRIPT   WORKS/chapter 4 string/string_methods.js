// string methods = allow to manupalte  and work text (sting)


let username = "assasincode ";

//They assaing the index it's find and show charcter value
console.log(username.charAt(0));  

//They assaing the charcter value it's find and show index value
console.log(username.indexOf("i")); 

//They show lengeth of string
console.log(username.length); 

// They remove the wite spaces
console.log(username.trim())

//They adjust the all value in upercase
console.log(username.toUpperCase());

//They adjust the all value in lowercase
console.log(username.toLowerCase());

//They repeat the string over the given time
console.log(username.repeat(3))

// The is start the string givne charchter say that boolean type 
let result = username.startsWith(" ");
if(result){
    console.log("your username is not start with space");
}
else{
    console.log(username)
}

// The is end the string givne charchter say that boolean type 

let result2 = username.endsWith(" ");
if(result2){
    console.log("your username is not start with space");
}
else{
    console.log(username);
}

//they replace the charchter to athor charchter
let phonenumber = "1234-566-9999-88";
phonenumber = phonenumber.replace("-","/");
console.log(phonenumber);