import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Quote.css';

export default function Quote(props) {

  const colors = ['#16a085', '#27ae60', '#2c3e50',
   '#f39c12', '#e74c3c', '#9b59b6', '#FB6964',
   '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  const [quotes, setQuotes] = useState([]);
  const [color, setColor] = useState([]);
  const [quote, setQuote] = useState({});


  useEffect(() => {
    const getQuotes = async () => {
     const res = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
     setQuotes(res.data.quotes);
    };
    getQuotes();
  }, []);

  useEffect(() => {
    newQuote();
  }, [quotes])

  const newQuote = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
    props.setBackgroundColor(newColor);
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }
  if(quote)
  return (
      <div className="Quote" style={{color: 'blue'}}>
        <h2 className="quote-text" style={{color: color}}><i class="fa fa-quote-left" aria-hidden="true"></i>{quote.quote}</h2>
        <h4 className="quote-author" style={{color: color}}>- {quote.author}</h4>
        <div className="quote-buttons">
          <div className="quote-sm-buttons">
            <i className="sm-icon fa fa-twitter" aria-hidden="true" style={{color: color}}></i>
            <i className="sm-icon fa fa-facebook" aria-hidden="true" style={{color: color}}></i>
          </div>
          <button className="quote-new-button" style={{background: color}} onClick={ newQuote }>New Quote</button>
        </div>
      </div>
  )
  return null;
}
