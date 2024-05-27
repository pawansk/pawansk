
const TopBarIcon = ({topbariconClick}) =>{

    return(
        <div className="col-md-1"><div className="sidebar-icon" onClick={topbariconClick}><i className="fa fa-bars"></i></div></div>
    );
};

export default TopBarIcon;