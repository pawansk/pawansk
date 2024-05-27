import PageTitle from '../components/PageTitle';
import DataTable from '../components/DataTable';
import React from 'react';
//import { useHistory } from 'react-router-dom';


const RecentSearches = ({  }) => {
    
const msisdnTable = [

    { 'Sr No': { value: '1' }, 'Customer ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89014103277204961002'},
    'Searched By':{value:'supadmin'}, 
    },
    { 'Sr No': { value: '2' }, 'Customer ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89012802331277808547'},
    'Searched By':{value:'supadmin'}, 
    },
    { 'Sr No': { value: '3' }, 'Customer ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89012802331277808550'},
    'Searched By':{value:'supadmin'}, 
    },
    { 'Sr No': { value: '4' }, 'Customer ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89012802331277808533'},
    'Searched By':{value:'supadmin'}, 
    },
    { 'Sr No': { value: '5' }, 'Customer ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89012802331277808654'},
    'Searched By':{value:'supadmin'}, 
    },
    { 'Sr No': { value: '6' }, 'Customer ID': { value: 'DEMO_TESTMVNO', classNamew: 'highlight' }, 
    'MSISDN': { value: '2062145605' }, 'SIM':{value: '89012802331277808333'},
    'Searched By':{value:'supadmin'}, 
    },
    
];

//const history = useHistory();
const PageHeading ="Recent Searches";
const anotherPageHeading = "Download";
const download="download";

const rowClickData = () => {
   // history.push('/dashboard'); 
   window.location.href = '/CustomerProfile';
  };


 return (
    <div>
    <PageTitle PageHeading={PageHeading} anotherPageHeading={anotherPageHeading} iconClass="material-symbols-outlined" iconName={download} downloadPDF="downloadPDF"></PageTitle>
    
    <div>
    <DataTable data={msisdnTable} rowClickData={ rowClickData} rowClass="rowClass" />
    </div>

    </div>

    );
};

export default RecentSearches;
