import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import TextInput from '../components/TextInput';
import SelectOption from '../components/SelectOption';
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import ModalComponent from '../components/ModalComponent';
import ModalBodyContentComponent from '../components/ModalBodyContentComponent';


const ResponseAsync = ({  }) => {
    const [textInputValue, setTextInputValue] = useState('');

    const [selectedOption, setSelectedOption] = useState('Select');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };
    
      const vendor = [
        { value: 'Please choose the vendor', text: 'Please choose the vendor' },
        { value: 'Admin', text: 'Admin' },
        { value: 'AttLiveTest', text: 'AttLiveTest' },
        { value: 'AttLiveTestAbhi', text: 'AttLiveTestAbhi' },
        { value: 'DEMO_TESTMVNO', text: 'DEMO_TESTMVNO' }
      ];

    const PageHeading ="Async Response List"
    const handleTextInputChange = (e) => {
        setTextInputValue(e.target.value);
      };


const msisdnTable = [

    { 'Sr No': { value: '1' }, 'VENDORID': { value: 'ATTLIVETEST', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89014103277204961002'},
    'STATUS':{value:'COMPLETE'}, 'PARTNER TRANSACTION ID':{value:'ACTIVATE_SUBSCRIBER_2024020910565951005028'}, 'REQUEST DATETIME':{value:'2024-02-09 05:57:15'},
    'TPSP STATUS':{value:'00'},  'JSON RESPONSE':{ tdClass:'link-child',
    actions: [
      { label: 'VIEW RESPONSE', onClick: () => handleCellClick() }, 
    ]
  }, 'Action':{}
    },
    { 'Sr No': { value: '2' }, 'VENDORID': { value: 'ATTLIVETEST', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89014103277204961002'},
    'STATUS':{value:'COMPLETE'}, 'PARTNER TRANSACTION ID':{value:'ACTIVATE_SUBSCRIBER_2024020910565951074478'}, 'REQUEST DATETIME':{value:'2024-02-14 02:08:12'},
    'TPSP STATUS':{value:'00'},  'JSON RESPONSE':{tdClass:'link-child',
    actions: [
      { label: 'VIEW RESPONSE', onClick: () => handleCellClick() }, 
    ]}, 'Action':{}
    },



    
];

  const [modalContent, setModalContent] = useState(false);

  const handleCellClick = () => {
   setModalContent(!modalContent)
  };

  const modalClose = () => {
    setModalContent(!modalContent)
  };

  const modalHeading="View Response";


    return (
        <div>
        <PageTitle PageHeading={PageHeading}></PageTitle>

            <div>
            <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
                <div className='row'>
                    
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <SelectOption label="Vendor/MVNO" options={vendor} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <TextInput label="MSISDN" onChange={handleTextInputChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <TextInput label="SIM" onChange={handleTextInputChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <Button className="btn btn-primary mt-29" value="Search" /> </div>
                </div>
            </CardSection>
            </div>

            <div>

            <DataTable data={msisdnTable} handleClick2={handleCellClick} />

            <ModalComponent isOpen={modalContent}  modalClose={modalClose}  modalHeading={modalHeading}  modalSize="modal-lg">
            <div>
                <ModalBodyContentComponent>
                <div className='row'>
                    <pre>
                    {JSON.stringify({
                        "wholeSaleOrderResponse": {"statusCode": "00", "description": "SUCCESS", "partnerTransactionId": "ACTIVATE_SUBSCRIBER_2024020910565951005028", "responseDetails": {"equipmentType": "C", "technologyType": "LTE", "subscriberNumber": "2062145605", "IMEI": "354911080000006", "SIM": "89014103277204961002", "response": {"code": "0", "description": "SUCCESS"}}}
                    }, null, 2)}
                    </pre>
                </div>
                </ModalBodyContentComponent>
              </div>  
            
            </ModalComponent> 

            </div>

            </div>

    );
};

export default ResponseAsync;
