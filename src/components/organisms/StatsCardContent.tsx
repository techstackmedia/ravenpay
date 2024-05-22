import React from 'react';
import styles from '../../styles/organisms/stat-card-content.module.css';

interface StatCardContentProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const StatCardContent: React.FC<StatCardContentProps> = ({ icon, label, value }) => {
    return (
        <div className={styles.statCard}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.details}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
            </div>
        </div>
    );
};

export default StatCardContent;
