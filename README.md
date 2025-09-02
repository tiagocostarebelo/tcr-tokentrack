# TokenTrack

A React + Vite cryptocurrency dashboard that displays live token data in a clean, interactive interface.

---

## Features

- Fetches and displays real-time token data (price, market cap, etc.)
- Interactive dashboard with chart
- Powered by React and Vite for fast reloads and modern development experience
- Filter by currency, Sort by Market Price, Price, 24h change and display from 5 to 100 coins on the dashboard

---

## Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CoinGecko API](https://www.coingecko.com/)
- [ChartJS](https://www.chartjs.org/)
- JavaScript (ES6+), Data Fetching (Fetch API)

---

## Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/tiagocostarebelo/tcr-tokentrack.git
cd tcr-tokentrack
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a .env file in the root with the following CoinGecko API urls.


```bash
VITE_API_URL="https://api.coingecko.com/api/v3/coins/markets"
VITE_COIN_API_URL="https://api.coingecko.com/api/v3/coins"
```

4. **Run the development server**

```bash
npm run dev
```

## Example Use

- Open your localhost after running the dev server
- Filter, Sort, Display how many coins you want
- Click individual coins to see more detailed data

## Intended Use
This project was built as a personal React learning exercise based on the Modern React course by Traversy Media, with a few additions by myself.

## License
MIT