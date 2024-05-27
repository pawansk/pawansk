
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import ModalComponent from '../components/ModalComponent';
import ModalBodyContentComponent from '../components/ModalBodyContentComponent';
import CardHeading from '../components/CardHeading';
import { useState } from 'react';

const ManageZipCode = () =>{
    const [isZipModal, AsIsZipModal] = useState(false);
  
   const zipCodeModalClick = () => {
        AsIsZipModal(!isZipModal)
   };   

    const PageHeading ="Manage Zip Code"
    const msisdnTable = [
        { 'Sr No': { value: '1' }, 'Zip Code':{value: '00000'}, 'City':{value:'CHICAGO T'}, 'State':{value:'AA'}},
        { 'Sr No': { value: '2' }, 'Zip Code':{value: '00001'}, 'City':{value:'CHICAGO TEST'}, 'State':{value:'AA'}},
        { 'Sr No': { value: '3' }, 'Zip Code':{value: '66666'}, 'City':{value:'CHICAGO'}, 'State':{value:'AA'}},
        { 'Sr No': { value: '4' }, 'Zip Code':{value: '77777'}, 'City':{value:'CHICAGO'}, 'State':{value:'AA'}},
    ];
  const [modalContent, setModalContent] = useState(false);
  const handleCellClick = () => {
   setModalContent(!modalContent)
  };
  const modalClose = () => {
    AsIsZipModal(!isZipModal)
  };

const modalHeading="Add Zip Code";

return(
    <div>
    <PageTitle PageHeading={PageHeading}></PageTitle>

        <div>
        <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
            <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'> <TextInput label="Search By Zip Code, City, State" /> </div>
                <div className='col-6 col-sm-2 col-md-2 col-lg-1 col-xl-1'> <Button className="btn btn-primary mt-29" value="Search" /> </div>
                <div className='col-6 col-sm-2 col-md-2 col-lg-1 col-xl-1'> <Button className="btn btn-info px-4 mt-29" value="Add" onClick={zipCodeModalClick} /> </div>
            </div>
        </CardSection>
        </div>

        <div>
        <CardHeading CardHeadingText ="Purchase History" cardHeadingText="Download" cardHeadingTextClass="archive_button" > 
        <DataTable data={msisdnTable} handleModalClick={handleCellClick} />
        </CardHeading>
      

        <ModalComponent isOpen={isZipModal}  modalClose={modalClose}  modalHeading={modalHeading}  modalSize="modal-lg">
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

export default ManageZipCode;