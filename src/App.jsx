import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapiv1.coinstats.app/coins", {
        headers: {
          "X-API-KEY": "H2QS+Ep61A4zX7nYSiDrfeyveziPc2e69Jq2bwWFqIg=",
        },
      })
      .then((res) => setCurrency(res.data.result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <h2>Crypto Currency Price Tracking App</h2>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>rank</th>
            <th>name</th>
            <th>symbol</th>
            <th>market cap</th>
            <th>price</th>
            <th>available supply</th>
            <th>volume(24)</th>
          </tr>
        </thead>
        <tbody>
          {currency
            .filter((val) =>
              val.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((val) => (
              <tr>
                <td className="rank">{val.rank}</td>
                <td className="logo">
                  <a href={val.websiteUrl}>
                    <img src={val.icon} alt="" />
                  </a>
                </td>
                <td className="symbol">{val.symbol}</td>
                <td>${val.marketCap}</td>
                <td>${val.price.toFixed(2)}</td>
                <td>{val.availableSupply}</td>
                <td>{val.volume.toFixed(0)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
