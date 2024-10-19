function Quote(props) {
    const quote = props.quote;

    return (
        quote ? (<h3>
          <span>“</span>
          {quote.quote} ({quote.character})
          <span>"</span>
        </h3>) : null
    
  );
}

export default Quote;
