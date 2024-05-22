import React from 'react';
import Inputs from '../atoms/Inputs';
import Label from '../atoms/Label';
import Select from '../atoms/Select';
import styles from '../../styles/molecules/form-field.module.css';

interface FormFieldProps {
    label: string;
    inputType?: 'text' | 'number' | 'password' | 'select';
    options?: { label: string; value: string | number }[];
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, inputType = 'text', options = [], value, onChange }) => {
    return (
        <div className={styles.formField}>
            <Label text={label} />
            {inputType === 'select' ? (
                <Select options={options} value={value} onChange={onChange} />
            ) : (
                <Inputs type={inputType} value={value} onChange={onChange} />
            )}
        </div>
    );
};

export default FormField;
