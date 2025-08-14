import tokenTrackLogo from './assets/tokentrack.png';
import { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';
const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL);
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
  }, [])

  return (
    <div>
      <div className="header-logo">
        <img src={tokenTrackLogo} alt="logo" className="logo"></img>
        <h1>TokenTrack</h1>              
      </div>
      { loading && <p>Loading...</p>}
      { error && <div className="error"> {error}</div> } 
      { !loading && !error && (
        <main className="grid">
          {coins.map((coin) => (
            <CoinCard coin={coin} key={coin.id}/>
          ))}
        </main>
      )}
    </div>
  )
}

export default App