
import React from "react";
import { useState } from "react";
import CardSection from "../components/CardSection";
import DashboardCard from "../components/DashboardCard";
import SummaryChart from "../components/SummaryChart";
import DonutChart from "../components/DonutChart";


const Dashboard = () =>{
const [showCard, isAsshowCard] = useState(false);

const switchButton = ()=>{
    isAsshowCard(!showCard)
    console.log(showCard)
}

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

const doungtChart = [21, 24, 16];
const activationSummary= ['DEMO_TESTMVNO',  'AttLiveTest', 'AttLiveTestAbhi',  ]

const doungtChart2 = [18, 14];
const deactivationSummary= ['AttLiveTest', 'AttLiveTestAbhi',  ]

const doungtChart3 = [23, 6, 2];
const activationCustomerSummary=  ['DEMO_TESTMVNO',  'AttLiveTest', 'AttLiveTestAbhi',  ]


   return(
        
    <div className="">
        <CardSection  style={{ backgroundColor: '', }} className="myClass d-flex align-items-center p-3">
       <span className={`card-title-desc mb-0 ${showCard ? '' : 'activeMaster'}`}>Master Dashboard (PC188)</span>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" onClick={switchButton}></span>
        </label><span className={`card-title-desc mb-0 ${showCard ? 'activeMaster' : ''}`}> Dashboard</span>
       </CardSection>

    {showCard ||  (
    <div className="row">
        <div className="col-md-6 col-xl-3">
        <DashboardCard
            className="dashboardCard"
            title="Activation Status"
        // text="Last updated 3 mins ago"
        // icon="fa-bars"
            imageUrl="https://att-solutions.telgoo5.com/telgoo5/style/dist/img/activation.jpg"
            buttonText="View"
            dropdownClassName="viewClass"
            dropdownItemsChild={[
                { text: "Last 7 Days 3" },
                { text: "Last 30 Days 58" },
                { text: "Last 12 Months 58" }
            ]}
            />
        </div>

        <div className="col-md-6 col-xl-3">
        <DashboardCard
            className="dashboardCard"
            title="Today Usage"
            imageUrl="https://att-solutions.telgoo5.com/telgoo5/style/dist/img/usage.jpg"
            buttonText="View"
            dropdownClassName="viewClass"
            dropdownItemsChild={[
                { text: "Work in progress" }
            ]}
            />
        </div>

        <div className="col-md-6 col-xl-3">
        <DashboardCard
            className="dashboardCard"
            title="MSISDN Snapshot"
            imageUrl="https://att-solutions.telgoo5.com/telgoo5/style/dist/img/mdn.jpg"
            buttonText="View"
            dropdownClassName="viewClass"
            dropdownItemsChild={[
                { text: "Active 27" },
                { text: "Deactive 0" },
                { text: "Suspend 3" }

            ]}
            />
        </div>

        <div className="col-md-6 col-xl-3">
        <DashboardCard
            className="dashboardCard"
            title="Deactivation"
            imageUrl="https://att-solutions.telgoo5.com/telgoo5/style/dist/img/deactivevation.jpg"
            buttonText="View"
            dropdownClassName="viewClass"
            dropdownItemsChild={[
                { text: "Subscribers 30" },
                { text: "Last 7 Days 4" },
                { text: "Last 30 Days 30" }

            ]}
            />
        </div>

    </div> 

    )}

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


<div className="col-md-4 col-xl-4">
<DonutChart 
        title="Activation Summary" 
        chartClass="dashboardCharClass" 
        labels={activationSummary}
        seriesData={doungtChart} 
        colors={['#7fb2e8', '#434348','#85ef87',   ]} 
        />
</div> 


<div className="col-md-4 col-xl-4">
<DonutChart 
        title="Deactivation Summary" 
        chartClass="dashboardCharClass" 
        labels={deactivationSummary}
        seriesData={doungtChart2} 
        colors={['#7fb2e8', '#434348',   ]} 
        />
</div> 


<div className="col-md-4 col-xl-4">
<DonutChart 
        title="Active Customers Summary" 
        chartClass="dashboardCharClass" 
        labels={activationCustomerSummary}
        seriesData={doungtChart3} 
        colors={['#7fb2e8', '#434348','#85ef87',   ]} 
        />
</div> 


</div>


    </div>

    );
}; 

export default Dashboard;