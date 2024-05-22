import '../../styles/atoms/icon.css';

interface IconProps {
    type: string
}

const Icon = ({ type }: IconProps) => {
    return <i className={`icon icon--${type}`}></i>;
};

export default Icon;
