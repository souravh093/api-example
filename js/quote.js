const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => showQuote(data))
}

const showQuote = data => {
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerText = `"${data.quote}"`
    // for (const quote of data) {
    //     const quoteP = document.createElement('p');
    //     quoteP.innerText = `"${quote}"`;
    //     quoteContainer.appendChild(quoteP);
    // }
} 

loadQuote()