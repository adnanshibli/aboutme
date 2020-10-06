// 'use strict';
// var asd1,
//     asd2,
//     asd3,
//     asd4,
//     asd5,
//     yourGrade = 0;



// alert('Hello, we are now going on a guess game to know about me');
// var Name = prompt("Type in your name");
// alert("Hello " + Name);
// alert('now we will start our game ' + Name +' please answer by yes or no')

// function qus1(){
//     var qustion1 = prompt("Am I a Civil Engineer");
//     qustion1 = qustion1.toLowerCase();
//     if (qustion1 == "yes" || qustion1 == "y") {
//         asd1 = "correct answer";
//         yourGrade = yourGrade + 1;
//     }
//     else if (qustion1 == "no" || qustion1 == "n") {
//         asd1 = "wrong answer";
//     }
//     else {
//         asd1 = "you dont insert (yes/y) or (no/n) try again";
//     }
//     console.log (" qustion1 have a " + asd1);
//     alert(" qustion1 have a " + asd1);
//     }
//     qus1();
// function qus2(){
//     var qustion2 = prompt("is mansaf the best food for me?");
//     qustion2 = qustion2.toLowerCase();
//     if (qustion2 == "yes" || qustion2 == "y") {
//         asd2 = "correct answer";
//         yourGrade = yourGrade + 1;
//     }
//     else if (qustion2 == "no" || qustion2 == "n") {
//         asd2 = "wrong answer";
//     }
//     else {
//         asd2 = "you dont insert (yes/y) or (no/n) try again";
//     }
//     console.log (" qustion2 have a " + asd2);
//     alert(" qustion2 have a " + asd2);
//     }
//     qus2();
// function qus3(){
//     var qustion3 = prompt("do I like managers?");
//     qustion3 = qustion3.toLowerCase();
//     if (qustion3 == "no" || qustion3 == "n") {
//         ans3 = "correct answer";
//         yourGrade = yourGrade + 1;
//     }
//     else if (qustion3 == "yes" || qustion3 == "y") {
//         asd3 = "wrong answer";
//     }
//     else {
//         asd3 = "you dont insert (yes/y) or (no/n) try again";
//     }
//     console.log (" qustion3 have a " + asd3);
//     alert(" qustion3 have a " + asd3);
//     }
//     qus3();
// function qus4(){
//     var qustion4 = prompt("do I like watch football games?");
//     qustion4 = qustion4.toLowerCase();
//     if (qustion4 == "yes" || qustion4 == "y") {
//         asd4 = "correct answer";
//         yourGrade = yourGrade + 1;
//     }
//     else if (qustion4 == "no" || qustion4 == "n") {
//         asd4 = "wrong answer";
//     }
//     else {
//         asd4 = "you dont insert (yes/y) or (no/n) try again";
//     }
//     console.log (" qustion4 have a " + asd4);
//     alert(" qustion4 have a " + asd4);
//     }
//     qus4();
// function qus5(){
//     var qustion5 = prompt("Is teaching the jop what I like?");
//     qustion5 = qustion5.toLowerCase();
//     if (qustion5 == "yes" || qustion5 == "y") {
//         asd5 = "correct answer";
//         yourGrade = yourGrade + 1;
//     }
//     else if (qustion5 == "no" || qustion5 == "n") {
//         asd5 = "wrong answer";
//     }
//     else {
//         asd5 = "you dont insert (yes/y) or (no/n) try again";
//     }
//     console.log(" qustion5 have a " + asd5);
//     alert(" qustion5 have a " + asd5);
//     }
//     qus5();

// alert ("Now you can make many attempte in these qustions!  lets go.")
// function qus6(){
//     for (var i = 1; i <= 4; i++) {
    
//         var qustion6 = prompt("Guess how many members of my family? ...." + "(attempt " + i + " of 4)");
//         if (qustion6 == 6) {
//             alert("true answer");
//     console.log ("true answer")
//             yourGrade = yourGrade + 1;
//             break;
//         }
//         else if (qustion6 < 6 && i < 4) {
//             alert("Your answer too low ... try again")
//         }
//         else if (qustion6 > 6 && i < 4) {
//             alert("Your answer too high ... try again")
    
//         }
//         else if (i == 4) {
//             alert("Your attempts have been consumed .... the aswer is 6")
    
//         }
    
//     }
//     }
//     qus6();
// function qustion7(){
//     var myseires = ["game of thrones" , "breaking bad" , "la casa de papel", "prison break" , "Peaky plinders"];
    
//     mainLoop:
//     for (var y = 1 ; y <=6 ; y++){
//         var qustion7 = prompt("Guess what is the best series for me?" + "(attempt " + y + " of 6)");
    
        
//         for (var x = 0 ; x < myseires.length; x++){
        
//             if (qustion7.toLowerCase() === myseires[x]){ 
//                 alert("true answer");
//                 console.log ("true answer")
//                 yourGrade = yourGrade + 1;
//                 break mainLoop ; 
//             }
           
//         }
//         if (y == 6){
//             alert("Your attempts have been finished ! the aswers is " + myseires)
//         }
//         else {
//             alert ("wrong answer .... try again")
//         }
    
//     }
//     }
//     qustion7();
//     alert("Now your Grade is " + yourGrade + " out of 7")
//     alert("Thank you for your time " + yourName);
    