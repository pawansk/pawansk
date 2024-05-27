import DataTable from '../components/DataTable';
import CustomerInformationTop from '../components/CustomerInformationTop';
import RightTabSection from '../components/RightTabSection';
import { useNavigate } from "react-router-dom";
import CardHeading from '../components/CardHeading';
import { useState } from 'react';


const PurchaseHistory = ({  }) => {
const [isArchiveTable, setIsArchiveTable] = useState (false);

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


const purchageHistoryTable = [

    { 'Sr No': { value: '1' }, 'TARIFF/PLAN': { value: 'TV01'}, 'MASTER/TOPUP': { value: 'MASTER' }, 'STATUS':{value: 'ACTIVE'},'PURCHASE DATE':{value:'01-23-2024 14:52:01'}, 
    'VALID FROM':{value:'01-23-2024 14:52:01'}, 'VALID TO':{value:'02-23-2024 00:00:00'}, 'NEXT RENEWAL':{value:'	02-23-2024 00:00:00'}
    },
    { 'Sr No': { value: '2' }, 'TARIFF/PLAN': { value: 'TVP001'}, 'MASTER/TOPUP': { value: 'TOPUP' }, 'STATUS':{value: 'ACTIVE'},'PURCHASE DATE':{value:'01-25-2024 12:22:42'}, 
    'VALID FROM':{value:'01-25-2024 14:40:59'}, 'VALID TO':{value:'	02-14-2024 23:59:59'}, 'NEXT RENEWAL':{value:''}
    },
    { 'Sr No': { value: '3' }, 'TARIFF/PLAN': { value: 'TVP001'}, 'MASTER/TOPUP': { value: 'TOPUP' }, 'STATUS':{value: 'ACTIVE'},'PURCHASE DATE':{value:'01-25-2024 14:37:19'}, 
    'VALID FROM':{value:'01-25-2024 14:37:19'}, 'VALID TO':{value:'02-14-2024 23:59:59'}, 'NEXT RENEWAL':{value:''}
    },

];

const handlecardHeadingText = () =>{
    setIsArchiveTable(!isArchiveTable)
};

    return (
        <div>
            <CustomerInformationTop loadCarrierClick={loadCarrierClick} loadCustomerClick={loadCustomerClick} hideClass />

            <div className="row">

        <div className="col-md-10 col-xl-10">
            <CardHeading CardHeadingText ="Purchase History" cardHeadingText="Archive List" cardHeadingTextClass="archive_button" handlecardHeadingText={handlecardHeadingText} >
                 <DataTable data={purchageHistoryTable} />
            </CardHeading>

           {
           isArchiveTable && 
           <DataTable data={purchageHistoryTable} />
           }
            </div> 


            <div className="col-md-2 col-xl-2">
                <RightTabSection handleTabClick={handleTabClick}  />
            </div>
             </div>

            </div>

    );
};

export default PurchaseHistory;
