"use strict";

var q1, q2, q3, q4, q5, wrong;

wrong = ("Its a yes or no question, bruh. Type y or n");

q1 = prompt("HEY, are you a stressed out developer?! Type y or n to answer!")
if(q1.toLowerCase() === "y")
{
    alert("Good, you should be. >:(");
    console.log(q1);
}
else if(q1.toLowerCase() === "n")
{
    alert("Shifu please teach me <3");
    console.log(q1);
}
else{ alert(wrong)};

q2 = prompt("Do you want to bang your head onto the table ")
if(q2.toLocaleLowerCase() === "y"){
    alert("Good, go ahead and start. Harder. BREAK THE TABLE. RIOT. REEEEEEEEEEEEEEE");
    console.log(q2);
}else if (q2.toLowerCase() === "n"){
    alert("You may not like it, but you are what peak performance looks like");
    console.log(q2);
} else{
    alert(wrong);
}

q3 = prompt("Are you tired?")
if(q3.toLowerCase() === "y"){
    alert("same");
    console.log(q3);
}else if(q3.toLowerCase() === "n"){
    alert("You were responsible!");
    console.log(q3);
}else{ alert(wrong)};

q4 = prompt("Are you hungry ")
if(q4.toLowerCase() === "y"){
    alert("Go get some food.");
    console.log(q4);
}else if(q4.toLowerCase() === "n"){
    alert("Not eveyone can be that fortunate >:(");
    console.log(q4);
}else{ alert(wrong)};

q5 = prompt("Do you ever feel like breaking down? Do you ever feel out of place? Like somehow you just don't belong and no one understands you? Do you ever wanna run away? Do you lock yourself in your room? With the radio on turned up so loud that no one hears you screaming")
if(q5.toLowerCase() === "y"){
    alert("No you don't know what it's like when nothing feels all right. You don't know what it's like to be like me, to be hurt, to feel lost, to be left out in the dark, to be kicked when you're down, to feel like you've been pushed around, to be on the edge of breaking down, and no one's there to save you. No you don't know what it's like. Welcome to my life");
    console.log(q5);
}else if(q5.toLowerCase() === "n"){
    alert("GO LISTEN TO SIMPLE PLAN'S: WELCOME TO MY LIFE");
    console.log(q5);
}else{ alert(wrong)};
