import React, { useState } from 'react';
import Quotes from './Quotes.json';
import './App.css';
import Quote from './Quote'

const QuotesContainer = () =>{
         
    const numAleatorio = () =>{
        return Math.floor(Math.random() * (Quotes.quotes.length - 0)) + 0

    }
   

        
        const [quote, setQuote] =  useState(Quotes.quotes[numAleatorio()]); 



  
        console.log(quote)
        return <div className = "border-radius alin-center">
            <Quote quote = {quote.quote} autor = {quote.author} />
            <div className="margin">
            <button className="boton" onClick = {() => setQuote(Quotes.quotes[numAleatorio()]) }>click me</button>
            </div>
            <div className="margin">
            <a className="boton" href={`https://twitter.com/intent/tweet?text=${quote.quote}%20by%20${quote.author}`} rel = "noreferrer">Twittear</a>
            </div>
       </div>

}


export default QuotesContainer;