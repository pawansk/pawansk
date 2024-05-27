

import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';
import SelectOption from '../components/SelectOption';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import ModalComponent from '../components/ModalComponent';
import TextArea from '../components/TextArea';
import FileInput from '../components/FileInput';
import { useState } from 'react';
const ViewSupportInquiry = ()=>{
    const [isCompletedPortinTable, setCompletedPortinTable] = useState(false);

    const handleClick1 = (id)=>{
        setCompletedPortinTable(!isCompletedPortinTable);
    };

    const modalHeading = "Completed Inquiry";

    const CompletedPortin = [
        {'Sr No':{value:'1'}, 'Reference Number	':{value:'REF6485920'}, 'MSISDN':{value:''}, 'SIM':{value:'89014103277204958503',},
        'Partner name':{value:'DEMO_TESTMVNO',}, 'Representative name':{value:'test@gmail.com'}, 'Status':{value:'Partner Complete',  tdClass:'table-active'}, 
        'Inquiry Type':{value:'Voice',}, 'MSISDN(s) Impacted':{value:'Single',}, 'Date':{value:'02-26-2024 10:54:17'},
        'Updated Date':{value:'02-06-2024 04:09:58'}, 'Updated By':{value:'DEMO_TESTMVNO'}, 
        'Response Time':{value:'26 days 13 hours 37 minutes',}, 'Action':{value:'', tdClass: 'tdClassfull', linkClass:'modal_text_link', 
        actions: [
            { label: 'Completed', onClick: () => handleClick1(1) }
          ]},
        },
   
    ];
    const newReview = [
        {value:'Pending Partner Review', text:'Pending Partner Review'},
        {value:'Pending Carrier Ticket Completion', text:'Pending Carrier Ticket Completion'},
        {value:'Pending Carrier Review', text:'Pending Carrier Review'},
        {value:'Partner Complete', text:'Partner Complete'},
    ];
    const vendor = [
        {value:'Pending Partner Review', text:'Pending Partner Review'},
        {value:'Pending Carrier Ticket Completion', text:'Pending Carrier Ticket Completion'},
        {value:'Pending Carrier Review', text:'Pending Carrier Review'},
        {value:'Partner Complete', text:'Partner Complete'},
    ];

    return(
        <div>
            <div>
            <CardHeading CardHeadingText ="Support Inquiries Completed"> 
        <div className='row'>
                  <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-3'><TextInput label="Ref. Number" /></div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-3'> <SelectOption label="Vendor/MVNO" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-3'><TextInput label="MSISDN" /></div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-3'><TextInput label="SIM" /></div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-3'> <SelectOption label="SIM" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-3'> <SelectOption label="Inquiry Type" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'> <SelectOption label="MSISDN(s) Impacted" options={vendor} /> </div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="From Date" /></div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'><TextInput label="To Date" /></div>
                 <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2'> <SelectOption label="Weekends" options={vendor} /> </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mt-29'> <Button className="btn btn-primary" value="Submit"  /> </div>
            </div>
        </CardHeading>

            <div className="row">
            <div className='col-md-12'>
            <CardHeading CardHeadingText ="View Inquiries Completed" cardHeadingText="Download" cardHeadingTextClass="archive_button">
            <DataTable data={CompletedPortin}  handleClick1={handleClick1} />
            </CardHeading>

            <ModalComponent isOpen={isCompletedPortinTable}  modalClose={setCompletedPortinTable}  modalHeading={modalHeading} formButtonName="Update"  modalSize="modal-lg">
              <b>Reference Number : REF6485920</b>
              <div className='row pt-2'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3'><TextInput label="Date issue first experienced" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3'><TextInput label="Partner name" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3'><TextInput label="Representative name" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3'><TextInput label="Representative name" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3'><TextInput label="MDN" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3'><TextInput label="SIM" compulsory="*" /></div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3'><TextInput label="Device and model number" compulsory="*" /></div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3'><TextArea label="Physical address: include street address, city, state and zip code" rows={2} /></div>
             
            </div>

            <CardHeading CardHeadingText ="Subscriber experience">
                        <b>Voice (check all that apply)</b>
                        <div class="row mt-2">
                    <div className='col-12 col-sm-12 col-md-6 mb-2'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label ps-2" for="defaultCheck1">Subscriber cannot make calls</label>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 mb-2'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label ps-2" for="defaultCheck1">Subscriber cannot receive calls</label>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 mb-2'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label ps-2" for="defaultCheck1">Fast busy</label>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 mb-2'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label ps-2" for="defaultCheck1">Caller ID issue</label>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 mb-2'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label ps-2" for="defaultCheck1">Subscriber cannot access voicemail</label>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 mb-2'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label ps-2" for="defaultCheck1">Other</label>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 mt-2'>
                    <TextArea label="Other briefly describe the issue" rows={2} ></TextArea>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 mt-2'>
                    <TextArea label="Add Notes" rows={2} ></TextArea>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 mt-2'>
                      <FileInput label="Add Screenshot " />
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 mt-2'>
                    <SelectOption label="Select Vendor" options={newReview} />
                    </div>
                </div>

                    </CardHeading>

            </ModalComponent>
            </div>
            </div>

        </div>
        </div>

    );
};

export default ViewSupportInquiry;