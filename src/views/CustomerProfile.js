
import PageTitle from "../components/PageTitle";
import CardHeading from "../components/CardHeading";
import DataTable from "../components/DataTable";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import SelectOption from "../components/SelectOption";
import CustomerInformationTop from '../components/CustomerInformationTop';
import RightTabSection from '../components/RightTabSection';
import Button from "../components/Button";
import { useState } from "react";
import React, { useRef } from 'react';
import ModalComponent from '../components/ModalComponent';
import ModalBodyContentComponent from '../components/ModalBodyContentComponent';

const CustomerProfile = () =>{
    const [loadCarriedToggle, setLoadCarriedToggle] = useState(false);
    const [bydefaultshow, setBydefaultshow] = useState(true);
    const sectionRef = useRef(null);


    const loadCarrierClick = () =>{
        setLoadCarriedToggle(true);
        setBydefaultshow(true);
        setTimeout(() => {
            if (sectionRef.current) {
                console.log(sectionRef.current); 
                sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                const offset = 670; // Adjust as needed
                window.scrollBy(0, offset);
                // sectionRef.current.style.marginTop = '50px';
            }
        }, 100);
    };

    const [activeTab, setIsActive] = useState(1);
    
    const handleTabClick =(tabNumber)=>{
        setIsActive(tabNumber);
        setLoadCarriedToggle(false);
        setBydefaultshow(false);
    };
    
    const loadCustomerClick = () =>{
        setBydefaultshow(true)
        setIsActive(false);
    };

    
    const PageHeading = "Customer Profile";
    const rightHeading = "Active";
 
    const tpspStatus = [
        {'Result Code':{value:'1000'}, 'Result Status':{value:'AGW_SERVICE_SUCCESS'}, 'Air Time Expiration':{value:'03-22-2024'}, 'Monetary Balance':{value:'$ 0.00'},
     'Auto Renew Status':{value:'On'}, 'Auto Renew Execution Date':{value:'03-20-2024'}}, 
     ];

     const balanceDetails = [
        {'Service Type':{value:'DYN_DOM_VOICE'},'Units Description':{value:'MINUTES'},'Description':{value:'250'}},
        { 'Service Type':{value:'DYN_INT_ROAM_VOICE_NA'},'Units Description':{value:'MINUTES'},'Description':{value:'0'}},
        { 'Service Type':{value:'DYN_INT_ROAM_MMS_NA'},'Units Description':{value:'MMS'},'Description':{value:'0'}},
        { 'Service Type':{value:'DYN_DOM_LOW_DATA_6'},'Units Description':{value:'MB'},'Description':{value:'0'}},
        { 'Service Type':{value:'DYN_DOM_HIGH_DATA_LOW_TETHERING_2'},'Units Description':{value:'MB'},'Description':{value:'0'}},
        {'Service Type':{value:'DYN_INT_ROAM_LOW_DATA_NA'},'Units Description':{value:'MB'},'Description':{value:'0'}}
    ];
    const typeChanges = [
        { value: 'Select', text: 'Select' },
        { value: 'Suspend', text: 'Suspend' },
        { value: 'Cancel', text: 'Cancel' },
        { value: 'Restore', text: 'Restore' },
        { value: 'Reconnect', text: 'Reconnect' },
    ];
    const reasonCode = [
        { value: 'Select Reason Code', text: 'Select Reason Code' },
        { value: 'Restore from suspend lost(PS)', text: 'Restore from suspend lost(PS)' },
        { value: 'Restore from suspend stolen(ST)', text: 'Restore from suspend stolen(ST)' },
    ];
    const retainBalance = [
        {value : 'Select', text : 'Select'},
        {value : 'Yes', text : 'Yes'},
        {value : 'No', text : 'No'},
    ];

    const selectBuket = [
        {value : 'Select Plan/Tariff', text : 'Select Plan/Tariff'},
        {value : 'Voice Text Data 500 plan (VTD500)', text : 'Voice Text Data 500 plan (VTD500)'},
        {value : 'AttData1GB (AttData1GB)', text : 'AttData1GB (AttData1GB)'},
        {value : 'Test TG001 plan (TG250)', text : 'Test TG001 plan (TG250)'},
        {value : 'Test 30 day plan (T30DAY)', text : 'Test 30 day plan (T30DAY)'},
        {value : 'Monetary Balance 15 plan (Monetary15)', text : 'Monetary Balance 15 plan (Monetary15)'},
        {value : 'Dynamic VOICE SMS DATA MMS (DYNVSDM1000)', text : 'Dynamic VOICE SMS DATA MMS (DYNVSDM1000)'},
        {value : 'DATA1000 (DATA1000)', text : 'DATA1000 (DATA1000)'},
    ];
    const productFeatures = [
        {'S.No': { value: '1' }, 'Offering Code': { value: 'APNPREPO', classNamew: 'highlight'}, 'Description': { value: 'APN PRE PROV O SOC' }, 'Date':{value: '	02-20-2024'},},
        {'S.No': { value: '2' }, 'Offering Code': { value: 'BVMRO', classNamew: 'highlight'}, 'Description': { value: 'BasicVM-Reseller' }, 'Date':{value: '	02-20-2024'},},
        {'S.No': { value: '3' }, 'Offering Code': { value: 'RMABRO', classNamew: 'highlight'}, 'Description': { value: 'ARM OPT ABR SOC' }, 'Date':{value: '	02-20-2024'},},
        {'S.No': { value: '4' }, 'Offering Code': { value: 'RMVLTEO', classNamew: 'highlight'}, 'Description': { value: 'RM OPT ABR SOC' }, 'Date':{value: '	02-20-2024'},},
        {'S.No': { value: '5' }, 'Offering Code': { value: 'TGO1MMSIO', classNamew: 'highlight'}, 'Description': { value: '	TGO1 OPT MMS' }, 'Date':{value: '	02-20-2024'},},
    ];
    const callforwarding = [
       { value:'Select Enabled Indicator', text:'Select Enabled Indicator'},
       { value:'True', text:'True'},
       { value:'False', text:'False'},
    ];
 const selectVendor = [
    { value:'Select Vendor/MVNO', text:'Select Vendor/MVNO'},
    { value:'admin', text:'admin'},
    { value:'AttLiveTestAbhi', text:'AttLiveTestAbhi'},
    { value:'DEMO_TESTMVNO', text:'DEMO_TESTMVNO'},
    { value:'TestTG5ATT', text:'TestTG5ATT'},
 ];

 const modalHeading="";
 const [modalContent, setModalContent] = useState(false);

 const handleCellClick = () => {
  setModalContent(!modalContent)
 };

 const modalClose = () => {
   setModalContent(!modalContent)
 };

 const handleCellClickNotes = () =>{
    setModalContent(!modalContent)
 };

const subscriptionChildTable = [
    {'S.No': { value: '1' }, 'Offering Code':{action :{value:'APNPREPO', tdClass:'link-child'}, tdClass:'link-child'}, 'Description': { value: 'APN PRE PROV O SOC' }, 'Date':{value: '02-20-2024'}, },
    {'S.No': { value: '2' }, 'Offering Code':{action :{value:'RMABRO', tdClass:'link-child'}, tdClass:'link-child'}, 'Description': { value: 'RM OPT ABR SOC' }, 'Date':{value: '02-20-2024'}, }, 
    {'S.No': { value: '3' }, 'Offering Code':{action :{value:'RMVLTEO', tdClass:'link-child'}, tdClass:'link-child'}, 'Description': { value: 'RM OPT VOLTE SOC' }, 'Date':{value: '02-20-2024'}, }, 
    {'S.No': { value: '4' }, 'Offering Code':{action :{value:'TGO1MMSIO', tdClass:'link-child'}, tdClass:'link-child'}, 'Description': { value: 'TGO1 OPT MMS' }, 'Date':{value: '02-20-2024'}, },  
];
const subscriptionChildTablePopup = [
    {'S.No': { value: '1' }, 'Feature Code': { value: 'BVM2',}, 'Feature Description': { value: 'Basic Voice Mail' }, 'Data Usage Category':{value: ''}},
    {'S.No': { value: '2' }, 'Feature Code': { value: 'VMWI',}, 'Feature Description': { value: 'Message Waiting Ind' }, 'Data Usage Category':{value: ''}},
];

const modalHeadingNotes ="View Customer Notes";
const modalNotes = [
    {'Customer ID': { value: '10890' }, 'Notes': { value: 'Billing Code changed successfully to 123456',}, 'Posted By': { value: 'supadmin' }, 'supadmin':{value: 'Close'}},
];

    return(
        <div>
        <PageTitle PageHeading={PageHeading} rightHeading={rightHeading}></PageTitle>

        <CustomerInformationTop loadCarrierClick={loadCarrierClick} loadCustomerClick={loadCustomerClick} />


    <div className="row">

    <div className="col-md-10 col-xl-10">

    {/* Customer Information, notes section start*/}
       {bydefaultshow && <div className="bydefaultshow">
                <div className="row">
                <div className="col-12 col-sm-7 col-md-7">
                <CardHeading CardHeadingText ="Customer Information">
                <div className="customer_table">
                    <table cellSpacing={0}>
                        <tr>
                            <td>
                            <p>Customer ID</p>
                            <span>10722</span>
                            </td>
                            <td>
                            <p>Vendor ID</p>
                            <span>DEMO_TESTMVNO</span>
                            </td>
                            <td>
                            <p>City</p>
                            <span>Columbia</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <p>State</p>
                            <span>South Carolina</span>
                            </td>
                            <td>
                            <p>Zip</p>
                            <span>29201</span>
                            </td>
                            <td>
                            <p>MSISDN</p>
                            <span>803-319-4342</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <p>SIM</p>
                            <span>89012804331202875601</span>
                            </td>
                            <td>
                            <p>Bill Cycle Frequency</p>
                            <span>30</span>
                            </td>
                            <td>
                            <p>Carrier</p>
                            <span>ATT</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <p>Last Action</p>
                            <span>DeactivateSubscriber</span>
                            </td>
                            <td>
                            <p>Assign Date</p>
                            <span>01-30-2024</span>
                            </td>
                            <td>
                            <p>Plan Code</p>
                            <span>TTV02</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <p>Billing Code</p>
                            <span>N/A</span>
                            </td>
                        </tr>
                    </table>
                </div>
                </CardHeading>
                </div>

                <div className="col-12 col-sm-5 col-md-5">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                <CardHeading CardHeadingText ="Customer Notes" className="customer_notes_main">
                    <div  className="overflowScroll heightCustomer">
                <div className="customer_notes_line">
                <div>
                <a href="#" className="customer_notes" onClick={handleCellClickNotes}>
                    <span>DEMO_TESTMVNO</span>
                    <p>MDN restored successfully!</p>
                </a>
                </div>
                <div className="customer_notes_date">01/22/2024</div>
                </div>

                <div className="customer_notes_line">
                <div>
                <a href="#" className="customer_notes">
                    <span>DEMO_TESTMVNO</span>
                    <p>MDN suspended successfully!</p>
                </a>
                </div>
                <div className="customer_notes_date">01/22/2024</div>
                </div>

                <div className="customer_notes_line">
                <div>
                <a href="#" className="customer_notes">
                    <span>ASYNC</span>
                    <p>Activation ASYNC Success 89014103277204958230</p>
                </a>
                </div>
                <div className="customer_notes_date">01/22/2024</div>
                </div>
                </div>
                </CardHeading>
                <ModalComponent isOpen={modalContent}  modalClose={modalClose}  modalHeading={modalHeadingNotes}  modalSize="modal-lg">
            <div>
                <ModalBodyContentComponent>
                <DataTable data={modalNotes} />
                </ModalBodyContentComponent>
              </div>  
            
            </ModalComponent> 
                </div>
                
                <div className="col-12 col-sm-12 col-md-12">
                <CardHeading CardHeadingText ="Add Notes">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4"><label>Customer ID <span class="compulsory">*</span></label></div>
                        <div className="col-12 col-sm-12 col-md-8"><TextInput /></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 col-sm-12 col-md-4"><label>Notes</label></div>
                        <div className="col-12 col-sm-12 col-md-8"><TextArea rows={2} /></div>
                    </div>
                    <div className="d-flex justify-content-end"><Button className="btn btn-primary mt-2" value="Submit" /></div>
                </CardHeading>
                </div>
                </div> 
                </div>

                </div>

               
        </div>}
    {/* Customer Information, notes section end*/}
    

    {/* loadCarriedToggle section start <div className="load_carrier_status" ref={sectionRef}>*/}
        {loadCarriedToggle && 
       <div ref={sectionRef}>
      <CardHeading>
             <CardHeading CardHeadingText ="Subscription Details">
              <div className="customer_table mb-3">
                    <table cellSpacing={0}>
                        <tr>
                            <td>
                            <p>Status</p>
                            <span>Active</span>
                            </td>
                            <td>
                            <p>Status Reason Code</p>
                            <span>PI</span>
                            </td>
                            <td>
                            <p>Equipment Type</p>
                            <span>G</span>
                            </td>
                            <td>
                            <p>Technology Type</p>
                            <span>LTE</span>
                            </td>
                            <td>
                            <p>IMSI</p>
                            <span>310280127737841</span>
                            </td>
                           
                        </tr>

                        <tr>
                        <td>
                            <p>IMEI</p>
                            <span>356724574034588</span>
                            </td>
                            <td>
                            <p>IMEI Type</p>
                            <span>6P</span>
                            </td>
                            <td>
                            <p>SIM</p>
                            <span>89012802331277808570</span>
                            </td>
                            <td>
                            <p>Manufacturer Makee</p>
                            <span>SAMSUNG</span>
                            </td>
                            <td>
                            <p>Manufacturer Model</p>
                            <span>SM-S901U </span>
                            </td>
                        </tr>

                        <tr>
                        <td>
                            <p>Billing Account Number</p>
                            <span>534327292266</span>
                            </td>
                            <td>
                            <p>Billing Market</p>
                            <span>GAC</span>
                            </td>
                            <td>
                            <p>Billing Sub Market</p>
                            <span>033</span>
                            </td>
                        </tr>


                       
                    </table>
                </div>
                <DataTable data={subscriptionChildTable} handleModalClick={handleCellClick} />


                <ModalComponent isOpen={modalContent}  modalClose={modalClose}  modalHeading={modalHeading}  modalSize="modal-lg">
            <div>
                <ModalBodyContentComponent>
                <DataTable data={subscriptionChildTablePopup} />
                </ModalBodyContentComponent>
              </div>  
            
            </ModalComponent> 


             </CardHeading>

            <CardHeading CardHeadingText ="TPSP Status" smallHeading="smallHeading">
                <DataTable data={tpspStatus} />
            </CardHeading>

            <CardHeading CardHeadingText ="Balance Details" smallHeading="smallHeading">
                <DataTable data={balanceDetails} />
            </CardHeading>
           
        </CardHeading> </div>}
    {/* loadCarriedToggle section end*/}



    {/* All Tab section start*/}

     <div>
         {/* Status (PC6) tab start */}
            {
            activeTab === 'tab1' && <div>
            <CardHeading CardHeadingText ="Update Customer - Change Status">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Type of Change" options={typeChanges}  /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Reason Code" options={reasonCode} compulsory="*" /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <Button className="btn btn-primary mt-29" value="Change Status" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Status (PC6) tab end */}

{/* Suspend Service (PC229) tab start */}
{
            activeTab === 'tab2' && <div>
            <CardHeading CardHeadingText ="Update Customer - Suspend Service">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Retain Balance" options={retainBalance} compulsory="*" /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <Button className="btn btn-primary mt-29" value="Apply" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Suspend Service (PC229) tab end */}

        {/* Restore Service tab start */}
        {
            activeTab === 'tab3' && <div>
            <CardHeading CardHeadingText ="Update Customer - Restore Service">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Retain Balance" options={retainBalance} /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <Button className="btn btn-primary mt-29" value="Apply" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Restore Service tab end */}

        {/* Phone Config  tab start */}
        {
            activeTab === 'tab4' && <div>
            <CardHeading CardHeadingText ="Update Customer - Phone Config">
            <CardHeading CardHeadingText ="Change SIM" smallHeading="smallHeading">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="Old SIM" value="89012802331277808554" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="New SIM" value="" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2"><TextInput label="Zip Code" value="" /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>

            <CardHeading CardHeadingText ="Change Mobile number" smallHeading="smallHeading">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="Current MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-3"><TextInput label="Zip Code" value="" /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>

            <CardHeading CardHeadingText ="Swap IMEI" smallHeading="smallHeading">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-3"><TextInput label="New IMEI" value="" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Reason Code" options={reasonCode} /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2"><TextInput label="Zip Code" value="" /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>


            </CardHeading>
            </div>
            }
        {/* Phone Config  tab end */}

        {/* Purchase Bucket tab start */}
        {
            activeTab === 'tab5' && <div>
            <CardHeading CardHeadingText ="Update Customer - Purchase Bucket">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Select Bucket" options={selectBuket} /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Keep Expiry Same" options={retainBalance} /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Purchase Bucket tab end */}

         {/* Purchase Topup Bucket tab start */}
         {
            activeTab === 'tab6' && <div>
            <CardHeading CardHeadingText ="Update Customer - Purchase Topup Bucket">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Select Bucket" options={selectBuket} /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Purchase Topup Bucket tab end */}

        {/* Product/Features tab start */}
        {
            activeTab === 'tab7' && <div>
            <CardHeading CardHeadingText ="Product/Features">
            <DataTable data={productFeatures} />
            </CardHeading>
            </div>
            }
        {/* Product/Features tab end */}

        {/* Resend OTA tab start */}
        {
            activeTab === 'tab8' && <div>
            <CardHeading CardHeadingText ="Update Customer - Resend OTA">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Resend OTA tab end */}
        
        {/* Confirm HLR Registration tab start */}
        {
            activeTab === 'tab9' && <div>
            <CardHeading CardHeadingText ="Update Customer - Confirm HLR Registration">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Confirm HLR Registration tab end */}

        {/* Update Call Forward Details tab start */}
        {
            activeTab === 'tab10' && <div>
            <CardHeading CardHeadingText ="Update Customer - Update Call Forward Details">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="Forward To Subscriber Number" compulsory="*" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Call Forwarding Enabled Indicator" compulsory="*" options={callforwarding} /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Update Call Forward Details tab end */}

         {/* Change Billing Code tab start */}
         {
            activeTab === 'tab11' && <div>
            <CardHeading CardHeadingText ="Update Customer - Change Billing Code">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><TextInput label="MSISDN" value="8945656867853" readOnlyInput="readOnlyInput" /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Billing Code" compulsory="*" options={callforwarding} /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Change Billing Code tab end */}

        {/* Switch MVNO tab start */}
        {
            activeTab === 'tab12' && <div>
            <CardHeading CardHeadingText ="Update Customer - Switch MVNO">
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Select Vendor/MVNO" options={selectVendor} /></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"><SelectOption label="Select Bucket" options={selectVendor} /></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
            </div>
            </CardHeading>
            </div>
            }
        {/* Switch MVNO tab end */}



      </div>
    {/* All Tab section end*/}
    





    </div>



    <div className="col-md-2 col-xl-2">
    <RightTabSection handleTabClick={handleTabClick} activeTab={activeTab} />
    </div>



    </div>

    </div>
    );
};

export default CustomerProfile;