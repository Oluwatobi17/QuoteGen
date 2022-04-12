import { useContext, useState } from 'react';

import Buttons from './Buttons';
import {QuoteCtx} from '../store/quote-context';
import { useEffect } from 'react';

const QuoteContainer = () => {
    const [quotes, setQuotes, theme, setTheme, counter, setCounter] = useContext(QuoteCtx);
    const [{body, author}, setQuote] = useState({body:"", author: ""});
    useEffect(()=> {
        if(quotes.length){
            setQuote({
                body: quotes[counter].body,
                author: quotes[counter].author
            });
        }
    }, [counter, quotes]);
	return(
        <div className="quote">
            <h2>Quote Generator App</h2>
            <div className="card">
                <h3>{body}</h3>

                <div className="flex-items">
                    <span className="author">{author}</span>
                </div>
                <Buttons />
            </div>
        </div>	
	);
}
export default QuoteContainer;