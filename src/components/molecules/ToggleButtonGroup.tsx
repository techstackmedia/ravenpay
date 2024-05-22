import ToggleButton from '../atoms/ToggleButton';
import styles from '../../styles/molecules/toggleButtonGroup.module.css';

interface ToggleButtonGroupProps {
    buttons: string[];
    activeButton: string;
    onButtonClick: (button: string) => void;
}

const ToggleButtonGroup = ({ buttons, activeButton, onButtonClick }: ToggleButtonGroupProps) => {
    return (
        <div className={styles.toggleButtonGroup}>
            {buttons.map((button, index) => (
                <ToggleButton
                    key={index}
                    text={button}
                    isActive={activeButton === button}
                    onClick={() => onButtonClick(button)}
                />
            ))}
        </div>
    );
};

export default ToggleButtonGroup;
