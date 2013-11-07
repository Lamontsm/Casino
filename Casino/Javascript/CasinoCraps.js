/**
 * Created by Steve Lamont on 11/6/13.
 */

/* First let's roll the dice */
var dice1;
var dice2;
document.writeln("<image src='Graphics/pair-of-dice.jpg'></image>");
document.write("<p></p>");
dice_roll();


function dice_roll()
   {
   /* this rolls the two dice and prints the outcome*/
    dice1 = Math.round(6*Math.random());
    dice2=Math.round(6*Math.random());
   document.write("Die 1: "+dice1+"   Die 2: "+dice2);

   return;
   }