
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Sidebar = ({sidebarToggle }) => {
  return (

    <div className={`sidebar ${sidebarToggle ? 'sidebar-toggle' : ''}`}>
        <div className='toplogo'><a href=""><img src='https://att-solutions.telgoo5.com/telgoo5/images/ocslogo.png' alt="logo" /></a></div>
      <ul className="nav flex-column">
      
 
        <li className="nav-item">
        <Link className="nav-link" to="dashboard">
          <span className="material-symbols-outlined">home</span>
            <span className="ms-1">Dashboard</span>
        </Link>
        </li>

        {/* <li className="nav-item">
        <Link className="nav-link" to="profile">
          <span className="material-symbols-outlined">home</span>
            <span className="ms-1">Profile</span>
          </Link>
        </li> */}

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navcustomer" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">person</span>
            <span className="ms-1">Customer (PC194)</span>
          </a>

          <ul className="dropdown-menu" aria-labelledby="navcustomer">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="Subscribers"><span className="ms-1">Subscribers (PC179)</span></Link>
            </li>
            <li className="dropdown-item">
               <Link className="dropdown-item" to="ResponseAsync"><span className="ms-1">Async Response</span></Link>
            </li>
            <li className="dropdown-item">
               <Link className="dropdown-item" to="ReserveMSISDNStatus"><span className="ms-1">Reserve MSISDN Status</span></Link>
            </li>
           

        <li className="dropdown-toggle-click">
          <Link className="ooooo" to="">
            <span className="ms-1">Customer Profile (PC206)</span>
          </Link>

          <ul className="dropdown-menu-child">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="Order"><span className="ms-1">Orders (PC1)</span></Link>
            </li>
            <li className="dropdown-item">
               <Link className="dropdown-item" to="PurchaseHistory"><span className="ms-1">Purchase (PC2)</span></Link>
            </li>
            <li className="dropdown-item">
               <Link className="dropdown-item" to="SearchHistory"><span className="ms-1">History (PC3)</span></Link>
            </li>
            <li className="dropdown-item">
               <Link className="dropdown-item" to="Usage"><span className="ms-1">Usage (PC4)</span></Link>
            </li>
            <li className="dropdown-item">
               <Link className="dropdown-item" to="AdjustBalance"><span className="ms-1">Adjust Balance (PC222)</span></Link>
            </li>
            <li className="dropdown-item">
               <Link className="dropdown-item" to="ChangeAddress"><span className="ms-1"> Change Address (PC187)</span></Link>
            </li>
          </ul>
        </li>
        <li className="dropdown-item">
               <Link className="dropdown-item" to="RecentSearches"><span className="ms-1">Recent Searches</span></Link>
            </li>

          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" id="navplan" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">next_plan</span>
            <span className="ms-1">Plan (PC195)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navplan">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="Plan"><span className="ms-1">Lookup Tarriff (PC102)</span></Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navothersetting" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">settings</span>
            <span className="ms-1">Other Setting (PC196)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navothersetting">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="ManageZipCode"><span className="ms-1">Manage Zip Code (PC192)</span></Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navothersetting" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">upload</span>
            <span className="ms-1">Bulk Uploading (PC36)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navothersetting">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="BulkUpload"><span className="ms-1">Bulk Upload (PC36)</span></Link>
            </li>
            
            <li className="dropdown-toggle-click">
              <Link className="ooooo" to="">
                <span className="ms-1">Report (PC81)</span>
              </Link>
                <ul className="dropdown-menu-child">
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="BulkViewReport"><span className="ms-1">SIM Activation Report (PC43)</span></Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="MSISDNDisconnectReport"><span className="ms-1">MSISDN Disconnect Report (PC45)</span></Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="MSISDNChangeReport"><span className="ms-1">MSISDN Change Report (PC51)</span></Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="SIMChangeReport"><span className="ms-1">SIM Change Report (PC85)</span></Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="RestoreReport"><span className="ms-1">Restore Report (PC53)</span></Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="SuspendedReport"><span className="ms-1">Suspended Report (PC52)</span></Link>
                  </li>
                </ul>
        </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navothersetting" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">settings</span>
            <span className="ms-1">Inventory (PC197)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navothersetting">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="AddInventory"><span className="ms-1">Add Inventory (PC35)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="SearchInventory"><span className="ms-1">Search Inventory (PC80)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="TotalAssignedSim"><span className="ms-1">Total Assigned SIM (PC37)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="AssignReassignSim"><span className="ms-1">Assign/Re-Assign SIMs (PC84)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="InventoryReport"><span className="ms-1">Inventory Report (PC81)</span></Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navportin" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">order_approve</span>
            <span className="ms-1">Portin Order (PC198)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navportin">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="CreateNewOrder"><span className="ms-1">Create New Order (PC61)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="PendingPortin"><span className="ms-1">Pending Portin (PC62)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="CancelPortin"><span className="ms-1">Cancel Portin (PC63)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="CompletedPortin"><span className="ms-1">Completed Ports (PC64)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="SearchPort"><span className="ms-1">Search Ports (PC66)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="PortinEligibility"><span className="ms-1">Portin Eligibility (PC213)</span></Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navtelgoo5api" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">developer_guide</span>
            <span className="ms-1">Report (PC199)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navtelgoo5api">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="MSISDNSnapshotReport"><span className="ms-1">MSISDN Snapshot Report (PC25)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="PortInReport"><span className="ms-1">PortIn Report (PC167)</span></Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navtelgoo5api" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">developer_guide</span>
            <span className="ms-1">Telgoo5 API Guide (PC200)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navtelgoo5api">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="CompanyOverview"><span className="ms-1">Overview (PC94)</span></Link>
            </li>
          </ul>
        </li>
        

        <li className="nav-item">
          <Link className="nav-link" to="NeedHelp">
          <span className="material-symbols-outlined">help</span>
            <span className="ms-1">Need Help? (PC113)</span>
          </Link>
        </li>


        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navtelgoo5api" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">support_agent</span>
            <span className="ms-1">Inquiry (PC115)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navtelgoo5api">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="ViewSupportInquiry"><span className="ms-1">View Support Inquiry (PC201)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="CompletedInquiry"><span className="ms-1">Completed Inquiry (PC202)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="SummarizeReport"><span className="ms-1">Summarize Report (PC203)</span></Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="#">
          <span className="material-symbols-outlined">call_split</span>
            <span className="ms-1">Virtual NOC (PC135)</span>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navapi" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <span className="material-symbols-outlined">api</span>
            <span className="ms-1">API (PC214)</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navapi">
            <li className="dropdown-item">
              <Link className="dropdown-item" to="QuerySim"><span className="ms-1">Query Sim (PC215)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="Coverage"><span className="ms-1">Coverage (PC224)</span></Link>
            </li>
            <li className="dropdown-item">
              <Link className="dropdown-item" to="ValidateDevice"><span className="ms-1">Validate Device (PC134)</span></Link>
            </li>
          </ul>
        </li>
    </ul>
      
    </div>
    
  
    
  );
};

export default Sidebar;
