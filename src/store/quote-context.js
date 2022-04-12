import { createContext, useState } from "react";

export const QuoteCtx = createContext();

const QuoteCtxProvider = props => {
    const [quotes, setQuotes] = useState({});
    const [counter, setCounter] = useState(0);
    const [theme, setTheme] = useState('day');
    const [err, setErr] = useState(null);

    return <QuoteCtx.Provider value={[quotes, setQuotes, theme, setTheme, counter, setCounter, err, setErr]}>
        {props.children}
    </QuoteCtx.Provider>
} 
export default QuoteCtxProvider;