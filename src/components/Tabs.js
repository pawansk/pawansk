import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Tab 1</div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Tab 2</div>
        <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Tab 3</div>
        <div className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>Tab 4</div>
        <div className={`tab ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>Tab 5</div>
      </div>

      <div className="col-md-10">
        <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>Tab 1 content here...</div>
        <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>Tab 2 content here...</div>
        <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>Tab 3 content here...</div>
        <div style={{ display: activeTab === 4 ? 'block' : 'none' }}>Tab 4 content here...</div>
        <div style={{ display: activeTab === 5 ? 'block' : 'none' }}>Tab 5 content here...</div>
      </div>
    </div>
  );
};

export default Tabs;
