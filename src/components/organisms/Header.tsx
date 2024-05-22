import Ticker from '../molecules/Ticker';
import '../../styles/organisms/header.css'

const Header = () => (
    <div className='header'>
        <Ticker pair="BTC/USDT" price="$20,634" />
    </div>
);

export default Header;
