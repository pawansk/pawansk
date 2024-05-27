import CardHeading from "../components/CardHeading";
import SelectOption from "../components/SelectOption";
import TextInput from "../components/TextInput";
import Button from "../components/Button";


const Coverage = ()=>{
 
    const vendor = [
        {value:'Select', text:'Select'},
        {value:'Admin', text:'Admin'},
        {value:'AttLiveTest', text:'AttLiveTest'},
        {value:'DEMO_TESTMVNO', text:'DEMO_TESTMVNO'},
    ];

    return(
        <CardHeading CardHeadingText ="Coverage"> 
        <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'> <SelectOption label="Vendor/MVNO" compulsory="*" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="SIM" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>

    );
};

export default Coverage