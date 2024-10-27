//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What was the most popular game for the Ninetendo Entertainment System (NES)"
choice1[1]="Super Mario Brothers"
choice1[2]="Metroid Prime"
choice1[3]="Luigi's Mansion"
choice1[4]="Aniaml Crossing"

question[2]="What year was the NES released?"
choice2[1]="1989"
choice2[2]="1980"
choice2[3]="1983"
choice2[4]="1995"

question[3]="What was the princesses name in The Legend of Zelda"
choice3[1]="Ganon"
choice3[2]="Shiek"
choice3[3]="Link"
choice3[4]="Zelda"

question[4]="What was the name of the villian in Super Mario Brothers?"
choice4[1]="Voldemort"
choice4[2]="Yoshi"
choice4[3]="Bowser"
choice4[4]="Donkey Kong"

question[5]="What was the name of the Dinsoaur that Mario could ride?"
choice5[1]="Pikachu"
choice5[2]="Yoshi"
choice5[3]="Toad"
choice5[4]="Shy-Guys"

question[6]="In the Street Fighter series, who was the green creature?"
choice6[1]="Ryu"
choice6[2]="Ken"
choice6[3]="Chunli"
choice6[4]="Blanka"

question[7]="Who was the little pink character that could eat his enemies?"
choice7[1]="Star-Fox"
choice7[2]="Kirby"
choice7[3]="Captain Falcon"
choice7[4]="Warrio"

question[8]="Who was the Blue Hedgehog from Sega?"
choice8[1]="Tails"
choice8[2]="Knuckles"
choice8[3]="Sonic"
choice8[4]="Dr. Robotnic"

question[9]="What was the original name for the Super Mario Brothers?"
choice9[1]="Red & Green"
choice9[2]="Bowser Bros"
choice9[3]="Plumber Bros"
choice9[4]="Jumpman"

question[10]="What year was Tetris released?"
choice10[1]="1989"
choice10[2]="1999"
choice10[3]="1992"
choice10[4]="1987"

solution[1]="a"
solution[2]="c"
solution[3]="d"
solution[4]="c"
solution[5]="b"
solution[6]="d"
solution[7]="b"
solution[8]="c"
solution[9]="d"
solution[10]="a"

