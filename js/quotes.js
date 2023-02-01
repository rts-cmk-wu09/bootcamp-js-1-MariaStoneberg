/* Array med quotes */
const quotes = [
    "Coding is like humor. When you have to explain it, it's bad",
    "Debugging is like being the detective in a crime moivie where you're also the murdere.",
    "Programming is like writing a book. Except if you miss out a single comma on page 126 the whole thing makes no damn sense.",
    "Spiders is the only web developers that enjoy finding bugs.",
    "Computers have lots of memory but no imagination.",
    "Real programmers count from 0.",
    "Den store fare er ikke, at computere begynder at tænke som mennesker, men at mennesker begynder at tænke som computere."
];

/* Funktionen bruger Math.Random() til at generere et random tal fra 0-1, som er ganget med længden af 'Quotes' arrayet for at få random index.
Det random quote i det random genereret index hentes fra documentet med sit id og vises på siden.*/
const displayQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    document.getElementById("quote-box").innerHTML = quote;
}
/* Kalder displayQuote funktionen når siden bliver loaded og viser et tilfældigt quote */
window.onload = displayQuote;

