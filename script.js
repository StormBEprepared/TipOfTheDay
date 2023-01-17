function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


let quotes=[
"It does not matter how slowly you go as long as you do not stop.",
"Well done is better than well said.",
"What you do today can improve all your tomorrows.",
"If you can dream it, you can do it."
]


function ChangeQuote(){
    let randNo=getRandomInt(quotes.length);

    document.getElementById("card-text").innerHTML = quotes[randNo].toString();
    document.getElementById("card-footer").innerHTML = "Confucius";

}