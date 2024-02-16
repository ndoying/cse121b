document.querySelector("#fetch-quote").addEventListener("click", fetchRandomQuote);

document.querySelector("#topic-selector").addEventListener("change", fetchRandomQuote);


function fetchRandomQuote() {
    const selectedTopic = document.getElementById("topic-selector").value;
    
    if(selectedTopic === "random") {
        fetchRandomTopicQuote();
    } else {
        fetch(`https://api.quotable.io/random?tags=${encodeURIComponent([selectedTopic])}`)
            .then(response => response.json())
            .then(data => {
                displayQuote(data.content, data.author);
            })
            .catch(error => console.error("Error:", error));
    }
}

function fetchRandomTopicQuote() {

    const topicSelector = document.getElementById("topic-selector");
    const topicOptions = Array.from(topicSelector.options);
    
    const randomIndex = Math.floor(Math.random() * topicOptions.length);
    const selectedTopic = topicOptions[randomIndex].value;

    fetch(`https://api.quotable.io/random?tags=${encodeURIComponent([selectedTopic])}`)
        .then(response => response.json())
        .then(data => {
            displayQuote(data.content, data.author);
        })
        .catch(error => console.error("Error:", error));
}

function displayQuote(quote, author) {
    document.querySelector("#quote").textContent = `"${quote}"`;
    document.querySelector("#author").textContent = `- ${author}`;
}

fetchRandomQuote();
