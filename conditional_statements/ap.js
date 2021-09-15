var answer = document.body.querySelector(".answer");


var q_one =Number(prompt("enter the first number bestie"));


if(Number.isNaN(q_one)){
    answer.innerHTML="that is not a number dumbass. refresh and try again, but use your head.";
die;
}
var operator=(prompt("enter the operator you wanna use"))
if(operator=="+"||operator=="-"||operator=="*"||operator=="/"){
}else{
    answer.innerHTML="that is not an operator dumbass. refresh and try again, but use your head.";
    die;
}
var q_two =Number(prompt("enter the second number bestie"));


if(Number.isNaN(q_one)) {
    answer.innerHTML = "that is not a number dumbass. refresh and try again, but use your head.";
    die;
}
   if (operator=="+"){
       var final_add=(q_one + q_two);
       answer.innerHTML=`The answer is ${final_add}`
   }else if (operator=="+"){
       var final_sub=(q_one - q_two);
       answer.innerHTML=`The answer is ${final_sub}`
   }else if (operator=="*"){
       var final_mul=(q_one * q_two);
       answer.innerHTML=`The answer is ${final_mul}`
   }else if (operator=="-"){
       var final_divi=(q_one / q_two);
       answer.innerHTML=`The answer is ${final_divi}`
   }