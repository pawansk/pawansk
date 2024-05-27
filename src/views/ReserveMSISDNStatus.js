import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import TextInput from '../components/TextInput';
import SelectOption from '../components/SelectOption';
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import ModalComponent from '../components/ModalComponent';
import ModalBodyContentComponent from '../components/ModalBodyContentComponent';


const ReserveMSISDNStatus = ({  }) => {
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

      const MSISDNStatus = [
        { value: 'Please choose status', text: 'Please choose status' },
        { value: 'New', text: 'New' },
        { value: 'Active', text: 'Active' },
        { value: 'Reserve', text: 'Reserve' },
        { value: 'Rejected', text: 'Rejected' },
        { value: 'TPSP Pending', text: 'TPSP Pending' },
        { value: 'TPSP Completed', text: 'TPSP Completed' }
      ];

   
    const handleTextInputChange = (e) => {
        setTextInputValue(e.target.value);
      };


const msisdnTable = [

    { 'Sr No': { value: '1' }, 'Vendor ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'Zip Code':{value: '36738'}, 'SIM':{value: '89014103277204961002'},
    'IMEI':{value:'87328732873278'}, 'Plan Code':{value:'ACTIVATE_SUBSCRIBER_2024020910565951005028'}, 'MSISDN Status':{value:'FAIL'},
    'TPSP STATUS':{value:'COMPLETE'}, 'XML Request & Response':{action :{value:'View Request & Response', tdClass:'link-child'}, tdClass:'link-child'}, 'DateTime':{value:'2024-01-30 13:26:14'}
    },
    { 'Sr No': { value: '2' }, 'Vendor ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '6463145463' }, 'Zip Code':{value: '57654'}, 'SIM':{value: '75756753277290o916575'},
    'IMEI':{value:'768688732873278'}, 'Plan Code':{value:'ACTIVATE_SUBSCRIBER_202402091056595176855'}, 'MSISDN Status':{value:'FAIL'},
    'TPSP STATUS':{value:'COMPLETE'}, 'XML Request & Response':{action :{value:'View Request & Response', tdClass:'link-child'}, tdClass:'link-child'}, 'DateTime':{value:'2024-01-30 13:26:14'}
    },
    { 'Sr No': { value: '3' }, 'Vendor ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '65062145605' }, 'Zip Code':{value: '36738'}, 'SIM':{value: '89014103277204961002'},
    'IMEI':{value:'87328732873278'}, 'Plan Code':{value:'ACTIVATE_SUBSCRIBER_2024020910565951005028'}, 'MSISDN Status':{value:'FAIL'},
    'TPSP STATUS':{value:'COMPLETE'}, 'XML Request & Response':{action :{value:'View Request & Response', tdClass:'link-child'}, tdClass:'link-child'}, 'DateTime':{value:'2024-01-30 13:26:14'}
    },
    { 'Sr No': { value: '4' }, 'Vendor ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'Zip Code':{value: '36738'}, 'SIM':{value: '89014103277204961002'},
    'IMEI':{value:'87328732873278'}, 'Plan Code':{value:'ACTIVATE_SUBSCRIBER_2024020910565951005028'}, 'MSISDN Status':{value:'FAIL'},
    'TPSP STATUS':{value:'COMPLETE'}, 'XML Request & Response':{action :{value:'View Request & Response', tdClass:'link-child'}, tdClass:'link-child'}, 'DateTime':{value:'2024-01-30 13:26:14'}
    },
    { 'Sr No': { value: '5' }, 'Vendor ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'Zip Code':{value: '36738'}, 'SIM':{value: '89014103277204961002'},
    'IMEI':{value:'87328732873278'}, 'Plan Code':{value:'ACTIVATE_SUBSCRIBER_2024020910565951005028'}, 'MSISDN Status':{value:'FAIL'},
    'TPSP STATUS':{value:'COMPLETE'}, 'XML Request & Response':{action :{value:'View Request & Response', tdClass:'link-child'}, tdClass:'link-child'}, 'DateTime':{value:'2024-01-30 13:26:14'}
    },


    
];

  const [modalContent, setModalContent] = useState(false);

  const handleCellClick = () => {
   setModalContent(!modalContent)
  };

  const modalClose = () => {
    setModalContent(!modalContent)
  };

  const PageHeading ="Reserve MSISDN Status";
  const modalHeading="XML Request & Response";



    return (
        <div>
        <PageTitle PageHeading={PageHeading}></PageTitle>



        <div className="row">

<div className="col-md-8 col-xl-8">
        <CardSection  style={{ backgroundColor: '', }} className="myClass align-items-center p-3">
            <div className="card-title-desc child-heading mb-3">CSI STATUS</div>
            <div className='status-box'>
                <div className='status-box-child status-new'>
                    <p>16</p> <span>New</span>
                </div>
                <div className='status-box-child status-active'>
                    <p>20</p> <span>Active</span>
                </div>
                <div className='status-box-child status-reserve'>
                    <p>0</p> <span>Reserve</span>
                </div>
                <div className='status-box-child status-rejected'>
                    <p>4</p> <span>Rejected</span>
                </div>
                <div className='status-box-child status-fail'>
                    <p>19</p> <span>Fail</span>
                </div>
            </div>
       
       </CardSection>
</div>

<div className="col-md-4 col-xl-4">
        <CardSection  style={{ backgroundColor: '', }} className="myClass align-items-center p-3">
            <div className="card-title-desc child-heading mb-3">TPSP STATUS</div>
            <div className='status-box'>
                <div className='status-box-child status-pending'>
                    <p>2</p> <span>Pending</span>
                </div>
                <div className='status-box-child status-complete'>
                    <p>18</p> <span>Complete</span>
                </div>
            </div>
       
       </CardSection>
</div>

</div>


            <div>
            <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
                <div className='row'>
                    
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <SelectOption label="Vendor/MVNO" options={vendor} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <TextInput label="MSISDN" onChange={handleTextInputChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <TextInput label="SIM" onChange={handleTextInputChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <SelectOption label="MSISDN Status" options={MSISDNStatus} value={selectedOption} onChange={handleOptionChange} /> </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-2'> <Button className="btn btn-primary mt-29" value="Search" /> </div>
                </div>
            </CardSection>
            </div>

            <div>

            <DataTable data={msisdnTable} handleModalClick={handleCellClick} />

            <ModalComponent isOpen={modalContent}  modalClose={modalClose}  modalHeading={modalHeading} modalSize="modal-xl modal-dialog-scrollable" >
            <div>
                <ModalBodyContentComponent>
                <div className='overflow-auto'>
                   <table className='custom-table'>
                    <tr>
                        <th>SIM</th>
                        <th>IMEI</th>
                    </tr>
                    <tr>
                        <td>
                        <pre>
                        {`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:mes="http://csi.cingular.com/CSI/Namespaces/NMPhysical/InfrastructureCommon/Types/Public/MessageHeader.xsd" xmlns:res="http://csi.cingular.com/CSI/Namespaces/Container/Public/ReserveSubscriberNumberRequest.xsd" xmlns:com="http://csi.att.com/CSI/Namespaces/NMPhysical/Types/Public/CommonDataModel.xsd"> <soapenv:Header> <mes:MessageHeader> <mes:TrackingMessageHeader> <mes:originalInfrastructureVersion>86</mes:originalInfrastructureVersion> <mes:applicationName>NMPhysical</mes:applicationName> <mes:version>221</mes:version> <mes:messageId>RSN-204-2024-02-13 05:34:19</mes:messageId> <mes:timeToLive>60000</mes:timeToLive> <mes:dateTimeStamp>2024-02-13T05:34:19Z</mes:dateTimeStamp> </mes:TrackingMessageHeader> <mes:SecurityMessageHeader> <mes:userName>telgoo5</mes:userName> <mes:userPassword>GL884csQt8vZ</mes:userPassword> </mes:SecurityMessageHeader> <mes:SequenceMessageHeader> <mes:sequenceNumber>1</mes:sequenceNumber> <mes:totalInSequence>1</mes:totalInSequence> </mes:SequenceMessageHeader> </mes:MessageHeader> </soapenv:Header> <soapenv:Body> <res:ReserveSubscriberNumberRequest> <res:marketServiceDetails> <com:serviceZipCode>29201</com:serviceZipCode> </res:marketServiceDetails> <res:Subscriber> <res:serviceArea>006901001589</res:serviceArea> <res:Commission> <com:dealer> <com:code>G3IUV</com:code> </com:dealer> </res:Commission> <res:ContactInformation> <res:NameOrBusinessNameSelector> <res:Name> <com:firstName>telgo5</com:firstName> <com:lastName>telgo5</com:lastName> </res:Name> </res:NameOrBusinessNameSelector> <res:Address> </res:Address> </res:ContactInformation> <res:SubscriberNumberOrRandomSelector> <res:Random> <res:quantityOfRandomSubscriberNumbers>1</res:quantityOfRandomSubscriberNumbers> </res:Random> </res:SubscriberNumberOrRandomSelector> </res:Subscriber> </res:ReserveSubscriberNumberRequest> </soapenv:Body> </soapenv:Envelope>`}
                        </pre>
                        </td>
                        <td>
                        <pre>
                        {`<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Header> <MessageHeader xmlns="http://csi.cingular.com/CSI/Namespaces/NMPhysical/InfrastructureCommon/Types/Public/MessageHeader.xsd"> <TrackingMessageHeader> <infrastructureVersion/> <originalInfrastructureVersion>86</originalInfrastructureVersion> <applicationName>NMPhysical</applicationName> <version>221</version> <messageId>RSN-204-2024-02-13 05:34:19</messageId> <timeToLive>60000</timeToLive> <conversationId>telgoo5~CNG-CSI~71fde49d-f2af-4f71-b00a-555f9690a3f3</conversationId> <dateTimeStamp>2024-02-13T05:34:19Z</dateTimeStamp> <uniqueTransactionId>ServiceGateway526565@p103csg2c7_6d76b553-d12c-4dcb-80e4-90c88d24dbe0</uniqueTransactionId> </TrackingMessageHeader> <SecurityMessageHeader> <userName>telgoo5</userName> <userPassword>GL884csQt8vZ</userPassword> </SecurityMessageHeader> <SequenceMessageHeader> <sequenceNumber>1</sequenceNumber> <totalInSequence>1</totalInSequence> </SequenceMessageHeader> </MessageHeader> </SOAP-ENV:Header> <SOAP-ENV:Body> <ns2:ReserveSubscriberNumberResponse xmlns:ns2="http://csi.cingular.com/CSI/Namespaces/Container/Public/ReserveSubscriberNumberResponse.xsd" xmlns="http://csi.att.com/CSI/Namespaces/NMPhysical/Types/Public/CommonDataModel.xsd" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><ns2:Subscriber><subscriberNumber>8032105545</subscriberNumber><equipmentType>G</equipmentType><serviceArea>006901001589</serviceArea><depositAmount>0</depositAmount><reserved>true</reserved></ns2:Subscriber><ns2:Response><code>0</code><description>Success</description></ns2:Response></ns2:ReserveSubscriberNumberResponse></SOAP-ENV:Body> </SOAP-ENV:Envelope>`}
                        </pre>
                        </td>



                    </tr>
                   </table>
                </div>
                </ModalBodyContentComponent>
              </div>  
            
            </ModalComponent> 

            </div>

            </div>

    );
};

export default ReserveMSISDNStatus;
