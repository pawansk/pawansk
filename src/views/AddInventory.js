
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const AddInventory = () =>{
    const PageHeading ="Add Unit";
    const reasonCode = [
        {value:'Select', text:'Select'},
        {value:'SIM Activation (PC119)', text:'SIM Activation (PC119)'},
        {value:'MSISDN Disconnect (PC123)', text:'MSISDN Disconnect (PC123)'},
        {value:'MSISDN Change (PC127)', text:'MSISDN Change (PC127)'},
        {value:'SIM Change (PC129)', text:'SIM Change (PC129)'},
        {value:'Restore (PC133)', text:'Restore (PC133)'},
        {value:'Suspend (PC131)', text:'Suspend (PC131)'},
    ];
    const uploadType = [
        {value:'Bulk Upload', text:'Bulk Upload'},
    ];
return(

    <div>
    <PageTitle PageHeading={PageHeading}></PageTitle>

        <div>
        <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
            <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'> <SelectOption label="Unit Type" options={reasonCode} compulsory="*" /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'> <SelectOption label="Upload Type" options={uploadType} compulsory="*" /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'><TextInput label="SIM" value="" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'><TextInput label="IMSI" value="" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3'><TextInput label="PIN1" value="" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3'><TextInput label="PUK1" value="" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3'><TextInput label="PIN2" value="" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3'><TextInput label="PUK2" value="" compulsory="*" /></div>
                <div className='pull-right'> <Button className="btn btn-primary mt-3 pull-right" value="Submit"  /> </div>
            </div>
        </CardSection>
        </div>

        <div>



        </div>

        </div>

);

};

export default AddInventory;