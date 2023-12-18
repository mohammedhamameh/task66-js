var quotes=[
    {
        writer:" Oscar Wilde",
        quoterText:"Be yourself; everyone else is already taken.",
        writer:'<img src="./writers/5768330._UX200_CR0,30,200,200_.jpg" class=" person position-absolute  " >'
      
        
    },
    {
        quoter:"Albert Einstein",
        quoterText:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        writer:'<img src="./writers/7715._UX200_CR0,33,200,200_.jpg" class=" person position-absolute  " > '

    },
    {
        quoter:" Bernard M. Baruch",
        quoterText:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        writer:'<img src="./writers/3565._UX200_CR0,15,200,200_.jpg" class=" person position-absolute  " >'
    },
    {
        quoter:"Mahatma Gandh",
        quoterText:"Be the change that you wish to see in the world.",
        writer:'<img src="./writers/5810891._UX200_CR0,21,200,200_.jpg" class=" person position-absolute  " >'

    },
    {
        quoter:" Robert Frost",
        quoterText:"In three words I can sum up everything I've learned about life: it goes on.",
        writer:'<img src="./writers/7715._UX200_CR0,33,200,200_.jpg" class=" person position-absolute  " >'
    },
   

]
var btn=document.getElementById("btn-generate");
var text=document.getElementById("quote-text")
var writer=document.getElementById("writer")
var imageperson=document.getElementById("person-image")
var i=quotes.length,j;

function getrandomNumber(){
    var number = Math.floor( Math.random() * quotes.length );
        return number;
    }
    
var randomNumber;
var preNumber;

function final(){

   if(randomNumber == preNumber){

         if(randomNumber == quotes.length-1){

            randomNumber = randomNumber -1;

            return randomNumber;
         }

         else{

            randomNumber = randomNumber +1;

            return randomNumber;

         }
   }
   return randomNumber;
}

    btn.addEventListener("click",function(){
        randomNumber = getrandomNumber();
        randomNumber = final();
            text.innerHTML=quotes[randomNumber].quoterText;
            writer.innerHTML=quotes[randomNumber].quoter;
            imageperson.innerHTML=quotes[randomNumber].writer; 
            preNumber = randomNumber;     
    });



