
import PageTitle from "../components/PageTitle";
import CustomerInformationTop from '../components/CustomerInformationTop';
import RightTabSection from '../components/RightTabSection';
import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';
import ModalComponent from '../components/ModalComponent';
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Order = () => {
    const [modalContent, setModalContent] = useState(false);
    const [modalOrder, setModalOrder] = useState(false);
    const [modalATT, setModalATT] = useState(false);
    const navigate = useNavigate();

    const loadCarrierClick = () => {
        navigate("/CustomerProfile");
    };

    const loadCustomerClick = () => {
        navigate("/CustomerProfile");
    };

    const handleTabClick = (tabNumber) => {
        navigate(`/CustomerProfile/${tabNumber}`);
    };

    const PageHeading = "";
    const rightHeading = "Active";
    const modalHeading = "CSR Screen For Order Details";
    const modalOrderHeading = "View Order Detail JSON";
    const modalATTHeading = "View Order Detail XML";

    const handleClick1 = () => {
     setModalContent(!modalContent);
    };
    const handleClick2 = () => {
        setModalOrder(!modalOrder);
    };
    const handleClick3 = () => {
        setModalATT(!modalATT);
    };
    const modalClose = () => {
      setModalContent(false);
      setModalOrder(false);
      setModalATT(false);;
    };

  
    
    const orderTable = [
        {'ID':{value:'19728', tdClass: 'tdClass', linkClass:'modal_text_link', onClick: handleClick1}, 'MSISDN':{value:'470-807-8656'},
        'Created':{value:'02-22-2024 08:27:16',},'Type':{value:'ChangeBillingCode'},'Status':{value:'SUCCESS',  tdClass:'table-active'},'Source':{value:'API'},
        'View Order Details':{value:'Details', tdClass: 'tdClass', linkClass:'modal_text_link', className:'className', onClick: handleClick2},
        '':{value:'ATT', tdClass: 'tdClass',  linkClass:'modal_text_link', className:'className', onClick: handleClick3},},

        {'ID':{value:'19707', tdClass: 'tdClass', linkClass:'modal_text_link', onClick: handleClick1}, 'MSISDN':{value:'470-807-8656'},
        'Created':{value:'02-20-2024 10:37:18',},'Type':{value:'ChangeBillingCode'},'Status':{value:'SUCCESS', tdClass:'table-active'},'Source':{value:'API'},
        'View Order Details':{value:'Details', tdClass: 'tdClass', linkClass:'modal_text_link', className:'className', onClick: handleClick2},
        '':{value:'ATT', tdClass: 'tdClass',  linkClass:'modal_text_link', className:'className', onClick: handleClick3},},

        {'ID':{value:'19682', tdClass: 'tdClass', linkClass:'modal_text_link', onClick: handleClick1}, 'MSISDN':{value:'470-807-8656'},
        'Created':{value:'02-20-2024 10:37:05',},'Type':{value:'ChangeAutoRenew'},'Status':{value:'SUCCESS', tdClass:'table-active'},'Source':{value:'API'},
        'View Order Details':{value:'Details', tdClass: 'tdClass', linkClass:'modal_text_link', className:'className', onClick: handleClick2},
        '':{value:'', tdClass: 'tdClass',  linkClass:'modal_text_link', className:'className', onClick: handleClick3},
        '':{value:'', tdClass: 'tdClass',  linkClass:'modal_text_link', className:'className', onClick: handleClick3},},
    ];

    return (
        <div>
            <PageTitle PageHeading={PageHeading} rightHeading={rightHeading} />
            <CustomerInformationTop loadCarrierClick={loadCarrierClick} loadCustomerClick={loadCustomerClick} hideClass />

            <div className="row">

            <div className="col-md-10 col-xl-10">

            <CardHeading CardHeadingText ="Order">
            <DataTable data={orderTable} handleClick1={handleClick1} handleClick2={handleClick2} handleClick3={handleClick3} theadClass="theadClass" rowClass="rowClass"  />

            <ModalComponent isOpen={modalContent}  modalClose={modalClose}  modalHeading={modalHeading}  modalSize="modal-md">
                <table class="table2">
                        <tbody>
                        <tr>
                            <th>MSISDN</th>
                            <td>8033190413</td>
                        </tr>
                        <tr>
                            <th>SIM</th>
                            <td>89012802331277808554</td>
                        </tr>
                        <tr>
                            <th>Created</th>
                            <td>2024-02-22 07:08:01</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>ActivatePlan</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>SUCCESS</td>
                        </tr>
                        </tbody>
                </table>
            </ModalComponent>

            <ModalComponent isOpen={modalOrder}  modalClose={modalClose}  modalHeading={modalOrderHeading}  modalSize="modal-xl">
            <div className='row mb-3'>
                <b>REQUEST JSON :</b>
                    <pre>
                    {JSON.stringify({
                        "wholeSaleOrderResponse": {"statusCode": "00", "description": "SUCCESS", "partnerTransactionId": "ACTIVATE_SUBSCRIBER_2024020910565951005028", "responseDetails": {"equipmentType": "C", "technologyType": "LTE", "subscriberNumber": "2062145605", "IMEI": "354911080000006", "SIM": "89014103277204961002", "response": {"code": "0", "description": "SUCCESS"}}}
                    }, null, 2)}
                    </pre>
                </div>
                <div className='row'>
                <b>RESPONSE JSON :</b>
                    <pre>
                    {JSON.stringify({
                        "wholeSaleOrderResponse": {"statusCode": "00", "description": "SUCCESS", "partnerTransactionId": "ACTIVATE_SUBSCRIBER_2024020910565951005028", "responseDetails": {"equipmentType": "C", "technologyType": "LTE", "subscriberNumber": "2062145605", "IMEI": "354911080000006", "SIM": "89014103277204961002", "response": {"code": "0", "description": "SUCCESS"}}}
                    }, null, 2)}
                    </pre>
                </div>
            </ModalComponent>

            <ModalComponent isOpen={modalATT}  modalClose={modalClose}  modalHeading={modalATTHeading}  modalSize="modal-xl">
            <div className='row'>
                <p className="mb-3">Deprecated: json_decode(): Passing null to parameter #1 ($json) of type string is deprecated in /home/att/httpdocs/telgoo5/csr/attDetails_xml.php on line 43</p>
                <b>REQUEST JSON :</b>
                    <pre>
                    {JSON.stringify({
                        "wholeSaleOrderResponse": {"statusCode": "00", "description": "SUCCESS", "partnerTransactionId": "ACTIVATE_SUBSCRIBER_2024020910565951005028", "responseDetails": {"equipmentType": "C", "technologyType": "LTE", "subscriberNumber": "2062145605", "IMEI": "354911080000006", "SIM": "89014103277204961002", "response": {"code": "0", "description": "SUCCESS"}}}
                    }, null, 2)}
                    </pre>
                </div>
            </ModalComponent>

            </CardHeading>
            </div>


            <div className="col-md-2 col-xl-2">
                <RightTabSection handleTabClick={handleTabClick}  />
            </div>
            </div>

        </div>
    );
};

export default Order;