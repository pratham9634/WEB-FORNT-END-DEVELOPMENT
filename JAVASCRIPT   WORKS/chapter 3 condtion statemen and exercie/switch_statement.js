//switch is use in case of the if else is to long 

let textscore = 23; // let creat variable to check the case
let grade;

switch (textscore) { // provide the key to check the all case 
    case textscore > 90:
        grade = "+A"
        break;
    case textscore > 80:
        grade = "+B"
        break;
    case textscore > 70:
        grade = "+C"
        break;
    case textscore > 60:
        grade = "+D"
        break;
    case textscore > 50:
        grade = "+E"
        break;

    default:            // if the all case are not match so excuate this
        grade = "+F"
        break;
}

console.log(grade);