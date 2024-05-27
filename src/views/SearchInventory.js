
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';

const SearchInventory = () =>{
    const PageHeading ="Search Inventory";
    const vendor = [
        {value:'Select', text:'Select'},
        {value:'All', text:'All'},
        {value:'admin', text:'admin'},
        {value:'AttLiveTest', text:'AttLiveTest'},
        {value:'AttLiveTestAbhi', text:'AttLiveTestAbhi'},
        {value:'DEMO_TESTMVNO', text:'DEMO_TESTMVNO'},
        {value:'TestTG5ATT', text:'TestTG5ATT'},
    ];
    const vendorAssigned = [
    {'Sr No':{value:'1'}, 'MSISDN':{value:'4708078656'},'SIM':{value:'89012802331277808570'},'Vendor':{value:'ATTLIVETEST'},'Activation Date':{value:'02-20-2024'}, 
    'Activation Status':{value:'Y'}, 'Assigned Status':{value:'Y'}},
    {'Sr No':{value:'2'}, 'MSISDN':{value:'4708078656'},'SIM':{value:'89012802331277808711'},'Vendor':{value:'ATTLIVETEST'},'Activation Date':{value:'02-20-2024'}, 
    'Activation Status':{value:'Y'}, 'Assigned Status':{value:'Y'}},
    {'Sr No':{value:'3'}, 'MSISDN':{value:'4708078656'},'SIM':{value:'89012802331277808562'},'Vendor':{value:'ATTLIVETEST'},'Activation Date':{value:'02-20-2024'}, 
    'Activation Status':{value:'Y'}, 'Assigned Status':{value:'Y'}},
    ];
return(

    <div>
    <PageTitle PageHeading={PageHeading}></PageTitle>

        <div>
        <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
            <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3'> <SelectOption label="Vendor" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3'> <SelectOption label="Upload Type" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3'><TextInput label="MSISDN" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3'><TextInput label="SIM" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'> <SelectOption label="Assigned/UnAssigned Status" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'> <SelectOption label="Status" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 pull-right mt-4'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardSection>

        <div>
        <CardHeading CardHeadingText ="Vendor Assigned SIM" cardHeadingText="Download" cardHeadingTextClass="archive_button" > 
        <DataTable data={vendorAssigned}  />
        </CardHeading>
      
        </div>
        </div>

        <div>



        </div>

        </div>

);

};

export default SearchInventory;