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


    const usageType = [
        { value: 'ALL', text: 'ALL' },
        { value: 'Incoming Call', text: 'Incoming Call' },
        { value: 'Outgoing Call', text: 'Outgoing Call' },
        { value: 'Incoming SMS', text: 'Incoming SMS' },
        { value: 'Outgoing SMS', text: 'Outgoing SMS' },
        { value: 'DATA', text: 'DATA' },
        { value: 'Incoming MMS', text: 'Incoming MMS' },
        { value: 'Outgoing MMS', text: 'Outgoing MMS' },

      ];



    return (
        <div>
            <CustomerInformationTop loadCarrierClick={loadCarrierClick} loadCustomerClick={loadCustomerClick} hideClass />

            <div className="row">

        <div className="col-md-10 col-xl-10">
            <CardHeading CardHeadingText ="Search History" >
                <div className='row mb-4'>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'><DateInput  label="Start Date" /> </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <DateInput  label="End Date" /></div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <SelectOption label="Usage Type" options={usageType} /> </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
                </div>

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
