import React, { useState } from 'react';
import Sidebar from "./components/sidebar";
import TopBarSection from "./components/TopBarSection";
import TopBarIcon from './components/TopBarIcon';
import TopSearchBar from './components/TopSearchBar';
import TopBarUser from './components/TopBarUser';
import Footer from './components/Footer';
import ContentPart from './components/ContentPart';
import Dashboard from './views/dashboard';
import Profile from './views/profile';
import Subscribers from './views/Subscribers';
import ResponseAsync from './views/ResponseAsync';
import ReserveMSISDNStatus from './views/ReserveMSISDNStatus';
import RecentSearches from './views/RecentSearches';
import CustomerProfile from './views/CustomerProfile';
import Order from './views/Order';
import PurchaseHistory from './views/PurchaseHistory';
import SearchHistory from './views/SearchHistory';
import Usage from './views/Usage';
import AdjustBalance from './views/AdjustBalance';
import ChangeAddress from './views/ChangeAddress';
import Plan from './views/Plan';
import ManageZipCode from './views/ManageZipCode';
import BulkUpload from './views/BulkUpload';
import BulkViewReport from './views/BulkViewReport';
import BulkReport from './views/BulkReport';
import MSISDNDisconnectReport from './views/MSISDNDisconnectReport';
import MSISDNChangeReport from './views/MSISDNChangeReport';
import SIMChangeReport from './views/SIMChangeReport';
import RestoreReport from './views/RestoreReport';
import SuspendedReport from './views/SuspendedReport';
import AddInventory from './views/AddInventory';
import SearchInventory from './views/SearchInventory';
import TotalAssignedSim from './views/TotalAssignedSim';
import AssignReassignSim from './views/AssignReassignSim';
import InventoryReport from './views/InventoryReport';
import AddInventoryReportsMaster from './views/AddInventoryReportsMaster';
import AssignToMVNOReport from './views/AssignToMVNOReport';
import ReassignToMVNO from './views/ReassignToMVNO';
import CreateNewOrder from './views/CreateNewOrder';
import PendingPortin from './views/PendingPortin';
import CancelPortin from './views/CancelPortin';
import CompletedPortin from './views/CompletedPortin';
import SearchPort from './views/SearchPort';
import PortinEligibility from './views/PortinEligibility';
import MSISDNSnapshotReport from './views/MSISDNSnapshotReport';
import PortInReport from './views/PortInReport';
import CompanyOverview from './views/CompanyOverview';
import NeedHelp from './views/NeedHelp';
import ViewSupportInquiry from './views/ViewSupportInquiry';
import CompletedInquiry from './views/CompletedInquiry';
import SummarizeReport from './views/SummarizeReport';
import TotalRecords from './views/TotalRecords';
import QuerySim from './views/QuerySim';
import Coverage from './views/Coverage';
import ValidateDevice from './views/ValidateDevice';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = ({}) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <Router>
      <div>
        <TopBarSection topBarToggle={sidebarToggle}>
          <TopBarIcon topbariconClick={toggleSidebar} />
          <TopSearchBar />
          <TopBarUser />
        </TopBarSection>

        <Sidebar sidebarToggle={sidebarToggle} />

          <ContentPart mainWrapperToggle={sidebarToggle}>
            <Routes>
              <Route index element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard  mainWrapperToggle={sidebarToggle} />} /> */}
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/Subscribers" element={<Subscribers />} />
               <Route path="/responseAsync" element={<ResponseAsync />} />
               <Route path="/ReserveMSISDNStatus" element={<ReserveMSISDNStatus />} />
               <Route path="/RecentSearches" element={<RecentSearches />} />
               <Route path="/CustomerProfile" element={<CustomerProfile />} />
               <Route path="/Order" element={<Order />} />
               <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
               <Route path="/SearchHistory" element={<SearchHistory />} />
               <Route path="/Usage" element={<Usage />} />
               <Route path="/AdjustBalance" element={<AdjustBalance />} />
               <Route path="/ChangeAddress" element={<ChangeAddress />} />
               <Route path="/Plan" element={<Plan />} />
               <Route path="/ManageZipCode" element={<ManageZipCode />} />
               <Route path="/BulkUpload" element={<BulkUpload />} />
               <Route path="/BulkViewReport" element={<BulkViewReport />} />
               <Route path="/BulkReport" element={<BulkReport />} />
               <Route path="/MSISDNDisconnectReport" element={<MSISDNDisconnectReport />} />
               <Route path="/MSISDNChangeReport" element={<MSISDNChangeReport />} />
               <Route path="/SIMChangeReport" element={<SIMChangeReport />} />
               <Route path="/RestoreReport" element={<RestoreReport />} />
               <Route path="/SuspendedReport" element={<SuspendedReport />} />
               <Route path="/AddInventory" element={<AddInventory />} />
               <Route path="/SearchInventory" element={<SearchInventory />} />
               <Route path="/TotalAssignedSim" element={<TotalAssignedSim />} />
               <Route path="/AssignReassignSim" element={<AssignReassignSim />} />
               <Route path="/InventoryReport" element={<InventoryReport />} />
               <Route path="/AddInventoryReportsMaster" element={<AddInventoryReportsMaster />} />
               <Route path="/AssignToMVNOReport" element={<AssignToMVNOReport />}  />
               <Route path="/ReassignToMVNO" element={<ReassignToMVNO />}  />
               <Route path="/CreateNewOrder" element={<CreateNewOrder />}  />
               <Route path="/PendingPortin" element={<PendingPortin />}  />
               <Route path="/CancelPortin" element={<CancelPortin />}  />
               <Route path="/CompletedPortin" element={<CompletedPortin />}  />
               <Route path="/SearchPort" element={<SearchPort />}  />
               <Route path="/PortinEligibility" element={<PortinEligibility />}  />
               <Route path="/MSISDNSnapshotReport" element={<MSISDNSnapshotReport />}  />
               <Route path="/PortInReport" element={<PortInReport />}  />
               <Route path="/CompanyOverview" element={<CompanyOverview />}  />
               <Route path="/NeedHelp" element={<NeedHelp />}  />
               <Route path="/ViewSupportInquiry" element={<ViewSupportInquiry />}  />
               <Route path="/CompletedInquiry" element={<CompletedInquiry />}  />
               <Route path="/SummarizeReport" element={<SummarizeReport />}  />
               <Route path="/TotalRecords" element={<TotalRecords />}  />
               <Route path="/QuerySim" element={<QuerySim />}  />
               <Route path="/Coverage" element={<Coverage />}  />
               <Route path="/ValidateDevice" element={<ValidateDevice />}  />

               
            </Routes>
          </ContentPart>
          
        <Footer  sidebarToggle={sidebarToggle} />
        
      </div>
    </Router>
  );
};

export default App;
