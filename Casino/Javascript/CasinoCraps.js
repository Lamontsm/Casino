/**
 * Created by Steve Lamont on 11/6/13.
 */


/* First let's roll the dice */
var dice1, dice2;

/* test distribution of dice rolls */
var Histogram = [0,0,0,0,0,0,0,0,0,0,0,0], sum;

for (var i = 0; i < 10; i++) {
    dice_roll();
    sum=dice1+dice2;
    Histogram[sum-1]++;
}
document.write("<p></p>");
document.write(Histogram);
/*
for (var j=1; j < 13; j++) {
    document.write(<p></p>);
    document.write("Sum of dice: "+j+"     Results: "+Histogram[j-1]);
}
*/
document.writeln("<image src='Graphics/pair-of-dice.jpg'></image>");
document.write("<p></p>");
dice_roll();
var total=dice1+dice2;
var mark=total;
var play_on=true;
document.write("<p></p>");
document.writeln("You rolled a..."+total);
document.write("<p></p>");

/* Let's see if you won on the first roll */

if ((total==7) || (total==11)) {
    document.write("You win!");
    play_on=false;
}
if ((total==2) || (total==12)) {
    document.write("You crapped out!");
    play_on=false;
}
/* Then let's keep rolling!  */
if (play_on==true){
    document.write("Let's keep rolling...");
}
while (play_on==true) {
    dice_roll();
    total=dice1+dice2;
    document.write("<p></p>");
    document.writeln("You rolled a..."+total);

    if (total==7) {
        document.write("You lose!");
        play_on=false;
    }
    if (total==mark) {
        document.write("You win!");
        play_on=false;
    }
}


function dice_roll()
   {
   /* this rolls the two dice and prints the outcome*/
    dice1 = Math.round(.4999+6*Math.random());
    dice2=Math.round(.4999+6*Math.random());
   document.write("<p></p>");
   document.write("Die 1: "+dice1+"   Die 2: "+dice2);
   }