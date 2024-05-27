

import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
const PortInReport = ()=>{

    const CompletedPortin = [
        {'Sr No':{value:'1'}, 'MSISDN':{value:'706-216-9581'}, 'SIM':{value:'89012802331277808570'}, 'Vendor':{value:'ATTLIVETEST',},
        'Date':{value:'02-13-2024 08:35:16',}, 'Portin Status':{value:'CO'},},
        {'Sr No':{value:'2'}, 'MSISDN':{value:'706-216-9581'}, 'SIM':{value:'89012802331277808570'}, 'Vendor':{value:'ATTLIVETEST',},
        'Date':{value:'02-13-2024 08:35:16',}, 'Portin Status':{value:'CO'},},
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
            <CardHeading CardHeadingText ="Search Port In Report"> 
        <div className='row'>
        <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="MSISDN" /></div>
                 <div className='col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 '> <SelectOption label="Status" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 '> <SelectOption label="Vendor" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="From Date" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="To Date" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>

            <div className="row">
            <div className='col-md-12'>
            <CardHeading CardHeadingText ="Port In Report" cardHeadingText="Download" cardHeadingTextClass="archive_button">
            <DataTable data={CompletedPortin} />


            </CardHeading>
            </div>
            </div>

        </div>
        </div>

    );
};

export default PortInReport;