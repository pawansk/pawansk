

import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
const CancelPortin = ()=>{
    const orderTable = [
        {'Sr No':{value:'1'}, 'MSISDN':{value:'706-216-9581'}, 'Vendor':{value:'ATTLIVETEST',},
        'Date':{value:'02-13-2024 08:35:16',}, 'Portin Status':{value:'CN'},'Message':{value:'ER~MANDATORY PARAMETER PORTREQUESTNUMBER IS MISSING'},},

        {'Sr No':{value:'2'}, 'MSISDN':{value:'	706-216-9581'}, 'Vendor':{value:'DEMO_TESTMVNO',},
        'Date':{value:'02-07-2024 03:49:13',}, 'Portin Status':{value:'ER'},'Message':{value:'ER~MANDATORY PARAMETER PORTREQUESTNUMBER IS MISSING'},},

        {'Sr No':{value:'3'}, 'MSISDN':{value:'	706-216-9581'}, 'Vendor':{value:'DEMO_TESTMVNO',},
        'Date':{value:'02-13-2024 08:35:16',}, 'Portin Status':{value:'ER'},'Message':{value:'ER~MANDATORY PARAMETER PORTREQUESTNUMBER IS MISSING'}, }
    ];
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
            <CardHeading CardHeadingText ="Search"> 
        <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 '> <SelectOption label="Select Vendor" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'><TextInput label="MSISDN" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>

            <div className="row">
            <div className='col-md-12'>
            <CardHeading CardHeadingText ="Cancel Portin">
            <DataTable data={orderTable} />


            </CardHeading>
            </div>
            </div>

        </div>
        </div>

    );
};

export default CancelPortin;