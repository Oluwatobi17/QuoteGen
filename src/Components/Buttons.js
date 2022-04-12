import { useContext, useState } from 'react';

import {QuoteCtx} from '../store/quote-context';
//import { fetchQuote } from '../util';

const Buttons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [quotes, setQuotes, theme, setTheme, counter, setCounter, err, setErr] = useContext(QuoteCtx);
    const generateHandler = () => {
        
        setIsLoading(true);
        if(counter==24){
            fetch('https://favqs.com/api/quotes/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token token="205ea1e0d5f5b289f6016b4420be3de2"'
                }
                
            })
            .then(res => res.json())
            .then(res => {
                setQuotes(res.quotes);
                setCounter(0);
            }).catch((err)=>{
                setErr('Please check your internet');
                setTimeout(()=> {
                    setErr(null);
                }, 5000);
            });
        }else{
            setCounter(counter+1);
        }
        localStorage.setItem('counter', counter+1);
        setIsLoading(false);
    };

    const copyHandler = () =>{
        if(quotes[counter]!=0){
            let text = quotes[counter].author +" once said: "
            navigator.clipboard.writeText(text + quotes[counter].body);
            setErr('copied');
            setTimeout(()=> {
                setErr(null);
            }, 3000);
        }else{
            setErr('Please load quote');
            setTimeout(()=> {
                setErr(null);
            }, 3000);
        }
    }
	return(
        <div className="buttons">
            <button className="button-type1" onClick={copyHandler}>Copy</button>
            <button className="button-type2" onClick={generateHandler}>
                {isLoading ? 'Loading...' : 'Generate Another Quote'}
            </button>
        </div>
	);
}
export default Buttons;