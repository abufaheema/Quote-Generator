const quotes = [
    {
        name: 'Stephen King',
        quotes:'get busy living or get busy dying'
    },
    {
        name: 'John F.kennedy',
        quote:'Those who dare to fail miserably can achieve greatly'
    },
    {
        name: 'Abraham Lincoln',
        quote: 'I am a success today because I had a friend who belived in me and I didnt have the heart to let him down'
    },
    {
        name: 'leonardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely set back and let things happen to them. They went out and happeneed to things'
    },
    {
        name: 'Leo Tolstoy',
        quote:'If you want to be happy, be'
    }
]

const quoteBtn = document.querySelector('#quoteBtn')
const quoteAuthor = document.querySelector('#quoteAuthor')
const quote = document.querySelector('#quote')


quoteBtn.addEventListener('click', displayQuote)

function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length)
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote
    let x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == 'yellow' ? 'pink' : 'yellow'
    
}
