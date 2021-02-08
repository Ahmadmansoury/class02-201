'use strict';

/* lab02 201 */

let UserName = prompt('What is your name?');
//console.log(UserName);
alert('Welcome to jumanji ' + UserName + " let the journey start !");

let Q1 = prompt('do you think jordan is a nice country?');
Q1 = Q1.toUpperCase();

if (Q1 == "YES" || Q1 == "Y") {

    alert('yes, it is very nice');
}
else if (Q1 == "NO" || Q1 == "Y") {
    alert("It is wonderfull");
}
//console.log(Q1);

let Acmilan = prompt("do you think milan is the best football club in italy?");

Acmilan = Acmilan.toUpperCase();

if (Acmilan == "YES" || Acmilan == "Y") {
    alert('be sure, it is the best');
}
else if (Acmilan == "NO" || Acmilan == "N") {
    alert("dont try, it is the best");
}
console.log(Acmilan);



let history = prompt("do you think the history is very important to pepole?");

history = history.toUpperCase();
if (history == "YES" || history == "Y") {
    alert(' sure, it is ');
}
else if (history == "NO" || history == "N") {
    alert("No, it is very very important");
}
console.log(history);


let mansaf = prompt("on your opineon do you think that the mansaf traditional jordanian food?");

mansaf = mansaf.toUpperCase();
if (mansaf == "YES" || mansaf == "Y") {
    alert('exatly, it is ');
}
else if (mansaf == "NO" || mansaf == "N") {
    alert("No, it is jordanian food");
}
console.log(mansaf);


let maldini = prompt("Is Maldini the best defender in history?");

maldini = maldini.toUpperCase();

if (maldini == "YES" || maldini == "Y") {
    alert('incorrect, he is the best');
}
else if (maldini == "NO" || maldini == "N") {
    alert("No, he is the best");
}
console.log(maldini);

alert("the journey end " + UserName + " forzza milan ")