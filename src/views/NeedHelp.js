import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardHeading from '../components/CardHeading';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import SelectOption from '../components/SelectOption';
import FileInput from '../components/FileInput';
import Button from '../components/Button';

const NeedHelp = () =>{

    const vendor2 = [
        {value:'Please choose the vendor', text:'Please choose the vendor'},
        {value:'admin', text:'admin'},
        {value:'DEMO_TESTMVNO', text:'DEMO_TESTMVNO'},
        {value:'AttLiveTest', text:'AttLiveTest'},
        {value:'AttLiveTestAbhi', text:'AttLiveTestAbhi'},
        {value:'TestTG5ATT', text:'TestTG5ATT'},
    ];
    return(
        <div className="row">
      
            <div className="col-sm-12 col-md-6 col-lg-10 col-xl-10">
                 <CardHeading CardHeadingText ="Need Help? Simply complete the form below">

                 <div class="form-check pb-2">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2">Subscriber Service(s) Impacted: (Check all that apply.)</label>
                 </div>

                 <div class="form-check d-flex gap-5">
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Voice</label>
                    </div>
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">SMS</label>
                    </div>
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Data</label>
                    </div>
                    <div>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">All</label>
                    </div>
                </div>

                <div class="form-check pt-4 pb-2">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2">Partner-specific inquiry (Check all that apply.)</label>
                 </div>

                <div class="form-check d-flex gap-5">
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">API</label>
                    </div>
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">PORTIN </label>
                    </div>
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Plan/Tariff functionality</label>
                    </div>
                </div>

                <div class="form-check d-flex gap-5 ps-0  pt-4 pb-2"><b>*MSISDN(s) Impacted:</b>
                <div className='pe-3'>
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2">Single</label>
                    </div>
                    <div className='pe-3'>
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                    <label class="form-check-label" for="exampleRadios3">All MSISDN(s) are impacted   </label>
                    </div>
                 </div>

                </CardHeading>

                <CardHeading CardHeadingText ="Voice">
                <p>BlueConnects has found that many issues with making calls can be corrected by powering the device off and on.</p>
                <ul class="list-unstyled mb-0">
                    <li>If powering the device off and back on does not resolve the issue:</li>
                    <li>Confirm the Subscriber has sufficient signal to place the call, (normally three bars).</li>
                    <li>Check the HLR STATUS If the status is anything other than IDLE OR BUSY, cancel location, and have the subscriber power cycle their device.</li>
                       </ul>
                    </CardHeading>

                    <CardHeading>
                        <p>If the previous troubleshooting steps did not correct the issue, please complete the Support Inquiry Form below. Be sure to 
                            complete all required (*) fields:</p>
                            <div className='row mt-3'>
                                <div className='col-md-4'>
                                <div className='row'>
                                <div className='col-md-12 pb-3'><SelectOption label="Select Vendor" options={vendor2} /> </div>
                                <div className='col-md-12'><TextInput label="Date issue first experienced" compulsory="*" /> </div>
                                 </div>
                                </div>

                                <div className='col-md-4'>
                                <div className='row'>
                                <div className='col-md-12 pb-3'><TextInput label="Representative name" compulsory="*" /> </div>
                                <div className='col-md-12'><TextInput label="Representative email address" compulsory="*" /> </div>
                                 </div>
                                </div>
                                <div className='col-md-4'>
                                <div className='row'>
                                <div className='col-md-12'><TextArea label="Physical address: include street address, city, state and zip code" rows={5} ></TextArea> </div>
                                 </div>
                                </div>
                            </div>

                            <div className='row pt-3'>
                             <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 '><TextInput label="MSISDN" compulsory="*" /></div>
                             <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 '><TextInput label="SIM" compulsory="*" /></div>
                             <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 '><TextInput label="Device and model number"/></div>

                            </div>

                    </CardHeading>

                    <CardHeading CardHeadingText ="Subscriber experience">
                        <b>Voice (check all that apply)</b>
                        <div class="form-check d-xl-flex d-lg-block gap-5 pt-3">
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Subscriber cannot make calls</label>
                    </div>
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Subscriber cannot receive calls</label>
                    </div>
                    <div className='pe-3'>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Fast busy</label>
                    </div>
                    <div>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Caller ID issue</label>
                    </div>

                    <div>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Subscriber cannot access voicemail</label>
                    </div>

                    <div>
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" value="" />
                    <label class="form-check-label" for="defaultCheck1">Other</label>
                    </div>
                </div>

                <div className='row mt-3'>
                             
                                <div className='col-md-4'>
                                <div className='row'>
                                <div className='col-md-12'><TextArea label="Other briefly describe the issue" rows={5} ></TextArea> </div>
                                 </div>
                                </div>

                                <div className='col-md-4'>
                                <div className='row'>
                                <div className='col-md-12 pb-3'><FileInput label="Input Request" /> </div>
                                <div className='col-md-12'><Button className="btn btn-danger btn-sm pull-right" value="Cancel"  /> </div>
                                 </div>
                                </div>

                                <div className='col-md-4'>
                                <div className='row'>
                                <div className='col-md-12 pb-3'><FileInput label="Response received" /> </div>
                                <div className='col-md-12'><Button className="btn btn-danger btn-sm pull-right" value="Cancel"  /> </div>
                                 </div>
                                </div>
                               
                            </div>

                    </CardHeading>
                    <div className='col-md-12'><Button className="btn btn-primary pull-right" value="Submit"  /> </div>
            </div>
            
            <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2">
                <div className="rightTabSection">
                <div className="tabHeading">Download Reports</div>
                <div className="allTabSec">
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> API Document</Link></div>
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> CDR Distribution</Link></div>
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> Postman Collection</Link></div>
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> APN Settings </Link></div>
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> Find PIN/PUK</Link></div>
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> Zipcode File   </Link></div>
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> Support File</Link></div>
                <div className="tab"><Link to="" className="tabLinkIcon"><span class="material-symbols-outlined">download</span> Number Shortage Report</Link></div>
                </div>
                </div>
            </div>

            
        </div>
    );
};

export default NeedHelp;