import '../../styles/organisms/recent-trades.css';

const RecentTrades = () => {
    const trades = [
        { time: '14:32:21', price: '20,634', amount: '0.5 BTC' },
        { time: '14:30:10', price: '20,640', amount: '1.2 BTC' },
        { time: '14:28:05', price: '20,620', amount: '0.8 BTC' },
    ];

    return (
        <div className="recent-trades">
            <h2 className="recent-trades__title">Recent Trades</h2>
            <div className="recent-trades__list">
                {trades.map((trade, index) => (
                    <div key={index} className="recent-trades__item">
                        <span className="recent-trades__time">{trade.time}</span>
                        <span className="recent-trades__price">{trade.price} USDT</span>
                        <span className="recent-trades__amount">{trade.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentTrades;
