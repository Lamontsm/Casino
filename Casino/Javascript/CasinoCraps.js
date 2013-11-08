/**
 * Created by Steve Lamont on 11/6/13.
 */

/* First let's roll the dice */
var dice1;
var dice2;
document.writeln("<image src='Graphics/pair-of-dice.jpg'></image>");
document.write("<p></p>");
dice_roll();
var total=dice1+dice2;
document.write("<p></p>");
document.writeln("You rolled a..."+total);
document.write("<p></p>");

/* Let's see if you won on the first roll */

If ((total==7) || (total==11)) {
    document.write("You win!");
    play_on=false
}
If ((total==2) || (total==12)) {
    document.write("You crapped out!");
    play_on=false;
}
/* Then let's keep rolling!
While (var play_on=true) {



} */


function dice_roll()
   {
   /* this rolls the two dice and prints the outcome*/
    dice1 = Math.round(6*Math.random());
    dice2=Math.round(6*Math.random());
   document.write("Die 1: "+dice1+"   Die 2: "+dice2);

   return;
   }