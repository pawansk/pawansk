
import CardHeading from '../components/CardHeading';
import DataTable from '../components/DataTable';

const TotalAssignedSim = () =>{
    const vendorAssigned = [
    {'Sr No':{value:'1'}, 'MVNO':{value:'ATTLIVETEST'},'Assigned Date':{value:'	02-02-2024'},'	Total Assigned':{value:'1'}},
    {'Sr No':{value:'2'}, 'MVNO':{value:'DEMO_TESTMVNO'},'Assigned Date':{value:'02-02-2024'},'	Total Assigned':{value:'2'}},
    {'Sr No':{value:'3'}, 'MVNO':{value:'ATTLIVETEST'},'Assigned Date':{value:'	02-02-2024'},'	Total Assigned':{value:'2'}},
    {'Sr No':{value:'4'}, 'MVNO':{value:'ATTLIVETEST'},'Assigned Date':{value:'	02-02-2024'},'	Total Assigned':{value:'1'}},
    {'Sr No':{value:'5'}, 'MVNO':{value:'DEMO_TESTMVNO'},'Assigned Date':{value:'02-02-2024'},'	Total Assigned':{value:'12'}},
    ];
return(

    <div>
    <CardHeading CardHeadingText ="Total Assigned SIM  =  27" > 
    <DataTable data={vendorAssigned}  />
    </CardHeading>

    </div>


);

};

export default TotalAssignedSim;