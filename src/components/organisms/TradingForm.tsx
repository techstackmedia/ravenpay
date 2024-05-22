import { useState } from 'react';
import FormField from '../molecules/FormField';
import ToggleButtonGroup from '../molecules/ToggleButtonGroup';
import Button from '../atoms/Buttons';
import styles from '../../styles/organisms/trading-form.module.css';
import Label from '../atoms/Label';

const TradingForm = () => {
    const [activeTab, setActiveTab] = useState('Buy');
    const [activeType, setActiveType] = useState('Limit');
    const [limitPrice, setLimitPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [orderType, setOrderType] = useState('Good till cancelled');
    const [isPostOnly, setIsPostOnly] = useState(false);

    const handleBuyClick = () => {
        console.log('Buy button clicked');
    };

    const handleDepositClick = () => {
        console.log('Deposit button clicked');
    };

    return (
        <div className={styles.tradingForm}>
            <ToggleButtonGroup
                buttons={['Buy', 'Sell']}
                activeButton={activeTab}
                onButtonClick={setActiveTab}
            />
            <ToggleButtonGroup
                buttons={['Limit', 'Market', 'Stop-Limit']}
                activeButton={activeType}
                onButtonClick={setActiveType}
            />
            {activeType === 'Limit' && (
                <>
                    <FormField
                        label="Limit price"
                        inputType="text"
                        value={limitPrice}
                        onChange={(e) => setLimitPrice(e.target.value)}
                    />
                    <FormField
                        label="Amount"
                        inputType="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <FormField
                        label="Type"
                        inputType="select"
                        options={[
                            { label: 'Good till cancelled', value: 'Good till cancelled' },
                            { label: 'Immediate or cancel', value: 'Immediate or cancel' },
                        ]}
                        value={orderType}
                        onChange={(e) => setOrderType(e.target.value)}
                    />
                    <div className={styles.postOnly}>
                        <input
                            type="checkbox"
                            checked={isPostOnly}
                            onChange={(e) => setIsPostOnly(e.target.checked)}
                        />
                        <Label text="Post Only" />
                    </div>
                </>
            )}
            <div className={styles.total}>
                <span>Total</span>
                <span>0.00</span>
            </div>
            <Button text="Buy BTC" type="buy" onClick={handleBuyClick} className={styles.buyButton} />
            <div className={styles.accountInfo}>
                <div>
                    <span>Total account value</span>
                    <span>0.00</span>
                </div>
                <div>
                    <span>Open Orders</span>
                    <span>0.00</span>
                </div>
                <div>
                    <span>Available</span>
                    <span>0.00</span>
                </div>
            </div>
            <Button text="Deposit" type="deposit" onClick={handleDepositClick} className={styles.depositButton} />
        </div>
    );
};

export default TradingForm;
