import { useContext } from 'react';

import {QuoteCtx} from '../store/quote-context';

const NotificationPanel = () => {
	const [quotes, setQuotes, theme, setTheme, counter, setCounter, err, setErr] = useContext(QuoteCtx);
	return(
		<div className="note-container">
			<h4>New Message</h4>
            <p>{err}</p>
		</div>	
	);
}
export default NotificationPanel;