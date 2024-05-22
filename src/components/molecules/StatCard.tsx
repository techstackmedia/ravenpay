import { ReactNode } from 'react';
import Text from '../atoms/Text';
import '../../styles/molecules/stat-card.css';

interface StatCardProps {
    label: ReactNode
    value: ReactNode
    type: string
}

const StatCard = ({ label, value }: StatCardProps) => {
    return (
        <div className="stat-card">
            <Text type="subtitle">{label}</Text>
            <Text type="title">{value}</Text>
        </div>
    );
};

export default StatCard;
