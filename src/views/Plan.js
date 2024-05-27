import CardHeading from '../components/CardHeading';
import SelectOption from '../components/SelectOption';
import PageTitle from '../components/PageTitle';

const Plan = ({  }) => {

    const MVNO = [
        { value: 'Select', text: 'Select' },
        { value: 'admin', text: 'Incoming Call' },
        { value: 'AttLiveTest', text: 'AttLiveTest' },
        { value: 'AttLiveTestAbhi', text: 'AttLiveTestAbhi' },
        { value: 'DEMO_TESTMVNO', text: 'DEMO_TESTMVNO' },
        { value: 'TestTG5ATT', text: 'TestTG5ATT' },
      ];

const PageHeading = "Plan";

    return (
        <div>
             <PageTitle PageHeading={PageHeading}  />
                 <CardHeading  >
                <div className='row mb-4'>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <SelectOption label="Select Vendor/MVNO" options={MVNO} /> </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3'> <SelectOption label="Please Choose the Option" options={MVNO} /> </div>
                </div>

                <div className='row mb-4'>
                <div className="small-heading">AttData1GB (AttData1GB)</div>
                <div className='col-md-offset-3 col-md-6'>
                <table class="table2">
                <tbody>
                    <tr>
                    <th>Tariff Name</th>
                    <td>AttData1GB </td>
                    </tr>
                    <tr>
                    <th>Tariff Code</th>
                    <td>AttData1GB </td>
                    </tr>
                    <tr>
                    <th>Description</th>
                    <td>Data 1GB </td>
                    </tr>
                    <tr>
                    <th>Rate Plan</th>
                    <td>TGO2 </td>
                    </tr>
                    <tr>
                    <th>Rate Sub Plan</th>
                    <td>TG002</td>
                    </tr>
                    <tr>
                    <th>Activation Rule</th>
                    <td>Active </td>
                    </tr>
                    <tr>
                    <th>Automatically Repurchase</th>
                    <td>Yes</td>
                    </tr>
                    <tr>
                    <th>Card Group</th>
                    <td>Dynamic Tier </td>
                    </tr>
                    <tr>
                    <th>Expiration Days</th>
                    <td>30 </td>
                    </tr>
                    <tr>
                    <th>Valid From</th>
                    <td>2024/01/22 08:00:00 </td>
                    </tr>
                    <tr>
                    <th>Valid To</th>
                    <td>2031/01/22 08:14:00 </td>
                    </tr>
                    <tr>
                    <th>Monetary Balance ($)</th>
                    <td></td>
                    </tr>
                    <tr>
                    <th>ATT Plan Price ($)</th>
                    <td>0.00 </td>
                    </tr>
                    <tr>
                    <th>Buckects</th>
                    <td></td>
                    </tr>
                    <tr>
                    <th>Name</th>
                    <td>Unit</td>
                    </tr>
                    <tr>
                    <th>Dynamic Domestic High Speed Data</th>
                    <td>1024</td>
                    </tr>

                </tbody>
                </table>
                </div>
                </div>

            </CardHeading>

          



            </div>

    );
};

export default Plan;
