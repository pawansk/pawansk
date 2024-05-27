import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';

const TotalRecords = ()=>{

const DataTableData = [
    {'Cust ID':{value:'10892', link: '/CustomerProfile',}, 'SIM Number':{value:'89012802331277808554', link: '/CustomerProfile',},'Telephone':{value:'8033190413', link: '/CustomerProfile',},
     'Zip':{value:'29031', link: '/CustomerProfile',}, 'vendorID':{value:'AttLiveTest', link: '/CustomerProfile',}, 
    'Last Action':{value:'PurchasePlan', link: '/CustomerProfile',},'Select':{value:'Select', link: '/CustomerProfile',}},
    {'Cust ID':{value:'10891', link: '/CustomerProfile',}, 'SIM Number':{value:'89012802331277808554', link: '/CustomerProfile',},'Telephone':{value:'8033190413', link: '/CustomerProfile',},
     'Zip':{value:'29031', link: '/CustomerProfile',}, 'vendorID':{value:'AttLiveTestAbhi', link: '/CustomerProfile',}, 
    'Last Action':{value:'PurchasePlan', link: '/CustomerProfile',},'Select':{value:'Select', link: '/CustomerProfile',}}
];

    return(

        <CardHeading CardHeadingText ="Total Records - 5" cardHeadingText="Download" cardHeadingTextClass="archive_button">
            <style>
{`
    a.msidn-highlight {
        color: #000000de;
        background-color:transparent;
        padding:0px;
    }
`}
</style>
        <DataTable data={DataTableData} />
        </CardHeading>
    );
};

export default TotalRecords;