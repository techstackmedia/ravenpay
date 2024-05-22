
// import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import '../../styles/molecules/ticker.css';
import bitcoin from '../../assets/bitcoin.png';
import crypto from '../../assets/crypto.png';
import arrowDown from '../../assets/arrowDown.png'

interface TickerProps {
    pair: string
    price: string
}

const Ticker = ({ pair, price }: TickerProps) => (
    <div className='ticker'>
        {/* <Icon type="span" /> */}
        {/* <Icon type="span" /> */}
        <div style={{ marginRight: 10 }}>
            <img src={bitcoin} />
            <img src={crypto} style={{ position: 'relative', left: -5 }} />
        </div>
        <div className='currency' style={{ display: 'flex', gap: 10 }}>
            <Text type="div">{pair}</Text>
            <img src={arrowDown} width={10} height={10} />
            <Text type="div"><span style={{ color: '#00C076' }}>{price}</span></Text>
        </div>
    </div>
);

export default Ticker;
