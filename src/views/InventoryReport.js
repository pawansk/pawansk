import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import CardHeading from '../components/CardHeading';
import ModalComponent from '../components/ModalComponent';
import ModalBodyContentComponent from '../components/ModalBodyContentComponent';

const InventoryReport = () =>{
const [AttLiveTest, setAttLiveTest] = useState(false);
const [DemoTestMvno, setDemoTestMvno] = useState(false);
const [isAttLiveTestAbhi, AttLiveTestAbhi] = useState(false);
const zipCodeModalClick = () =>{
    setAttLiveTest(!AttLiveTest); 
};
const modalClose = () =>{
    setAttLiveTest(!AttLiveTest); 
};
const demoTestMvnoClick = () =>{
    setDemoTestMvno(!DemoTestMvno); 
};
const modalClose2 = () =>{
    setDemoTestMvno(!DemoTestMvno); 
};
const attLiveTestClick = () =>{
    AttLiveTestAbhi(!isAttLiveTestAbhi); 
};
const modalClose3 = () =>{
    AttLiveTestAbhi(!isAttLiveTestAbhi); 
};
const modalHeading = "AttLiveTest Details";
const modalHeading2 = "DEMO_TESTMVNO Details";
const modalHeading3 = "AttLiveTestAbhi Details";

    return(
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                 <CardHeading CardHeadingText ="Complete stock report" className="customer_notes_main">
                    <div className='row'>
                        <div className='col-md-12'>
                        <h4 class="mb-2"><span>SIM</span></h4>
                        <div class="alert alert-primary px-2 py-1 font-13 me-3 mb-1 d-inline-block">Stock - <b>38</b></div>
                        <div class="alert alert-success px-2 py-1 font-13 me-3 mb-1 d-inline-block">Assigned - <b>24</b></div>
                        <div class="alert alert-danger px-2 py-1 font-13 me-3 mb-1 d-inline-block">Not Assigned - <b>11</b></div>
                        </div>
                      
                    </div>
                </CardHeading>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-5 col-xl-6">
                 <CardHeading CardHeadingText ="Assigned stock report" className="customer_notes_main">
                    <div className='row'>
                        <div className='col-md-12'>
                        <h4 class="mb-2"><span>SIM</span></h4>
                        <div class="alert alert-primary font-13 p-0 me-2 d-inline-block mb-1">
                            <span className='px-2 py-1'>AttLiveTest - <b>24</b></span>
                             <Link to="" className='px-2 py-1 show-details-btn' onClick={zipCodeModalClick}>Show Details</Link> 
                        </div>
                        
                        <div class="alert alert-primary font-13 p-0 me-2 d-inline-block mb-0">
                            <span className='px-2 py-1'>DEMO_TESTMVNO - <b>3</b></span>
                             <Link to="" className='px-2 py-1 show-details-btn' onClick={demoTestMvnoClick}>Show Details</Link> 
                        </div>
                        <div class="alert alert-primary font-13 p-0 d-inline-block mb-0">
                            <span className='px-2 py-1'>AttLiveTestAbhi- <b>1</b></span>
                             <Link to="" className='px-2 py-1 show-details-btn' onClick={attLiveTestClick}>Show Details</Link> 
                        </div>
                        </div>

                    </div>
                </CardHeading>
            </div>
            
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2">
                <div className="rightTabSection">
                <div className="tabHeading">Add Inventory Reports</div>
                <div className="allTabSec">
                <div className="tab"><Link to="/AddInventoryReportsMaster">Add Inventory(Master) Report (PC39)</Link></div>
                <div className="tab"><Link to="/AssignToMVNOReport">Assign To MVNO Report (PC40)</Link></div>
                <div className="tab"><Link to="/ReassignToMVNO">Reassign To MVNO (PC41)</Link></div>
                </div>
                </div>

                <div className="rightTabSection mt-3">
                <div className="tabHeading">MVNO Reports</div>
                <div className="allTabSec">
                <div className="tab"><Link to="/SearchInventory">Search Inventory</Link></div>
                <div className="tab"><Link to="/TotalAssignedSim">Total Assigned SIM</Link></div>
                </div>
                </div>
            </div>

            <ModalComponent isOpen={AttLiveTest}  modalClose={modalClose}  modalHeading={modalHeading}  modalSize="modal-md">
            <ModalBodyContentComponent>
            <div className='row'>
                <div className='col-md-12'>
              <table className='custom-table'>
                <tr>
                    <th>Used</th>
                    <td>9</td>
                </tr>
                <tr>
                    <th>Free</th>
                    <td>8</td>
                </tr>
                <tr>
                    <th>Reserve</th>
                    <td>0</td>
                </tr>
              </table>
              </div>
            </div>
            </ModalBodyContentComponent>
        </ModalComponent> 


        <ModalComponent isOpen={DemoTestMvno}  modalClose={modalClose2}  modalHeading={modalHeading2}  modalSize="modal-md">
            <ModalBodyContentComponent>
            <div className='row'>
                <div className='col-md-12'>
              <table className='custom-table'>
                <tr>
                    <th>Used</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Free</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Reserve</th>
                    <td>2</td>
                </tr>
              </table>
              </div>
            </div>
            </ModalBodyContentComponent>
        </ModalComponent> 

        <ModalComponent isOpen={isAttLiveTestAbhi}  modalClose={modalClose3}  modalHeading={modalHeading3}  modalSize="modal-md">
            <ModalBodyContentComponent>
            <div className='row'>
                <div className='col-md-12'>
              <table className='custom-table'>
                <tr>
                    <th>Used</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Free</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Reserve</th>
                    <td>2</td>
                </tr>
              </table>
              </div>
            </div>
            </ModalBodyContentComponent>
        </ModalComponent> 
        </div>
    );
};

export default InventoryReport;