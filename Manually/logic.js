const quotes = [
    {quote: "You can easily judge the character of a man by how he treats those who can do nothing for him", author: "Johann von Goethe"},
    {quote: "If it's endurable, then endure it. Stop complaining", author: "Marcus Aurelius"},
    {quote: "Half of the troubles of this life can be trace to saying yes too quickly and not saying no soon enough", author: "Josh Billings"},
    {quote: "To think too much is a disease", author: "Fyodor Dostoyevsky"},
    {quote: "The world will ask you who you are and if you do not know, the world will tell you", author: "Carl Jung"},
    {quote: "To be alone is the fate of all great minds", author: "Schopenhauer"},
    {quote: "A mistake repeated more than once is a decision", author: "Paulo Coelho"}, 
    {quote: "There is only one way to avoid criticism: do nothing, say nothing and be nothing", author: "Aristotle"},
    {quote: "I am not what happened to me; I am what I chose to be", author: "Carl Jung"},
    {quote: "And those who were seen dancing were thought to be insane by those who could not hear the music", author: "Nietschze"},
    {quote: "A friend to all is a friend to none", author: "Aristotle"},
    {quote: "We don't see things as they are, we see them as we are", author: "Anaïs Nin"},
    {quote: "Between what is said and not meant, and what is meant but not said, most love is lost", author: "Khalil Gibran"},
    {quote: "You cannot step in the same river twice", author: "Heraclitus"},
    {quote: "It never ceases to amaze me: we all loves ourselves more than other people, but care more about their opinion than our own.", author: "Marcus Aurelius"},
    {quote: "Most people don't want to hear the truth. They want constant reassurance that what they believe is the truth.", author: "anonymous"},
    {quote: "Hard times create strong men. Strong men create good times. Good times create weak men. Weak men create hard times", author: "Michael Hopf"},
    {quote: "Humans are pattern-seeking animals who will prefer even a bad theory or a conspiracy to no theory at all", author: "Christopher Hitchens"},
    {quote: "Talk sense to a fool and he calls you foolish", author: "Euripides"},
    {quote: "Men who think deeply appear to be comedians in their dealings with others because they always have to feign superficiality in order to be understood.", author: "Friedrich Nietzsche"},
    {quote: "I was ashamed of myself when I realised life was a costume party; and I attended with my real face", author: "Franz Kafka"},
    {quote: "Sometimes people don't want to hear the truth because they don't want their illusions destroyed", author: "Friedrich Nietzsche"}
    
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
