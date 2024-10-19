import { useState } from "react";
import Quote from "./Quote";
import Header from "./Header";

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
      <Header text="Week3 Assignment: Simpsons Quote Generator" />
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <Quote quote={quote}></Quote>
      </section>
    </main>
  );
}

export default App;
