//console.log("hello")
// try to werite a program in age of the guys


function ageInDays() {
    var birthYear = prompt("waht year were you here...");
    var ageInDayss = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + 'days old .');

    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    //console.log(ageInDayss)

}

function reset() {

    document.getElementById('ageInDays').remove();


}


// Challenge 2 : cat Generator
function generateCat() {

    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gena'); //obtained in css id from html 
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);



}

// chanellge 3 rock paper scissors
function rpggame(yourChoice) {

    var humanChoice, botChoice;

    botChoice = numbertoChoices(randToRpsInt()); // inpiutst the function below by COmputer
    //alert(botChoice);

    humanChoice = yourChoice.id // makes choices by human 
    //console.log(yourChoice);
    //console.log(botChoice);


    // fina; 
    results = decideWinner(humanChoice, botChoice); // 10.53 human lost and  bot wins 

    message = finalmessages(results);
    console.log(message);
    //message( 'You won!' , 'color');
    rpgFrontEnd(yourChoice.id, botChoice, message);
    console.log('Computer Choices', botChoice);
    //console.log('results','youlost');
}


function randToRpsInt() { // generates random # choices 

    return Math.floor(Math.random() * 3);

}
//var div  = document.getElementById('flex-box-rps');

function numbertoChoices(number) {   // picks number of choices  in array 

    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {

    var rpgdatabase = {     /// 1 means win , 0.5 tie , 0 lose 
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }


    }
    var yourScore = rpgdatabase[yourChoice][computerChoice];
    var computerScore = rpgdatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalmessages([yourScore, computerScore]) {

    if (yourScore === 0) {
        return { 'message': 'you lose', 'color': 'red' }

    } else if (computerScore === 0.5) {
        return { 'message': 'you tied', 'color': 'blue' }

    } else {
        return { 'message': 'you win', 'color': 'green' }
    }


}

function rpgFrontEnd(humanImageChoice, botImageChoice, finalmessages) {     // database
    var ImageChoice = {
        // get the image
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    }
    //removes the images 
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

     // this is the child 
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');



    humanDiv.innerHTML = "<img src='" + ImageChoice[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px, 10px 50px rgba(37,50,233,1);'>"
    botDiv.innerHTML = "<img src='" + ImageChoice[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px, 10px 50px rgba(243,38,24,1);'>"
    messageDiv.innerHTML = "<h1 style='color" + finalmessages['color'] + "; font-size:60px ; padding:30px;'>" + finalmessages['message'] + "<h1>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);


}  

// Chanellges 4: changes in the in all buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllbuttons =[]; // keeps pushingg every button 7 times for array 

for(let i=0; i< all_buttons.length;i++)
{
    copyAllbuttons.push(all_buttons[i].classList[1]);
}
console.log(copyAllbuttons);

function buttonColorChange(buttonChangeThingy){

    if(buttonChangeThingy.value === 'red'){

        buttonsRed();
    }else if(buttonChangeThingy.value === 'green') {

        buttonsGreen();
    }else if (buttonChangeThingy.value === 'reset'){
        buttonResetColor();
    }else if (buttonChangeThingy.value === 'random'){
        RandomColors();
    }


    //console.log(buttonChangeThingy.value); // value added from html 
}
 function buttonsRed(){

    for (let i=0; i < all_buttons.length; i++){
                                        //gets the deletes primary button and then keeps going
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
 }

 function buttonsGreen(){

    for (let i=0; i < all_buttons.length; i++){
                                        //gets the deletes primary button and then keeps going
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
 }

 function buttonResetColor(){   // resets all the buttons 

   for(let i=0; i < all_buttons.length;i++){

       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(copyAllbuttons[i]);
       //console.log(copyAllbuttons);
   }
}
                 // getting random colotrs 
function RandomColors(){

    var choices = ['btn-primary', 'btn-danger','btn-success' , 'btn-warning'];
    let randomNumber = Math.floor(Math.random()*4);

for(let i=0; i < all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
    }
}



// challenge 5 
let blackjackGame = {
     'you' : {'ScoreSpan': '#your-blackjack-result', 'div': '#your-box','score': 0 },
    'dealer' : {'ScoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box','score': 0 },
    'cards' :[ '2','3','4', '5','6','7','8','9','10','J','Q','K','A'],
    'cardmap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8': 8, '9':9, '10':10, 'J':10,'Q':10,'K':10,'A':[1,11]},
    'wins':0,
    'lose':0,
    'tied' :0,
    'isstand':false,
    'turnsover':false,
}; 

// doesnt change ever
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sound/swish.m4a');// input sound
const winSound = new Audio('static/sound/cash.mp3');
const loseSound = new Audio('static/sound/aww.mp3');


document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);



function blackjackHit(){
    if(blackjackGame['isstand'] === false){
        let card = randomCard();  // tkaing that variable to function showCard
       // console.log(card);
    
        showCard(card,YOU);
        updateScore(card,YOU); // mapsfrom the lists
        //console.log(YOU['score']);
        showScore(YOU);

    }
   
    
    //alert("hit me up");
   // showCard(DEALER);
   
}

// Display Card 
function showCard(card ,activePlayer){
    //stops before hitting 21 or equal to it 
    if ( activePlayer['score'] <= 21 ){
        let cardImage = document.createElement('img');
        cardImage.src= `static/images/${card}.png`; // picks random card 
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
       

    }
  
}




function blackjackDeal(){
  //you
    //ShowResult(CompteWinner());

    if (blackjackGame['turnsover'] === true)
    {

        blackjackGame['isstand'] = false; // turns off hit button 
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        console.log(yourImages);
    
        for(i=0; i < yourImages.length; i++){
            yourImages[i].remove();
        }
    //dealer
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        console.log(dealerImages);
        for(i=0; i < dealerImages.length;i++){
            dealerImages[i].remove();
        }
        //reset back to zero 
        YOU['score'] = 0;
        DEALER['score'] = 0;
        // get the ID from the SPanScore
        document.querySelector('#dealer-blackjack-result').textContent=0;
        document.querySelector('#your-blackjack-result').textContent=0;
        
        document.querySelector('#dealer-blackjack-result').style.color= '#ffffff';
        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#blackjack-result').textContent = "let's play";
        document.querySelector('#blackjack-result').style.color='black';

        blackjackGame['turnsover'] = true;
        }
}


function randomCard(){

    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

// input score  with the key from the arraylist whether you or the dealer 
// if adding the 11 keeps me below 21, and add 11 Otherwise add 1 
function updateScore(card,activePlayer){

    if (card === 'A'){
        if (activePlayer['score'] + blackjackGame['cardmap'][card][1] <= 21)
        {                      //adds 1 if Ace increments to 11  if closer to 20 or 18
               activePlayer['score'] += blackjackGame['cardmap'][card][1];
        }else{  // if extra just increment the card 
               activePlayer['score'] += blackjackGame['cardmap'][card][0];
        }

    } else {  // if this ace was no here in the first place just incremented 
        activePlayer['score'] += blackjackGame['cardmap'][card];
    }
    
}

//front end to set players current score
//display the limited of scaore 
function showScore(activePlayer){

    
if(activePlayer['score'] > 21){   // stops the players hitting more 
    document.querySelector(activePlayer['ScoreSpan']).textContent = "Busted@!!!!"
    document.querySelector(activePlayer['ScoreSpan']).style.color = 'Red'
}else{  // otherwise show the actiev score
    document.querySelector(activePlayer['ScoreSpan']).textContent = activePlayer['score'];
    }
   
}


function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms));
}
 async function dealerLogic(){
        blackjackGame['isstand'] = true;
        //keep hiting the stand with keep hitting 

        while(DEALER['score'] < 16 && blackjackGame['isstand'] === true)
        {
            
            let card = randomCard();
            //onsole.log(card);
            showScore(DEALER);
            showCard(card,DEALER);
            updateScore(card,DEALER);
       // console.log(DEALER['score']);
        //ShowResult();

        await sleep(1000);
        }
    
    
  
    

   // if (DEALER['score'] > 15)
    //{
        blackjackGame['turnsover'] = true;
        let Winner = CompteWinner();
        ShowResult(Winner);
       // console.log(blackjackGame['turnsover']);

    //}
}


function CompteWinner()
{   // conditions when user wins over the computer if the computer gets the bust 
    let Winner;

    if(YOU['score'] <= 21)
    {
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
           // console.log('you win');
            blackjackGame['wins']++;
            Winner = YOU;
        }
        else if(YOU['score'] < DEALER['score'] || DEALER['score'] < 21)
        {
            //console.log('you lose');
            blackjackGame['lose']++;
            Winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score'])
        {
            blackjackGame['tied']++;
           // console.log('You draw');
        }
    }
             //Truth Tables 
    // conditions when the dealer does win when u bust 
    else if (YOU['score'] > 21 && DEALER['score'] <= 21 ) 
    {
        //console.log('you lose');
        blackjackGame['lose']++;
        Winner = DEALER;
    }  // when you win again the computer 
     // when you and the computer bust
    else if (YOU['score'] > 21 && DEALER['score'] > 21)
    {
        //console.log('tied');
        blackjackGame['tied']++;
    }

    //console.log('Winner is',Winner);
    console.log(blackjackGame);
    return Winner; 
}


//shows the outcome of the winner with sound effects 
function ShowResult(Winner){
let message, messageColor;

if (blackjackGame['turnsover'] === true){


    if (Winner === YOU){

        document.querySelector('#wins').textContent=blackjackGame['wins'];
        message = 'You won';
        messageColor = 'green';
        winSound.play();
    }
    else if (Winner === DEALER)
    {
        document.querySelector('#lose').textContent=blackjackGame['lose'];
        message = 'You lose!';
        messageColor = 'red';
        loseSound.play();
    }
    else 
    {
        document.querySelector('#tied').textContent=blackjackGame['tied'];
        message ='tie';
        messageColor = 'black';

    }
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
    }
}

//changllege 6

const url ='https://randomuser.me/api/?results=10;' // gets 10 random users
fetch(url)
    .then(resp => resp.json())
    .then(data => { let authors = data.results;
        console.log(authors);

        for(i=0; i <authors.length;i++){
            let div = document.createElement('div');
            let image = document.createElement('img');
            let p = document.createElement('p');

        p.appendChild(document.createTextNode(`$(title(author[i].name.first)} $( title(authors[i].name.last)}`)); 
        
        image.src = authors[i].picture.large;
        div.appendChild(image);
        div.appendChild(p);
        document.querySelector('.contained-6 .flex-ajax-row-1').appendChild(div);
        }
    });
        let title = str => str[0].toUpperCase()+str.slice(1);
        function jason()
        {
            return '5'
        }
        jason()

        function resp(){
            return resp.json();
        }

        var jason = number => 5 + number;
        jason()