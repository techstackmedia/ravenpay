import { ReactNode, createElement } from 'react';
import '../../styles/atoms/text.css';

interface TextProps {
    type: string;
    children: ReactNode;
}


const Text = ({ type, children }: TextProps) => {
    return createElement(type, { className: `text text--${type}` }, children);
};

export default Text;
