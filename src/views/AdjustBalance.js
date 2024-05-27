import DataTable from '../components/DataTable';
import CustomerInformationTop from '../components/CustomerInformationTop';
import RightTabSection from '../components/RightTabSection';
import { useNavigate } from "react-router-dom";
import CardHeading from '../components/CardHeading';

const AdjustBalance = ({  }) => {

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

            <CardHeading CardHeadingText ="Adjust Balance" >
            <table class="table2">
                        <tbody>
                        <tr>
                            <th><input type='checkbox' className='tableCheckbox' /> Check All</th>
                            <th>Service Type</th>
                            <th>Units Description</th>
                            <th>Quantity</th>
                         
                        </tr>

                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        </tbody>
                </table>
            </CardHeading>

            </div> 


            <div className="col-md-2 col-xl-2">
                <RightTabSection handleTabClick={handleTabClick}  />
            </div>
             </div>

            </div>

    );
};

export default AdjustBalance;
