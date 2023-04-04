const quotes = [
    {quote: "You can easily judge the character of a man by how he treats those who can do nothing for him", author: "Johann von Goethe"},
    {quote: "quote 2", author: "author 2"},
    {quote: "quote 3", author: "author 3"},
    {quote: "quote 4", author: "author 4"},
    {quote: "quote 5", author: "author 5"},
    {quote: "quote 6", author: "author 6"},
    {quote: "quote 7", author: "author 7"}, 
]

const button = document.querySelector('.btn');
const quoteText = document.querySelector('#blockquote');
const author    = document.querySelector('#author');

  button.addEventListener('click',(e)=>{
    e.preventDefault();
    button.classList.add('btn--clicked');
    document.querySelectorAll('span').forEach((element)=>{element.classList.add('expanded')})
    
    
    /* 
---------------------------------------
just to reset without having to refresh..
 --------------------------------*/
     setTimeout(()=>{button.classList.remove("btn--clicked")},3500);
     setTimeout(()=>{document.querySelectorAll('span').forEach((element)=>{element.classList.remove('expanded')})},1700)
     setTimeout(()=> {
        const randomIndex = Math.floor(Math.random()*quotes.length)
        quoteText.innerText = quotes[randomIndex]['quote']
        author.innerText    = quotes[randomIndex]['author']},1750);
     
    }
  )
