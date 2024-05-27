const TopBarSection = ({ children, topBarToggle }) =>{

  
    return(
        <nav className={`navbar navbar-expand-lg topbar-nav ${topBarToggle ? 'sidebar-hidden' : ''}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <div className="row w-100 align-items-center">
                 {/* TopBarIcon, TopSearchBar and TopBarUser insert children parameter here and import App page */}
                 {children}
              </div>
          </div>
        </div>
      </nav>

    );
};

export default TopBarSection;