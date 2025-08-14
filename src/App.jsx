import tokenTrackLogo from './assets/tokentrack.png';
import { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';
import LimitSelector from './components/LimitSelector';
import CurrencySelector from './components/CurrencySelector';
import FilterInput from './components/FilterInput';
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("eur");
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(`${API_URL}?vs_currency=${currency}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
        if(!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        console.log(data);
        setCoins(data);
      }
      catch(err) {
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    }

    fetchCoins();
  }, [limit, currency]);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(filter.toLowerCase()) || coin.symbol.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div>
      <div className="header-logo">
        <img src={tokenTrackLogo} alt="logo" className="logo"></img>
        <h1>TokenTrack</h1>              
      </div>
      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter}/>        
      </div>
      <div className="controls">
        <CurrencySelector currency={currency} onCurrencyChange={setCurrency} />
        <LimitSelector limit={limit} onLimitChange={setLimit}/>
      </div>
      { loading && <p>Loading...</p>}
      { error && <div className="error"> {error}</div> } 
      { !loading && !error && (
        <main className="grid">
          {filteredCoins.length > 0 ? filteredCoins.map((coin) => (
            <CoinCard coin={coin} currency={currency} key={coin.id}/>
          )) : <p>No matching coins</p>}
        </main>
      )}
    </div>
  )
}

export default App