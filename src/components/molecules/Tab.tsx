import '../../styles/molecules/tab.css';

interface TabProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const Tab = ({ tabs, activeTab, onTabChange }: TabProps) => {
    return (
        <div className="tab">
            {tabs.map(tab => (
                <button
                    key={tab}
                    className={`tab__button ${activeTab === tab ? 'tab__button--active' : ''}`}
                    onClick={() => onTabChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tab;
