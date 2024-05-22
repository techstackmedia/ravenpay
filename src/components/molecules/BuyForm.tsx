import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import '../../styles/molecules/buy-form.css';

const BuyForm = () => {
    return (
        <div className="buy-form">
            <div className="buy-form__tabs">
                <Button text="Limit" type="tab" active />
                <Button text="Market" type="tab" />
                <Button text="Stop-Limit" type="tab" />
            </div>
            <div className="buy-form__fields">
                <Input label="Limit price" placeholder="0.00 USD" type={''} disabled={false} />
                <Input label="Amount" placeholder="0.00 USD" type={''} disabled={false} />
                <div className="buy-form__field">
                    <Text type="label">Type</Text>
                    <select className="buy-form__select">
                        <option>Good till cancelled</option>
                        <option>Immediate or cancel</option>
                        <option>Fill or kill</option>
                    </select>
                </div>
                <Input type="checkbox" label="Post Only" placeholder={''} disabled={false} />
                <Input label="Total" placeholder="0.00" disabled type={''} />
            </div>
            <Button text="Buy BTC" type="primary" className="buy-form__buy-button" />
            <div className="buy-form__info">
                <Text type="body">Total account value: 0.00</Text>
                <Text type="body">Open Orders: 0.00</Text>
                <Text type="body">Available: 0.00</Text>
            </div>
            <Button text="Deposit" type="secondary" className="buy-form__deposit-button" />
        </div>
    );
};

export default BuyForm;
