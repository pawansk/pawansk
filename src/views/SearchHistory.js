import DataTable from '../components/DataTable';
import CustomerInformationTop from '../components/CustomerInformationTop';
import RightTabSection from '../components/RightTabSection';
import { useNavigate } from "react-router-dom";
import CardHeading from '../components/CardHeading';
import TextInput from '../components/TextInput';
import DateInput from '../components/DateInput';
import SelectOption from '../components/SelectOption';
import Button from '../components/Button';

const SearchHistory = ({  }) => {

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


    const status = [
        { value: 'A/C Status History', text: 'A/C Status History' },
        { value: 'SIM History', text: 'SIM History' },
        { value: 'MSISDN History', text: 'MSISDN History' },
        { value: 'Plan History', text: 'Plan History' },
        { value: 'Suspended', text: 'Suspended' },
        { value: 'CSR Search History', text: 'CSR Search History' }
      ];
      const acHistory = [
        { '#': { value: '' }, 'Message': { value: ''}, 'Posted By': { value: '' }, 'DateTime':{value: ''} },
    ];
    const simHistory = [
        { '#': { value: '' }, 'Customer ID': { value: ''}, 'Notes': { value: '' }, 'Created By':{value: ''}, 'Date':{value:''} },
    ];
    const MSISDNHistory = [
        { '#': { value: '' }, 'Customer ID': { value: ''}, 'Notes': { value: '' }, 'Created By':{value: ''}, 'Date':{value:''} },
    ];
    const planHistory = [
        { '#': { value: '1' }, 'Customer ID': { value: '10826'}, 'Updated By': { value: 'API' }, 'Message':{value: 'Plan changed to TVTP002'}, 'Updated Date Time':{value:'02-13-2024 08:34:21'} },
    ];
    const csrHistory = [
        { '#': { value: '1' }, 'Customer ID': { value: '10826'}, 'Searched By': { value: 'DEMO_TESTMVNO' }, 'Search Datetime':{value:'02-13-2024 08:34:21'} },
    ];



    return (
        <div>
            <CustomerInformationTop loadCarrierClick={loadCarrierClick} loadCustomerClick={loadCustomerClick} hideClass />

            <div className="row">

        <div className="col-md-10 col-xl-10">
            <CardHeading CardHeadingText ="Search History" >
                <div className='row mb-4'>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'><DateInput  label="Date From" /> </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <DateInput  label="Date To" /></div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <SelectOption label="Select Report" options={status} /> </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
                </div>

            <CardHeading CardHeadingText ="A/C Status History" smallHeading="smallHeading" >
            <DataTable data={acHistory} />
            </CardHeading>

            <CardHeading CardHeadingText ="SIM History" smallHeading="smallHeading" >
            <DataTable data={simHistory} />
            </CardHeading>

            <CardHeading CardHeadingText ="MSISDN History" smallHeading="smallHeading" >
            <DataTable data={MSISDNHistory} />
            </CardHeading>

            <CardHeading CardHeadingText ="Plan History" smallHeading="smallHeading" >
            <DataTable data={planHistory} />
            </CardHeading>

            <CardHeading CardHeadingText ="CSR Search History" smallHeading="smallHeading" >
            <DataTable data={csrHistory} />
            </CardHeading>

            </CardHeading>

          
            </div> 


            <div className="col-md-2 col-xl-2">
                <RightTabSection handleTabClick={handleTabClick}  />
            </div>
             </div>

            </div>

    );
};

export default SearchHistory;
