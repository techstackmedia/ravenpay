import React from 'react';
import styles from '../../styles/atoms/input.module.css';

interface InputsProps {
    type: 'text' | 'number' | 'password';
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ type, value, onChange }) => {
    return <input className={styles.input} type={type} value={value} onChange={onChange} />;
};

export default Inputs;
