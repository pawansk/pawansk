import React, { useState, useEffect } from 'react';

const TopBarUser = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    localStorage.setItem('darkMode', JSON.stringify(newState));
    document.body.classList.toggle('dark-mode', newState);
  };

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('darkMode'));
    if (savedState !== null) {
      setIsChecked(savedState);
      document.body.classList.toggle('dark-mode', savedState);
    }
  }, []); 
    
    return(
        <div className="col-md-7">
              <div className="topbar-right-links">

              <div className="day_night_toggle">
             <input
                type="checkbox"
                className="toggle-button"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>

              <div><a href="#" className='border-bg-none'><img src="https://att-solutions.telgoo5.com/telgoo5/app/views/images/user-g2-1.png" className="img-top"/></a></div>
              <div><a href="#" className="support">Support</a></div>
                <div className="btn-group">
                <button className="profile-dropdown dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                <div className="profile-name"><div className="profile-shortname">T</div>  <div className="">Telgoo5 (SubAdmin)</div></div>
                </button>
                <div className="dropdown-menu" aria-labelledby="defaultDropdown">
                 <div className="dropdown-user-under">
                  <div className="dropdown-user-under-letter">T</div>
                  <div className="dropdown-user-under-user">MVNO: Supadmin</div>
                 </div>
                 <div className="signout"><a href="#">Sign Out</a></div>
                </div>
              </div>
              </div>
            </div>
    );
};

export default TopBarUser;