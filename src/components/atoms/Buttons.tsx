import styles from '../../styles/atoms/button.module.css';

interface ButtonsProps {
    text: string
    type: string
    onClick: () => void;
    className: string
}

const Buttons = ({ text, type = 'button', onClick, className = '' }: ButtonsProps) => {
    return (
        <button className={`${styles.button} ${styles[type]} ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Buttons;
