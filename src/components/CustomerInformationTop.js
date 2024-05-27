import DashboardCard from "../components/DashboardCard";

const CustomerInformationTop = ({loadCustomerClick, loadCarrierClick, hideClass}) =>{

return(

    <div className="row">
    <div className="col-md-6 col-xl-3">
    <DashboardCard
        className="dashboardCard"
        title="Customer ID"
        cardTextdata ="10722"
        imageUrl="https://cdn-icons-png.flaticon.com/512/6837/6837225.png"
        loadCarrier ="Load Customer Information"
        loadCarrierClass="loadCarrier"
        loadCarrierClick={loadCustomerClick}
        />
    </div>

    <div className="col-md-6 col-xl-3">
    <DashboardCard
        className="dashboardCard"
        title="MSISDN"
        cardTextdata ="803-319-4342"
        imageUrl="https://cdn-icons-png.flaticon.com/512/4298/4298126.png"
        loadCarrier ="Need Help?"
        loadCarrierClass="needHelp"
        />
    </div>

    <div className="col-md-6 col-xl-3">
    <DashboardCard
        className="dashboardCard"
        title="SIM"
        cardTextdata ="89012804331202875601"
        imageUrl="https://cdn-icons-png.flaticon.com/512/4298/4298126.png"
        />
    </div>

    <div className="col-md-6 col-xl-3">
    <DashboardCard
        className="dashboardCard"
        title="Carrier SIM MSISDN"
        cardTextdata ="803-319-4431"
        imageUrl="https://cdn-icons-png.flaticon.com/512/10492/10492541.png"
        loadCarrier ="Load Carrier Status"
        loadCarrierClass={`loadCarrier ${hideClass ? 'd-none' : ''}`}
        loadCarrierClick={loadCarrierClick}
        />
    </div>
   </div> 
);

};

export default CustomerInformationTop;