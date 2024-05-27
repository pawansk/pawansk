
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import DateRangeCalendar from '../components/DateRangeCalendar';

const BulkViewReport = () =>{
const PageHeading ="SIM Activation Report"
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
        <table className='custom-table2'>
            <tr>
                <th>Sr No</th>
                <th>Batch Number</th>
                <th>Uploaded File Name</th>
                <th>Total Uploaded</th>
                <th>Total Success</th>
                <th>Total Failure</th>
                <th>Uploaded By</th>
                <th>Uploaded Datetime</th>
                <th>Status</th>
            </tr>
        <tbody>
            <tr>
                <td>1</td>
                <td>170611185229</td>
                <td>esnActivate.csv</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>Telgoo5 (SupAdmin)</td>
                <td>01-24-2024 15:57:32</td>
                <td>
                    <div className='text-info'>Total New SIM: 0</div>
                    <div className='text-success'>Total Completed SIM: 0</div>
                    <div className='text-warning'>Total Processing SIM: 0</div>
                    <div className='text-danger'>Total Failed SIM: 0</div>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>170611087028</td>
                <td>esnActivate.csv</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>Telgoo5 (SupAdmin)</td>
                <td>01-24-2024 15:41:10</td>
                <td>
                    <div className='text-info'>Total New SIM: 0</div>
                    <div className='text-success'>Total Completed SIM: 0</div>
                    <div className='text-warning'>Total Processing SIM: 0</div>
                    <div className='text-danger'>Total Failed SIM: 0</div>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>170611073927</td>
                <td>esnActivate.csv</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>Telgoo5 (SupAdmin)</td>
                <td>01-24-2024 15:38:59</td>
                <td>
                    <div className='text-info'>Total New SIM: 0</div>
                    <div className='text-success'>Total Completed SIM: 0</div>
                    <div className='text-warning'>Total Processing SIM: 0</div>
                    <div className='text-danger'>Total Failed SIM: 0</div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>

        <div>


      
      

       

        </div>

        </div>

);

};

export default BulkViewReport;