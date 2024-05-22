import '../../styles/atoms/button.css';

interface ButtonProps {
    text: string
    type: string
    onClick: () => void;
    active: boolean
    className: string
}

const Button = ({ text, type = 'button', onClick, active = false, className = '' }: ButtonProps) => {
    return <button className={`button button--${type} ${className}`} onClick={onClick} disabled={active}>{text}</button>;
};

Button.defaultProps = {
    onClick: null,
    active: false,
    className: '',
    type: 'button'
}

export default Button;
