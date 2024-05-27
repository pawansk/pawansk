
const RightTabSection = ({handleTabClick, activeTab}) =>{

    return(
        <div className="rightTabSection">
        <div className="tabHeading">Quick Links</div>
        <div className="allTabSec">
        <div onClick={() => handleTabClick('tab1')} className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}>Status (PC6)</div>
        <div onClick={() => handleTabClick('tab2')} className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}>Suspend Service (PC229)</div>
        <div onClick={() => handleTabClick('tab3')} className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}>Restore Service (PC230)</div>
        <div onClick={() => handleTabClick('tab4')} className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}>Phone Config (PC7)</div>
        <div onClick={() => handleTabClick('tab5')} className={`tab ${activeTab === 'tab5' ? 'active' : ''}`}>Purchase Bucket (PC207)</div>
        <div onClick={() => handleTabClick('tab6')} className={`tab ${activeTab === 'tab6' ? 'active' : ''}`}>Purchase Topup Bucket (PC208)</div>
        <div onClick={() => handleTabClick('tab7')} className={`tab ${activeTab === 'tab7' ? 'active' : ''}`}>Product/Features (PC209)</div>
        <div onClick={() => handleTabClick('tab8')} className={`tab ${activeTab === 'tab8' ? 'active' : ''}`}>Resend OTA (PC225)</div>
        <div onClick={() => handleTabClick('tab9')} className={`tab ${activeTab === 'tab9' ? 'active' : ''}`}>Confirm HLR Registration (PC226)</div>
        <div onClick={() => handleTabClick('tab10')} className={`tab ${activeTab === 'tab10' ? 'active' : ''}`}>Update Call Forward Details (PC227)</div>
        <div onClick={() => handleTabClick('tab11')} className={`tab ${activeTab === 'tab11' ? 'active' : ''}`}>Change Billing Code (PC232)</div>
        <div onClick={() => handleTabClick('tab12')} className={`tab ${activeTab === 'tab12' ? 'active' : ''}`}>Switch MVNO</div>
        </div>
        </div>

    );

};

export default RightTabSection;
