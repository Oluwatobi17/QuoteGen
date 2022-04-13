import { useEffect, useContext } from 'react';

import ThemeSwitch from './Components/ThemeSwitch';
import QuoteContainer from './Components/QuoteContainer';
import NotificationPanel from './Components/NotificationPanel';
import Footer from './Components/Footer';

import {QuoteCtx} from './store/quote-context';

const App = () => {
	const [quotes, setQuotes, theme, setTheme, counter, setCounter, err, setErr] = useContext(QuoteCtx);
	
	useEffect(() => {
		let storedQuotes = JSON.parse(localStorage.getItem('quotes'));
		//alert(localStorage.getItem('counter'));
		if(!storedQuotes){
			fetch('https://favqs.com/api/quotes/', {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Token token="205ea1e0d5f5b289f6016b4420be3de2"'
				}
				
			})
			.then(res => res.json())
			.then(res => {
				localStorage.setItem('quotes', JSON.stringify(res.quotes));
				localStorage.setItem('counter', counter);
				setQuotes(res.quotes);
			}).catch((err)=>{
				setErr('Please check your internet');
				setTimeout(()=> {
					setErr(null);
				}, 5000);
			});
		}else{
			setQuotes(storedQuotes);
			setCounter(+localStorage.getItem('counter'));
		}
	}, []);

	return(
		<>
			<div className="container">
				{err && <NotificationPanel /> }
				<ThemeSwitch />
				<QuoteContainer />
			</div>

			<Footer />
		</>
	);
}
export default App;