var quote = [
  {'quote':'"Be yourself; everyone else is already taken."',
    'author':'--Oscar Wilde'
  },
  {'quote':'"Be the change that you wish to see in the world."',
   'author':'--Mahatma Gandhi'
  },
  {'quote': '"You miss 100% of the shots you don\'t take."',
   'author': '--Wayne Gretzy'
  },
  { 'quote': '"Beware of what you become in pursuit of what you want."',
   'author': '--Jim Rohn'
  },
  {'quote':'"A room without books is like a body without a soul."',
    'author':'--Marcus Tullius Cicero'
  },
  {'quote': '"Resentment is like drinking poison and waiting for your enemies to die."',
  'author': '--Nelson Mandela'
 },
  {'quote': '"It\'s not what happens to you, but how you react to it that matters."',
   'author': '--Epictetus'
  },
  {'quote':'"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."',
    'author':'--Bernard M. Baruch'
  },
  { 'quote': '"The best revenge is massive success."',
   'author': '--Frank Sinatra'
  },
  { 'quote': '"Do not take life too seriously. You will not get out alive."',
  'author': '--Elbert Hubbard'
   },
];

function newQuote(){
  var randomQuote =  Math.floor((Math.random() * quote.length));
  document.getElementById('quote').innerHTML =quote[randomQuote].quote;
  document.getElementById('author').innerHTML =quote[randomQuote].author;
  
}