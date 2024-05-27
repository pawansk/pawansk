

import CardHeading from '../components/CardHeading';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
const SearchPort = ()=>{

    const vendor = [
        {value:'Please choose the vendor', text:'Please choose the vendor'},
        {value:'admin', text:'admin'},
        {value:'DEMO_TESTMVNO', text:'DEMO_TESTMVNO'},
        {value:'AttLiveTest', text:'AttLiveTest'},
        {value:'AttLiveTestAbhi', text:'AttLiveTestAbhi'},
        {value:'TestTG5ATT', text:'TestTG5ATT'},
    ];

    return(
        <div>
            <div>
            <CardHeading CardHeadingText ="SearchPort"> 
        <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 '> <SelectOption label="Select Vendor" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 '> <SelectOption label="Type" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'><TextInput label="MSISDN" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="ESN/SIM" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>

        </div>
        </div>

    );
};

export default SearchPort;