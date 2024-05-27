
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import DateRangeCalendar from '../components/DateRangeCalendar';
import DataTable from '../components/DataTable';
import ModalComponent from '../components/ModalComponent';
import ModalBodyContentComponent from '../components/ModalBodyContentComponent';
import { useState } from 'react';

const AddInventoryReportsMaster = () =>{
const [modalContent, AsmodalContent] = useState(false);    
const PageHeading ="Add Inventory Report";

 const InventoryReport = [
    {'#':{value:'1'}, 'Batch #':{action:{value:'170835798737'}},'Uploaded File Name':{value:'singlesaddinventory_1708357987.csv'},'Total Uploaded':{value:'1'},'Total Success':{value:'1'},
    'Total Failure':{value:'0'},'Uploaded By':{value:'supadmin'},'Uploaded Datetime':{value:'02-19-2024'}}
 ];
const modalHeading = "Add Inventory Report Details";
 const handleModalClick  = () =>{
    AsmodalContent(!modalContent);
 };
 const modalClose = () =>{
    AsmodalContent(!modalContent);
 };
const AddInventoryReportDetails = [
    {'#':{value:'1'}, 'SIM':{value:'89012802331277808570'}, 'IMSI':{value:'	310280127737841'}, 'PIN1':{value:'1111'}, 'PUK1':{value:'33805478'},'PIN2':{value:'2222'},'PUK2':{value:'01993520'}}
];
return(
    <div>
    <PageTitle PageHeading={PageHeading}></PageTitle>

        <div>
        <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
            <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'><DateRangeCalendar  label="Select Date" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'> <TextInput label="Batch" value="" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'> <Button className="btn btn-primary px-4 mt-29" value="Submit" /> </div>
            </div>
        </CardSection>
        <DataTable data={InventoryReport} handleModalClick={handleModalClick } />
        </div>
        <div>
        </div>
        <ModalComponent isOpen={modalContent}  modalClose={modalClose}  modalHeading={modalHeading}  modalSize="modal-lg">
            <div>
                <ModalBodyContentComponent>
                <DataTable data={AddInventoryReportDetails} />
                </ModalBodyContentComponent>
              </div>  
            
            </ModalComponent> 
        </div>

);

};

export default AddInventoryReportsMaster;