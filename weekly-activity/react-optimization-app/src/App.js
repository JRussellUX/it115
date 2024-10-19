import { useState } from "react";
import Quote from "./Quote";

//function getRandomQuote(quotes) {
//  return quotes[Math.floor(Math.random() * quotes.length)];
//}

function App() {
  const [quote, setQuote] = useState(null);

  function getNewQuote() {
    fetch("http://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuote(json[0]);
      });
  }

  return (
    <main>
      <h1>Weekly Hands-on Activity: Simpsons Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <Quote quote={quote}></Quote>
      </section>
    </main>
  );
}

export default App;
