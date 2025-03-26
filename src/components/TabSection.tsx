
import { useState } from 'react';

interface TabProps {
  id: string;
  label: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

interface TabsProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
}

const Tab = ({ id, label, isActive, onClick }: TabProps) => {
  return (
    <button
      id={`tab-${id}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      className={`px-5 py-3 font-medium transition-all duration-300 ease-apple
        ${isActive 
          ? 'tab-active' 
          : 'text-gray-600 hover:text-hms-medium-green border-b-2 border-transparent'
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabPanel = ({ id, children, isActive }: { id: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <div
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className={`pt-8 transition-opacity duration-300 ease-apple
        ${isActive ? 'opacity-100' : 'hidden opacity-0'}`}
    >
      {children}
    </div>
  );
};

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      <div 
        className="flex overflow-x-auto pb-1 border-b border-gray-200 no-scrollbar"
        role="tablist"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div className="mt-2">
        {tabs.map((tab) => (
          <TabPanel
            key={tab.id}
            id={tab.id}
            isActive={activeTab === tab.id}
          >
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
