
import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';
import ModalComponent from '../components/ModalComponent';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { useState } from "react";

const PendingPortin = () => {
    const [msisdn, setMsisdn] = useState(false);
    const [updatePortin, setUpdatePortin] = useState(false);
    const [queryPortin, setQueryPortin] = useState(false);
    const [cancelPortin, setCancelPortin] = useState(false);

    const modalHeading = "Portin MSISDN Transactions";
    const modalOrderHeading = "CSR Screen For Update Portin";
    const modalATTHeading = "CSR Screen For Query Portin";
    const modalATTHeading2 = "CSR Screen For Cancel Portin";

    const handleClick1 = () => {
        setMsisdn(!msisdn);
    };
    const handleClick2 = (id) => {
        setUpdatePortin(!updatePortin);
    };
    const handleClick3 = (id) => {
        setQueryPortin(!queryPortin);
    };
    const handleClick4 = (id) => {
        setCancelPortin(!cancelPortin);
    };
    const modalClose = () => {
        setMsisdn(false);
        setUpdatePortin(false);
        setQueryPortin(false);
        setCancelPortin(false);
    };

    const selectReason = [
        {value:'Select Reason', text:'Select Reason'},
        {value:'Customer Wants a New Cingular Number(CC)', text:'Customer Wants a New Cingular Number(CC)'},
        {value:'Customer Declines Cingular Service(CD)', text:'Customer Declines Cingular Service(CD)'},
        {value:'Resubmitting New Port Request(MN)', text:'Resubmitting New Port Request(MN)'},
        {value:'MDN Not Valid(MV)', text:'MDN Not Valid(MV)'},
    ];

    const vendor = [
        {value:'Select', text:'Select'},
        {value:'All', text:'All'},
        {value:'admin', text:'admin'},
        {value:'AttLiveTest', text:'AttLiveTest'},
        {value:'AttLiveTestAbhi', text:'AttLiveTestAbhi'},
        {value:'DEMO_TESTMVNO', text:'DEMO_TESTMVNO'},
        {value:'TestTG5ATT', text:'TestTG5ATT'},
    ];
    
    const orderTable = [
        {'Sr No':{value:'1'}, 'MSISDN':{value:'706-216-9581', tdClass: 'tdClass', linkClass:'modal_text_link', onClick: handleClick1},
        'SIM':{value:'78568546846864865383',},'Vendor':{value:'DEMO_TESTMVNO'},'Portin Status':{value:'ER'},'Message':{value:'ER~MANDATORY PARAMETER PORTREQUESTNUMBER IS MISSING'},
        'Date':{value:'02-13-2024 08:35:16',}, 
        'Action':{value:'UPDATE PORTIN', tdClass: 'tdClassfull', linkClass:'modal_text_link', 
        actions: [
            { label: 'UPDATE PORTIN', onClick: () => handleClick2(2) }, // Define onClick handler for Edit button
            { label: 'QUERY PORTIN', onClick: () => handleClick3(3) }, // Define onClick handler for Delete button
            { label: 'CANCEL PORTIN', onClick: () => handleClick4(4) },
          ]},
    }
    ];

    return (
        <div>
            <CardHeading CardHeadingText ="Search"> 
        <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 '> <SelectOption label="Select Vendor" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'><TextInput label="MSISDN" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 '> <SelectOption label="Type" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="SIM" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>

            <div className="row">
            <div className='col-md-12'>
            <CardHeading CardHeadingText ="Pending Portin">
            <DataTable data={orderTable} handleClick1={handleClick1} handleClick2={handleClick2} handleClick3={handleClick3} handleClick4={handleClick4}  />

            <ModalComponent isOpen={msisdn}  modalClose={modalClose}  modalHeading={modalHeading}  modalSize="modal-md">
               <table className='custom-table'>
                <tr>
                    <th>API</th>
                    <td>PortinRequest</td>
                </tr>
                <tr>
                    <th>MSISDN</th>
                    <td>7062169581</td>
                </tr>
                <tr>
                    <th>SIM</th>
                    <td>89014103277204958719</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>30000109009</td>
                </tr>
                <tr>
                    <th>Message</th>
                    <td>subscriberNumber Is Not Eligible	</td>
                </tr>
                <tr>
                    <th>Created At</th>
                    <td>01-12-2024 16:42:58</td>
                </tr>
               </table>
            </ModalComponent>

            <ModalComponent isOpen={updatePortin}  modalClose={modalClose}  modalHeading={modalOrderHeading} formButtonName="Submit"  modalSize="modal-lg">
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="MSISDN" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Portin Request No." /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="SIM" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="IMEI" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Plan Code" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Billing Code" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pb-2 pt-2'> <h5>Subscriber</h5></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Subscriber" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="First Name" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Last Name" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Street Number" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Street Name" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Street Type" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Zipcode" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pb-2 pt-2'> <h5> Other Billing Provider</h5></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Billing Account Number" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Billing Account Password" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="First Name" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3'><TextInput label="Last Name" /></div>
            </div>
            </ModalComponent>

            <ModalComponent isOpen={queryPortin}  modalClose={modalClose}  modalHeading={modalATTHeading}  modalSize="modal-lg">
            <table className='custom-table'>
                <tr>
                    <th>Status</th>
                    <td>TG535</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>QueryPortin: Mandatory parameter portrequestnumber, servicezipcode is missing</td>
                </tr>
                <tr>
                    <th>Port Status</th>
                    <td>89014103277204958719</td>
                </tr>
                <tr>
                    <th>Line Status</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Reason Code</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Reason Description</th>
                    <td></td>
                </tr>
               </table>
            </ModalComponent>

            <ModalComponent isOpen={cancelPortin}  modalClose={modalClose} formButtonName="Submit"   modalHeading={modalATTHeading2}  modalSize="modal-md">
            <div className='row'>
                 <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3'> <SelectOption label="Reason Code" options={selectReason} /> </div>
                 </div>
            </ModalComponent>


            </CardHeading>
            </div>
            </div>

        </div>
    );
};

export default PendingPortin;