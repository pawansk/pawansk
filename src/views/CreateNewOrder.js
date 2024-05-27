
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import CardHeading from '../components/CardHeading';

const CreateNewOrder = () =>{
    const vendor = [
        {value:'Select', text:'Select'},
        {value:'All', text:'All'},
        {value:'admin', text:'admin'},
        {value:'AttLiveTest', text:'AttLiveTest'},
        {value:'AttLiveTestAbhi', text:'AttLiveTestAbhi'},
        {value:'DEMO_TESTMVNO', text:'DEMO_TESTMVNO'},
        {value:'TestTG5ATT', text:'TestTG5ATT'},
    ];

return(

    <div>
        <CardHeading CardHeadingText ="Create New Order" cardHeadingText="Download" cardHeadingTextClass="archive_button" > 
        <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 '> <SelectOption label="Vendor" options={vendor} compulsory="*" /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'><TextInput label="Zipcode" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'><TextInput label="MSISDN" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>
      
   

        </div>

);

};

export default CreateNewOrder;