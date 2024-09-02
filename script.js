//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "It does not matter how slowly you go as long as you do not stop.",
	source: "Confucius"
	},
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        source: "Herman Melville"
    },
    {
        quote: "Either you run the day or the day runs you.",
        source: "Jim Rohn"
    },
    {
        quote: "You worked hard—keep trying your best.",
        source: "JIN"
    },
    {
        quote: "Without anger or sadness, you won’t be able to feel true happiness.",
        source: "JK"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        source: "Chris Grosser"
    },
    {
        quote: "Difficulties in life are intended to make us better, not bitter",
        source: "Dan Reeves"
    }, 
    {
        quote: "Love yourself first, and everything else falls into line.",
        source: "RM (Rap Monster)"
    },
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var lavender = Math.floor(Math.random() * 256 );
	var pink = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + lavender + ',' + pink + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 

function printQuote () {
    var quotes = getRandomQuote ();
    var quoteContainer = document.getElementById("quote-box");
    var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
            if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
               else {quoteString += '</p>'};
                quoteContainer.innerHTML = quoteString;

                //assigns random color value to document background color 
                document.body.style.backgroundColor = getRandomColor ();
}



//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

