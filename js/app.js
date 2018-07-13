'use strict';

var a1, a2, a3, a4, a5, a6,/* a7,*/ yaGoofed, correct, incorrect;
//TEST

yaGoofed = ('Its a yes or no question. Type y or n. You could even type yes or no. Just not what you did.');
correct = 0;
incorrect = 0;
console.log('Correct and incorrect will track the number of answers and their values. They should both start at 0');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);

alert('Hey I am holding you against your will until you finish this about me minigame');

function q1() {
  a1 = prompt('Am I artistc?').toLowerCase();
  console.log(a1);

  if(a1 === 'y' || a1 === 'yes')
  {
    alert('My dear friend, I have no artistic ability or talent, but all the appreciation in the world for art.');
    incorrect++;
    console.log('The user\'s answer to question 1: ' , a1);
  }
  else if(a1 === 'n' || a1 === 'no')
  {
    alert('Shifu please teach me <3');
    correct++;
    console.log('The user\'s answer to question 1: ' , a1);
  }
  else{ alert(yaGoofed);}
}
q1();

function q2() {
  a2 = prompt('Have you had any coding experiance?').toLowerCase();
  console.log(a2);

  if(a2 === 'y'|| a2 === 'yes')
  {
    alert('Wowie, thats fantastic. I have some experiance in Java!');
    correct++;
    console.log('The user\'s answer to question 2: ' , a2);
  }
  else if(a2 === 'n' || a2 === 'no')
  {
    alert('Well prepare for a world of hurt then buddy.');
    incorrect++;
    console.log('The user\'s answer to question 2: ' , a2);
  }
  else{ alert(yaGoofed);}
}
q2();

function q3() {
  a3 = prompt('Are you scared to look dumb and ask for help?').toLowerCase();
  console.log(a3);
  if(a3 === 'y'|| a3 === 'yes')
  {
    alert('That is normal, I promise you I am right there with ya!');
    correct++;
    console.log('The user\'s answer to question 3: ' , a3);
  }
  else if(a3 === 'n' || a3 === 'no')
  {
    alert('Well you are just exuberating confidence');
    incorrect++;
    console.log('The user\'s answer to question 3: ' , a3);
  }
  else{ alert(yaGoofed);}
}
q3();

function q4() {
  a4 = prompt('Are you getting enough rest?').toLowerCase();
  console.log(a4);

  if(a4 === 'y'|| a4 === 'yes')
  {
    alert('Very jealous :S');
    incorrect++;
    console.log('The user\'s answer to question 4: ' , a4);
  }
  else if(a4 === 'n' || a4 === 'no')
  {
    alert('High five... and naps');
    correct++;
    console.log('The user\'s answer to question 4: ' , a4);
  }
  else{ alert(yaGoofed);}
}
q4();

function q5() {
  a5 = prompt('Do you enjoy art?').toLowerCase();
  console.log(a5);

  if(a5 === 'y'|| a5 === 'yes')
  {
    alert('I love every form of art!');
    correct++;
    console.log('The user\'s answer to question 5: ' , a5);
  }
  else if(a5 === 'n' || a5 === 'no')
  {
    alert('Wat. Why? How could anyone not... Um, I gottat go.');
    incorrect++;
    console.log('The user\'s answer to question 5: ' , a5);
  }
  else{ alert(yaGoofed);}
}
q5();

function q6() {
  var totAttempts = 4;
  var rightAns = 60;

  a6 = prompt('What is my favorite number? I\'ll give you a hint its from 1 to 100!');
  while(totAttempts > 0){
    if(parseInt(a6) === rightAns)
    {
      alert('Dammmmmmmmn, how\'d you must be a cousin!');
      correct++;
      break;
    }
    else if(a6 > rightAns)
    {
      a6 = prompt('You are aiming too high');
      totAttempts--;
    }
    else if(a6 < rightAns)
    {
      a6 = prompt('You are going too low!');
      totAttempts--;
    }
    else{ a6 = prompt('You have to enter a number between 1 - 100!');}
  }
}

q6();


/*

// function q7() {
//   a7 = prompt('Where have I been?');

//   if(a7 === )
//   {
//     alert('I love every form of art!');
//     correct++;
//     console.log('The user\'s answer to question 5: ' , a7);
//   }
//   else if(a7 === 'n' || a7 === 'no')
//   {
//     alert('Wat. Why? How could anyone not... Um, I gottat go.');
//     incorrect++;
//     console.log('The user\'s answer to question 5: ' , a7);
//   }
//   else{ alert(yaGoofed);} 
// }
// q7();

*/

console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);