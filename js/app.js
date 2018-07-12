'use strict';

var a1, a2, a3, a4, a5, wrong, correct, incorrect;

wrong = ('Its a yes or no question, bruh. Type y or n');
correct = 0;
incorrect = 0;
console.log('Correct and incorrect will track the number of answers and their values. They should both start at 0');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);

a1 = prompt('HEY, are you a stressed out developer?!');
a1.toLowerCase();

if(a1 === 'y' || a1 === 'yes')
{
  alert('Good, you should be. >:(');
  correct++;
  console.log('The user\'s answer to question 1: ' , a1);
}
else if(a1 === 'n' || a1 === 'no')
{
  alert('Shifu please teach me <3');
  incorrect++;
  console.log('The user\'s answer to question 1: ' , a1);
}
else{ alert(wrong);}

a2 = prompt('Have you had any coding experiance?');
a2.toLowerCase();

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
else{ alert(wrong);}

a3 = prompt('Are you scared to look dumb and ask for help?');
a3.toLowerCase();

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
else{ alert(wrong);}

a4 = prompt('Are you getting enough rest?');
a4.toLowerCase();

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
else{ alert(wrong);}

a5 = prompt('Do you enjoy art?');
a5.toLowerCase();

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
else{ alert(wrong);}

console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);