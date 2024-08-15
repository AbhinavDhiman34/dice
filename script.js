document.querySelector(".btn-container").addEventListener("click" , function(){
    var randomNum1=Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice"+randomNum1+".png";
    var randomImageSource = "images/"+randomDiceImage; //images//dice1.png-dice6.png
    var image1 = document.querySelectorAll("img")[0]  
    image1.setAttribute("src" , randomImageSource);
    
    var randomNum2 = Math.floor(Math.random()*6)+1;
    var secondDiceImage = "images/dice"+randomNum2+".png";
    document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);
    if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Won 👑"
        document.querySelector("h1").style.color ="#4ecc50"
       
    }
    else if (randomNum1 > randomNum2) {
         document.querySelector("h1").innerHTML = "Player 1 Won 👑"
          document.querySelector("h1").style.color ="#4ecc50"
    }
    else{
         document.querySelector("h1").innerHTML = "Draw ❌"
         document.querySelector("h1").style.color ="red"
    }
});
