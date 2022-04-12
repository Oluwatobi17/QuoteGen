export const fetchQuote = () => {

    fetch('https://favqs.com/api/quotes/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token token="205ea1e0d5f5b289f6016b4420be3de2"'
        }
        
    })
    .then(res => res.json())
    .then(res => {
        //console.log(res.quotes);
        return res.quotes
    });
}
