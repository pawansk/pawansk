const TopSearchBar = () =>{
    
    return(
        <div className="col-md-4">
            <div className="top-search">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm">
            <div className="input-group">
              <input type="search" placeholder="Search SIM/MSISDN/Customer ID" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn text-orange"><i className="fa fa-search"></i></button>
              </div></div>
            </div>
          </div>
            </div>
    );
};

export default TopSearchBar;