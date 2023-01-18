function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


var quotes={
1:"It does not matter how slowly you go as long as you do not stop.",
2:"Well done is better than well said.",
3:"What you do today can improve all your tomorrows.",
4:"If you can dream it, you can do it.",
5:"Never complain and never explain.",
6:"Setting goals is the first step in turning the invisible into the visible.",
7:"Knowing is not enough; we must apply. Willing is not enough; we must do.",
8:"Be kind whenever possible. It is always possible.",
9:"Set your goals high, and don't stop till you get there.",
10:"I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
11:"I've found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
12:"Whatever you want in life, other people are going to want it too. Believe in yourself enough to accept the idea that you have an equal right to it.",
13:"I was motivated to be different in part because I was different.",
14:"If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
15:"Keep your face always toward the sunshine - and shadows will fall behind you.",
16:"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
17:"There are two ways of spreading light: to be the candle or the mirror that reflects it.",
18:"Act as if what you do makes a difference. It does.",
19:"What makes the desert beautiful is that somewhere it hides a well.",
20:"The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.",
21:"My attitude is that if you push me towards something that you think is a weakness, then I will turn that perceived weakness into a strength.",
22:"Do what you love to do and give it your very best. Whether it's business or baseball, or the theater, or any field. If you don't love what you're doing and you can't give it your best, get out of it. Life is too short. You'll be an old man before you know it.",
23:"I see myself as the best footballer in the world. If you don't believe you are the best, then you will never achieve all that you are capable of.",
24:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
25:"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
26:"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
27:"Learn as if you will live forever, live like you will die tomorrow.",
28:"Experience is a hard teacher because she gives the test first, the lesson afterwards.",
29:"One thing I know, that I know nothing. This is the source of my wisdom.",
30:"You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.",
31:"Many of life's failures are people who did not realize how close they were to success when they gave up."
};

var authors = {
  1:"Confucius",
  2:"Benjamin Franklin",
  3:"Ralph Marston",
  4:"Walt Disney",
  5:"Benjamin Disraeli",
  6:"Tony Robbins",
  7:"Johann Wolfgang von Goethe",
  8:"Dalai Lama",
  9:"Bo Jackson",
  10:"Ken Venturi",
  11:"Brian Tracy",
  12:"Diane Sawyer",
  13:"Donna Brazile",
  14:"Jim Rohn",
  15:"Walt Whitman",
  16:"John F. Kennedy",
  17:"Edith Wharton",
  18:"William James",
  19:"Antoine de Saint-Exupery",
  20:"Aldous Huxley",
  21:"Michael Jordan",
  22:"Al Lopez",
  23:"Cristiano Ronaldo",
  24:"Winston S. Churchill",
  25:"Mark Twain",
  26:"Winston Churchill",
  27:"Mahatma Gandhi",
  28:"Vernon Sanders Law",
  29:"Socrates",
  30:"Aristotle",
  31:"Thomas A. Edison"
  };

function ChangeQuote(){
    /*let randNo=getRandomInt(quotes[1]);*/
    let day = new Date().getDate();
    document.getElementById("card-text").innerHTML = `\"${quotes[day]}\"`;
    document.getElementById("card-footer").innerHTML = `-${authors[day]}`;

}