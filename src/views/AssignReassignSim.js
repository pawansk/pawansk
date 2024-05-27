
import PageTitle from '../components/PageTitle';
import CardSection from '../components/CardSection';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const AssignReassignSim = () =>{
    const PageHeading ="Assign/Re-assign Sim's => Assign To MVNO";
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
    <PageTitle PageHeading={PageHeading}></PageTitle>

        <div>
        <CardSection  style={{ backgroundColor: '', }} className="myClass p-3">
            <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <SelectOption label="Unit Type" options={vendor} compulsory="*" /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <SelectOption label="Upload Type" options={vendor} compulsory="*" /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'> <SelectOption label="MVNO" options={vendor} compulsory="*" /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="SIM" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardSection>
        </div>

        <div>



        </div>

        </div>

);

};

export default AssignReassignSim;