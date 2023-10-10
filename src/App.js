import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([])

  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    console.log(res.data)
    setCoins(res.data)                  /*actualice la variable coins con los 100 datos proveniente de data */
  }

  useEffect(() => {    /*cada vez que tome un valor actualice */
    getData()
  }, [])

  return (
    <div className="container">
      <h1>WALLET COINS</h1>
      <div className="row">
        <TableCoins coins={coins} />
      </div>
    </div>
  );
}

export default App;
