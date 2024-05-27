

import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import ModalComponent from '../components/ModalComponent';
import SummaryChart from '../components/SummaryChart';
import { useState } from 'react';
const ViewSupportInquiry = ()=>{
    const [isCompletedPortinTable, setCompletedPortinTable] = useState(false);

    const handleClick1 = (id)=>{
        setCompletedPortinTable(!isCompletedPortinTable);
    };

    const modalHeading = "Support Inquiries Report Chart - admin";

    const CompletedPortin = [
        {'Partner Name':{value:'1',  
        actions: [
            { label: 'admin', onClick: () => handleClick1(1) }
          ]},
           'Reference Number	':{value:'REF6485920'}, 'MSISDN':{value:''}, 'SIM':{value:'89014103277204958503',},
            'Caller ID issue  ':{value:'0',}, 'Voice':{value:'1'}, 'SMS':{value:'0'}, 
            'Data':{value:'1',}, 'API':{value:'0',}, 'Portin':{value:'0'},
            'Plan/Tariff':{value:'1'}, 'Total':{value:'1'}, 
            },
   
    ];

    const vendor = [
        {value:'Pending Partner Review', text:'Pending Partner Review'},
        {value:'Pending Carrier Ticket Completion', text:'Pending Carrier Ticket Completion'},
        {value:'Pending Carrier Review', text:'Pending Carrier Review'},
        {value:'Partner Complete', text:'Partner Complete'},
    ];
    const activation  = [
        { name: 'Activation', data: [44, 55, 57, 56, 61, 58, 63] },
        { name: 'Desctivation', data: [76, 85, 101, 98, 87, 105, 91] },
      ];
      const activationCategories = ['Feb-05-2024', 'Feb-04-2024', 'Feb-03-2024', 'Feb-02-2024', 'Feb-01-2024', 'Dec-31-2023', 'Dec-30-2023'];

      const usageSummary  = [
        { name: 'Voice', data: [44, 55, 57, 56, 61, 58, 63] },
        { name: 'SMS', data: [76, 25, 55, 98, 99, 76, 91] },
        { name: 'Data', data: [44, 66, 87, 34, 88, 100, 45] },
      ];
      const usageSummaryCategories = ['Feb-05-2024', 'Feb-04-2024', 'Feb-03-2024', 'Feb-02-2024', 'Feb-01-2024', 'Dec-31-2023', 'Dec-30-2023'];
    
    return(
        <div>
            <div>
            <CardHeading CardHeadingText ="Support Inquiries Completed"> 
        <div className='row'>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'> <SelectOption label="Select MVNO" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="From Date" /></div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="To Date" /></div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'> <SelectOption label="Status" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'> <SelectOption label="Weekends" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>

            <div className="row">
            <div className='col-md-12'>
            <CardHeading CardHeadingText ="View Inquiries Completed" cardHeadingText="Download" cardHeadingTextClass="archive_button">
            <DataTable data={CompletedPortin}  handleClick1={handleClick1} />
            </CardHeading>

            <ModalComponent isOpen={isCompletedPortinTable}  modalClose={setCompletedPortinTable}  modalHeading={modalHeading} modalSize="modal-xl">
              <div className="row">
        <div className="col-md-6 col-xl-6">
        <SummaryChart 
        title="Last 7 Days Activation & Deactivation Summary" 
        chartClass="dashboardCharClass" 
        seriesData={activation} 
        categories={activationCategories} 
        text=""
        colors={['#00a760', '#f3a034']} 
        />
        </div>

        <div className="col-md-6 col-xl-6">
<SummaryChart 
        title="Last 7 Days Usage Summary" 
        chartClass="dashboardCharClass" 
        seriesData={usageSummary} 
        categories={usageSummaryCategories} 
        text="Usage (Data: MB , Voice: Minute , SMS: Unit)"
        colors={['#7fb2e8', '#434348', '#85ef87']} 
        />
</div> 
             
            </div>
            </ModalComponent>
            </div>
            </div>

        </div>
        </div>

    );
};

export default ViewSupportInquiry;