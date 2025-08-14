const CurrencySelector = ({currency, onCurrencyChange}) => {
    return (
        <div>
            <label htmlFor="currency">Currency: </label>
            <select value={currency} id="currency" onChange={(e) => onCurrencyChange(e.target.value)}>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="gbp">GBP</option>
            </select>
        </div>
    )
};

export default CurrencySelector;