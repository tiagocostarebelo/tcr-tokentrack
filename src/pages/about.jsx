const AboutPage = () => {
    return (
        <div className="about">
            <h1>About TokenTrack</h1>
            <p>
                TokenTrack is a simple React application that displays live
                cryptocurrency data using the CoinGecko API.
            </p>
            <p>
                You can explore the top cryptocurrencies by market cap, filter by name
                or symbol, change the currency in which the coins are presented, and sort them by price, market cap, or 24-hour change.
            </p>
            <p>
                This project is built as part of a React course to help understand
                hooks, components, state management, and integrating with external APIs.
            </p>
            <p>
                Future features might include detailed coin views, favorites,
                pagination, and much more!
            </p>
        </div>
    );
};

export default AboutPage;