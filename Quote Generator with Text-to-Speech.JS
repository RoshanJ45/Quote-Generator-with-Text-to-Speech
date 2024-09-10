const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const button = document.getElementById('new-quote');


    function getQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quoteText.textContent = `"${data.content}"`;
                authorText.textContent = `- ${data.author}`;
                speakQuote(data.content);
            });
    }


    function speakQuote(text) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.rate = 1;  
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }


    button.addEventListener('click', getQuote);