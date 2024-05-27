import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import TextInput from '../components/TextInput';
import SelectOption from '../components/SelectOption';
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import ModalComponent from '../components/ModalComponent';
import ModalBodyContentComponent from '../components/ModalBodyContentComponent';
import CardHeading from '../components/CardHeading';

const MSISDNSnapshotReport = ({  }) => {
    const [textInputValue, setTextInputValue] = useState('');

    const [selectedOption, setSelectedOption] = useState('Select');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };
    
      const vendor = [
        { value: 'Select', text: 'Select' },
        { value: 'Admin', text: 'Admin' },
        { value: 'AttLiveTest', text: 'AttLiveTest' },
        { value: 'AttLiveTestAbhi', text: 'AttLiveTestAbhi' },
        { value: 'DEMO_TESTMVNO', text: 'DEMO_TESTMVNO' }
      ];

      const status = [
        { value: 'Select', text: 'Select' },
        { value: 'Active', text: 'Active' },
        { value: 'Deactive', text: 'Deactive' },
        { value: 'Rejected', text: 'Rejected' },
        { value: 'Suspended', text: 'Suspended' },
        { value: 'Reserve', text: 'Reserve' }
      ];
      const account = [
        { value: 'Select', text: 'Select' },
        { value: 'Activation', text: 'Activation' },
        { value: 'Porting', text: 'Porting' }
      ];

    const PageHeading ="MSISDN Snapshot Report"
    const handleTextInputChange = (e) => {
        setTextInputValue(e.target.value);
      };

      const [modalContent, setModalContent] = useState(false);

    
      const modalClose = () => {
        setModalContent(!modalContent)
      };
    
const msisdnTable = [
   { 'Sr No': { value: '1' }, 'ACC Type': { value: 'PORTING', classNamew: 'highlight' }, 
    'Vendor/MVNO': { value: 'PORTING' }, 'MSISDN':{value: '754-876-7676', link: '/dashboard',},
    'SIM':{value:'68678685689645474'}, 'IMEI':{value:'544757586785354'}, 'Zip':{value:'55474'},
    'Activation Date':{value:'11-05-2024 23:00:54'},'Account Status':{value:'ACTIVE', tdClass:'table-active'},},

    { 'Sr No': { value: '2', className: 'highlight' }, 'ACC Type': { value: 'PORTING', classNamew: 'highlight' }, 
    'Vendor/MVNO': { value: 'AttLiveTestAbhi' }, 'MSISDN':{value: '867-876-7864', link: '/dashboard',},
    'SIM':{value:'68678685689645474'}, 'IMEI':{value:'756757586785007'}, 'Zip':{value:'65740'},
    'Activation Date':{value:'11-05-2024 23:00:54'},'Account Status':{value:'ACTIVE', tdClass:'table-active'},   },

    { 'Sr No': { value: '3', className: 'highlight' }, 'ACC Type': { value: 'ACTIVATION', classNamew: 'highlight' }, 
    'Vendor/MVNO': { value: 'DEMO_TESTMVNO' }, 'MSISDN':{value: '803-397-1388', link: '/dashboard',},
    'SIM':{value:'8686280233121136867'}, 'IMEI':{value:'78685745787697'}, 'Zip':{value:'64643'},
    'Activation Date':{value:'05-09-2024 03:48:51'},'Account Status':{value:'REJECTED', tdClass:'table-rejected'}, },

    { 'Sr No': { value: '4', className: 'highlight' }, 'ACC Type': { value: 'PORTING', classNamew: 'highlight' }, 
    'Vendor/MVNO': { value: 'ATTLIVETEST' }, 'MSISDN':{value: '867-876-7864', link: '/dashboard',},
    'SIM':{value:'68678685689645474'}, 'IMEI':{value:'757585787785007'}, 'Zip':{value:'86843'},
    'Activation Date':{value:'14-03-2024 22:00:34'},'Account Status':{value:'REJECTED', tdClass:'table-rejected'}, },

    { 'Sr No': { value: '5', className: 'highlight' }, 'ACC Type': { value: 'PORTING', classNamew: 'highlight' }, 
    'Vendor/MVNO': { value: 'AttLiveTestAbhi' }, 'MSISDN':{value: '803-397-1388', link: '/dashboard',},
    'SIM':{value:'65456757586864567'}, 'IMEI':{value:'64654757658657'}, 'Zip':{value:'45006'},
    'Activation Date':{value:'30-11-2024 24:48:54'},'Account Status':{value:'ACTIVE', tdClass:'table-active'}, },

    { 'Sr No': { value: '6', className: 'highlight' }, 'ACC Type': { value: 'ACTIVATION', classNamew: 'highlight' }, 
    'Vendor/MVNO': { value: 'DEMO_TESTMVNO', }, 'MSISDN':{value: '867-876-7864', link: '/dashboard',},
    'SIM':{value:'86785858679797657'}, 'IMEI':{value:'756757586785007'}, 'Zip':{value:'45634'},
    'Activation Date':{value:'05-11-2024 15:00:33'},'Account Status':{value:'REJECTED', tdClass:'table-rejected'}, },
];

  const modalHeading="Activation Reprocess";
  const formButtonName="Submit"

    return (
        <div>
        <PageTitle PageHeading={PageHeading}></PageTitle>

            <div>
            <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-2'> <TextInput label="MSISDN" onChange={handleTextInputChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-2'> <SelectOption label="Vendor/MVNO" options={vendor} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-2'> <TextInput label="SIM" onChange={handleTextInputChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-2'> <SelectOption label="Account Status" options={status} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-2'> <SelectOption label="Account Type" options={account} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-2'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
                </div>
            </CardSection>
            </div>

            <div>
            <CardHeading CardHeadingText ="MSISDN Snapshot Report" cardHeadingText="Download" cardHeadingTextClass="archive_button" >
            <DataTable data={msisdnTable} />
            </CardHeading>

            <ModalComponent isOpen={modalContent}  modalClose={modalClose}  modalHeading={modalHeading} formButtonName={formButtonName} modalSize="modal-lg">
            <div>
                <ModalBodyContentComponent>
                <div className='row'>
                    <div className='col-md-6 mb-3'> <TextInput label="MSISDN" compulsory="*" onChange={handleTextInputChange} /> </div>
                    <div className='col-md-6 mb-3'> <TextInput label="SIM" compulsory="*" onChange={handleOptionChange} /> </div>
                    <div className='col-md-6 mb-3'> <TextInput label="IMEI" compulsory="*" onChange={handleTextInputChange} /> </div>
                    <div className='col-md-6 mb-3'> <SelectOption label="Select Vendor" compulsory="*" options={status} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-md-6 mb-3'> <SelectOption label="Plan Code" compulsory="*" options={account} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-md-6'> <TextInput label="Zip Code" compulsory="*" onChange={handleTextInputChange} /> </div>
                </div>
                </ModalBodyContentComponent>
              </div>  
            
            </ModalComponent> 

            </div>

            </div>

    );
};

export default MSISDNSnapshotReport