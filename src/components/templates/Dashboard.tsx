import { useState, useRef, useEffect } from 'react';
import profile from '../../assets/profile.webp';
import '../../styles/templates/dashboard.css';
import StatCard from '../molecules/StatCard';
import Tab from '../molecules/Tab';
import OrderBook from '../organisms/OrderBook';
import RecentTrades from '../organisms/RecentTrades';
import UserProfile from '../organisms/UserProfile';
import Button from '../atoms/Button';
import Chart from '../organisms/Chart';
import Header from '../organisms/Header';
import TradingForm from '../organisms/TradingForm';
import Line from '../../assets/Line.png'
import Menu from '../../assets/Menu.png'
import Logo from '../../assets/Logomark.png'
import StatCardContent from '../organisms/StatsCardContent';
import ChangeIcon from '../Icons/ChangeIcon';
import HighIcon from '../Icons/HignIcon';
import LowIcon from '../Icons/LowIcon';

const user = {
  name: 'John Doe',
  bio: 'Software Engineer at Tech Company',
  avatar: profile
};

const handleMessageClick = () => {
  alert('Message button clicked');
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Charts');
  const [showBoard, setShowBoard] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const tradingFormRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBuyTradersForm = () => {
    setShowBoard(true);
  };

  const handleSellTradersForm = () => {
    setShowBoard(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (tradingFormRef.current && !tradingFormRef.current.contains(event.target as Node)) {
      setShowBoard(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showBoard, showDropdown]);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div style={{ display: 'flex', gap: 10, width: 400, alignItems: 'center' }}>
          <img src={Logo} width={30} height={30} />
          <h1 className="dashboard__title">Sisyphus</h1>
        </div>
        <div className="dashboard__user">
          <img src={profile} alt="User Avatar" className="dashboard__avatar" />
          <img src={Line} alt='globe icon' />
          <img
            src={Menu}
            alt='menu icon'
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ cursor: 'pointer' }}
          />
          {showDropdown && (
            <div className="dropdown" ref={dropdownRef}>
              <div>Exchange</div>
              <div>Wallets</div>
              <div>Roqqu Hub</div>
              <div>Log out</div>
            </div>
          )}
        </div>
      </div>
      <Header />
      <div className="dashboard__stats">
        <StatCardContent icon={<ChangeIcon />} label="24h Change" value="520.80 +1.25%" />
        <StatCardContent icon={<HighIcon />} label="24h High" value="520.80 +1.25%" />
        <StatCardContent icon={<LowIcon />} label="24h Low" value="520.80 +1.25%" />
      </div>
      <div className="dashboard__stats">
        <StatCard type='' label="24h Change" value="520.80 +1.25%" />
        <StatCard type='' label="24h High" value="520.80 +1.25%" />
        <StatCard type='' label="24h Low" value="520.80 +1.25%" />
      </div>
      <Tab tabs={['Charts', 'Orderbook', 'Recent trades']} activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="dashboard__content">
        {activeTab === 'Charts' && <Chart />}
        {activeTab === 'Orderbook' && <OrderBook />}
        {activeTab === 'Recent trades' && <RecentTrades />}
      </div>
      {
        showBoard ? <div ref={tradingFormRef}><TradingForm /></div> : <>
          <UserProfile user={user} onMessageClick={handleMessageClick} />
          <div className="dashboard__actions">
            <Button text="Buy" type="buy" onClick={handleBuyTradersForm} />
            <Button text="Sell" type="sell" onClick={handleSellTradersForm} />
          </div>
        </>
      }
    </div>
  );
};

export default Dashboard;
