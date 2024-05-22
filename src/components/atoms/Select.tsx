import React from 'react';
import styles from '../../styles/atoms/select.module.css';

interface SelectOption {
    label: string;
    value: string | number;
}

interface SelectProps {
    options: SelectOption[];
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
    return (
        <select className={styles.select} value={value} onChange={onChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
