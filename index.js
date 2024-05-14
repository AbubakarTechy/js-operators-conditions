_____________________//Conditional Statements

let age=25;
if(age>18){
    console.log("He can Vote");
} else{
    console.log("He cannot vote");
}

//ODD --> EVEN code

let num=10;
if(num%2===0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

//_____TERNARY OPERATOR

let agee=25;
let result= agee>18 ? "Adult" : "Not adult";
console.log(result);

//______Q==1 check num is mul of 5 or not

let numb=prompt("Enter a number:");
if(numb%5==0){
    console.log("Number is mul of 5");
    
} else {
    console.log("Number is not mul of 5");
}


//______Q==2 GRADES CHECK


let score=prompt("Enter Marks:");
if(score>=80 && score<=100){
    console.log("Grade A");
} else if (score>=70 && score<89){
    console.log("Grade B");
} else if(score>=60 && score<69){
        console.log("Grade C");
}else if(score>=50 && score<59){
            console.log("Grade D");
} else {
              console.log("Grade F");
}
