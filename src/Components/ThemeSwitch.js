import {useContext} from 'react';

import {QuoteCtx} from '../store/quote-context';


const ThemeSwitch = () => {
    const [quotes, setQuotes, theme, setTheme, counter, setCounter] = useContext(QuoteCtx);
    const themeToggleHandler = () =>{
        let body = document.querySelector('body');
        let newtheme = theme=='day'? 'night': 'day';
        
        setTheme(newtheme);
        
        body.style.backgroundImage = "url("+ newtheme + ".jpg)";
        
    }
	return(
		<div className="themeswitch">
            
            <span className="switchtype">Day</span>
			<label class="switch">
                <input type="checkbox" />
                <span class="slider round" onClick={themeToggleHandler}></span>
            </label>
            <span className="switchtype">Night</span>
		</div>	
	);
}
export default ThemeSwitch;