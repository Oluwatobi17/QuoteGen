import { useContext, useState, useEffect } from 'react';

import { QuoteCtx } from "../store/quote-context";

const Footer = () =>{
    const [quotes, setQuotes, theme, setTheme, counter, setCounter] = useContext(QuoteCtx);
    const [isNight, setIsNight] = useState(false);

    useEffect(()=>{
        if(theme==='night') setIsNight(true);
        else setIsNight(false);
    }, [theme]);
    
    return <footer style={{'color': isNight ? 'black': 'white'}}>
        <p>&copy; Copyright 2022 - Ganiu Ibrahim Olalekan
            <br />
            All Rights Reserved
        </p>
    </footer>
}

export default Footer;