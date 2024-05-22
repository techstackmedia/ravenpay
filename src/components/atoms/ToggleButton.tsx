import styles from '../../styles/atoms/toggleButton.module.css';

interface ToggleButtonProps {
    text: string
    isActive: string | boolean
    onClick: () => void
}

const ToggleButton = ({ text, isActive, onClick }: ToggleButtonProps) => {
    return (
        <button
            className={`${styles.toggleButton} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ToggleButton;
