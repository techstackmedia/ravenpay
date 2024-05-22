import React from 'react';
import styles from '../../styles/atoms/select.module.css';

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return <label className={styles.label}>{text}</label>;
};

export default Label;
