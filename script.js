const api_url="https://api.quotable.io/random";
const quote=document.getElementById('quote');
const author=document.getElementById('author');
const newQuote=document.getElementById('newquote')
const tweetButton=document.getElementById('tweet');

const getQuote=async(url)=>{
const response=await fetch(url);
const data=await response.json();
console.log(data)
quote.innerHTML=data.content;
author.innerHTML=data.author
}


getQuote(api_url);

newQuote.addEventListener("click",()=>{
    getQuote(api_url);
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"  ----by"+author.innerHTML,"Tweet Window","width=600,height=300");
}

tweetButton.addEventListener("click",()=>{
    tweet();
})


