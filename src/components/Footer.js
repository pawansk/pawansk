
const Footer = ({sidebarToggle})=>{
    return(
<div className={`footerSection ${sidebarToggle ? 'sidebar-toggle' : ''}`}>
Copyright ©2006 - 2024 <a href="https://www.telgoo5.com/" target="_BLANK">Telgoo5</a> All rights reserved.
</div>

    );
};

export default Footer