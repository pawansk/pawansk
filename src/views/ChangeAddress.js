
import CustomerInformationTop from '../components/CustomerInformationTop';
import RightTabSection from '../components/RightTabSection';
import { useNavigate } from "react-router-dom";
import CardHeading from '../components/CardHeading';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const ChangeAddress = ({  }) => {

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



    return (
        <div>
            <CustomerInformationTop loadCarrierClick={loadCarrierClick} loadCustomerClick={loadCustomerClick} hideClass />

            <div className="row">

        <div className="col-md-10 col-xl-10">
            <CardHeading CardHeadingText ="Search History" >
                <div className='row mb-3'><div className='col-md-12'> <span className="text-danger">*</span> This address change will be only for TG5 System non electronically.</div></div>
                <div className='row mb-4'>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'><TextInput  label="Street Number" compulsory="*" /> </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'><TextInput  label="Street Direction"/> </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'><TextInput  label="Street Name" /> </div>
                    <div className='col-12 col-sm-6 col-md-2 col-lg-2'><TextInput  label="Zip" /> </div>
                    <div className='col-12 col-sm-6 col-md-1 col-lg-1'> <Button className="btn btn-primary mt-29" value="Submit" /> </div>
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

export default ChangeAddress;
