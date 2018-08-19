"use strict";
document.addEventListener('DOMContentLoaded', init);

function init () {
    const url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    const readBtn = document.querySelector('.read');
    const tweetBtn = document.querySelector('.tweet');
    const quote_author = document.querySelector('.author-qoute');
    const heading = document.querySelector('.heading');
    const title = heading.querySelector('.quote-title');

    function set_url(elemntDOM, quote){
        elemntDOM.setAttribute('href', quote);
        elemntDOM.setAttribute('target', '_blank');
    }
    
    fetch(url)
              .then(response => response.json())
              .then(data => {
                  let curQuote = '';
                  let quotes = data.hits;
                 readBtn.addEventListener('click', _ => {
                     curQuote = quotes[Math.floor(Math.random() * quotes.length)];
                     title.textContent = curQuote.title;
                     set_url(title, curQuote.url);
                     quote_author.textContent = curQuote.author;
                     let link = `https://twitter.com/intent/tweet?text=${curQuote.title} _ ${curQuote.author}`;                    
                     set_url(tweetBtn, link);
                     tweetBtn.classList.remove('disable');
                 });
              });
}