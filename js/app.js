'use strict';

var userAns1, userAns2, userAns3, userAns4, userAns5, userAns6, userAns7, yaBrokedIt, correct, incorrect;

yaBrokedIt = ('Its a yes or no question. Type y or n. You could even type yes or no. Just not what you did.');
correct = 0;
incorrect = 0;
console.log('Correct and incorrect will track the number of answers and their values. They should both start at 0');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);

alert('Hey I am holding you against your will until you finish this about me minigame');

function q1() {
  userAns1 = prompt('Am I artistc?').toLowerCase();
  console.log(userAns1);

  if(userAns1 === 'y' || userAns1 === 'yes')
  {
    alert('My dear friend, I have no artistic ability or talent, but all the appreciation in the world for art.');
    incorrect++;
    console.log('The user\'s answer to question 1: ' , userAns1);
  }
  else if(userAns1 === 'n' || userAns1 === 'no')
  {
    alert('Shifu please teach me <3');
    correct++;
    console.log('The user\'s answer to question 1: ' , userAns1);
  }
  else{ alert(yaBrokedIt);}
}
q1();

function q2() {
  userAns2 = prompt('Have you had any coding experiance?').toLowerCase();
  console.log(userAns2);

  if(userAns2 === 'y'|| userAns2 === 'yes')
  {
    alert('Wowie, thats fantastic. I have some experiance in Java!');
    correct++;
    console.log('The user\'s answer to question 2: ' , userAns2);
  }
  else if(userAns2 === 'n' || userAns2 === 'no')
  {
    alert('Well prepare for a world of hurt then buddy.');
    incorrect++;
    console.log('The user\'s answer to question 2: ' , userAns2);
  }
  else{ alert(yaBrokedIt);}
}
q2();

function q3() {
  userAns3 = prompt('Are you scared to look dumb and ask for help?').toLowerCase();
  console.log(userAns3);
  if(userAns3 === 'y'|| userAns3 === 'yes')
  {
    alert('That is normal, I promise you I am right there with ya!');
    correct++;
    console.log('The user\'s answer to question 3: ' , userAns3);
  }
  else if(userAns3 === 'n' || userAns3 === 'no')
  {
    alert('Well you are just exuberating confidence');
    incorrect++;
    console.log('The user\'s answer to question 3: ' , userAns3);
  }
  else{ alert(yaBrokedIt);}
}
q3();

function q4() {
  userAns4 = prompt('Are you getting enough rest?').toLowerCase();
  console.log(userAns4);

  if(userAns4 === 'y'|| userAns4 === 'yes')
  {
    alert('Very jealous :S');
    incorrect++;
    console.log('The user\'s answer to question 4: ' , userAns4);
  }
  else if(userAns4 === 'n' || userAns4 === 'no')
  {
    alert('High five... and naps');
    correct++;
    console.log('The user\'s answer to question 4: ' , userAns4);
  }
  else{ alert(yaBrokedIt);}
}
q4();

function q5() {
  userAns5 = prompt('Do you enjoy art?').toLowerCase();
  console.log(userAns5);

  if(userAns5 === 'y'|| userAns5 === 'yes')
  {
    alert('I love every form of art!');
    correct++;
    console.log('The user\'s answer to question 5: ' , userAns5);
  }
  else if(userAns5 === 'n' || userAns5 === 'no')
  {
    alert('Wat. Why? How could anyone not... Um, I gottat go.');
    incorrect++;
    console.log('The user\'s answer to question 5: ' , userAns5);
  }
  else{ alert(yaBrokedIt);}
}
q5();






function q6() {
  var totAttempts = 4;
  var rightAns = 60;
  userAns6 = prompt('What is my favorite number? I\'ll give you a hint its from 1 to 100!');
  while(totAttempts > 1){
    if(parseInt(userAns6) === rightAns)
    {
      alert('Dammmmmmmmn, how\'d you know?! You must be a cousin!');
      correct++;
      totAttempts = 0;
      break;
    }
    else if(userAns6 > rightAns)
    {
      userAns6 = prompt('You are aiming too high');
      totAttempts--;
    }
    else if(userAns6 < rightAns)
    {
      userAns6 = prompt('You are going too low!');
      totAttempts--;
    }
    else{ userAns6 = prompt('You have to enter a number between 1 - 100!');}
  }
}

q6();



function q7() {

  var arrayOfHobbies = ['music','games','excercise', 'nature', 'food', 'cooking', 'exploring', 'culture', 'philosiphy', 'coffee', 'fashion', 'business'];
  var trysLeft = 6;
  var correctness = false;


  while (trysLeft > 0 && correctness === false)
  {

    var userAns7 = prompt('What are some things that I like to do?').toUpperCase();

    if (arrayOfHobbies.includes(userAns7))
    {
      correctness = true;
      alert('You are right!');
      alert('Here are all of the states I\'ve lived in!\n ' + arrayOfHobbies.join(','));
      break;
    }
    else
    {
      trysLeft--;
      alert('Wrong! Try again, ' + trysLeft + ' trys left');
    }

  }

  if (trysLeft === 0)
  {
    alert('You ran out of attempts!');
    alert('Here is all of the things that I have interests in!\n ' + arrayOfHobbies.join(','));
  }

}

q7();

console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);