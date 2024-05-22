import Text from '../atoms/Text';
import '../../styles/organisms/order-book.css';

const OrderBook = () => {
    const orders = [
        { price: 36920.12, amount: 0.758965, total: 28020.98, type: 'sell' },
        { price: 36920.12, amount: 0.758965, total: 28020.98, type: 'sell' },
        { price: 36920.12, amount: 0.758965, total: 28020.98, type: 'sell' },
        { price: 36920.12, amount: 0.758965, total: 28020.98, type: 'sell' },
        { price: 36920.12, amount: 0.758965, total: 28020.98, type: 'sell' },
        { price: 36641.20, amount: 0.758965, total: 28020.98, type: 'buy' },
        { price: 36641.20, amount: 0.758965, total: 28020.98, type: 'buy' },
        { price: 36641.20, amount: 0.758965, total: 28020.98, type: 'buy' },
        { price: 36641.20, amount: 0.758965, total: 28020.98, type: 'buy' },
        { price: 36641.20, amount: 0.758965, total: 28020.98, type: 'buy' }
    ];

    return (
        <div className="order-book">
            <div className="order-book__header">
                <Text type="subtitle">Price (USDT)</Text>
                <Text type="subtitle">Amounts (BTC)</Text>
                <Text type="subtitle">Total</Text>
            </div>
            <div className="order-book__list">
                {orders.map((order, index) => (
                    <div key={index} className={`order-book__item order-book__item--${order.type}`}>
                        <Text type="body">{order.price}</Text>
                        <Text type="body">{order.amount}</Text>
                        <Text type="body">{order.total}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderBook;
