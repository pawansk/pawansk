

const PageTitle =({PageHeading, anotherPageHeading, iconClass, iconName, downloadPDF,rightHeading})=>{
    return(
      <div className="page-title-heading mb-3">
        {PageHeading} 
     
     {anotherPageHeading && <span className={`${downloadPDF}`}>
        <span className={iconClass}>{iconName}</span>
        {anotherPageHeading}
      </span>}

    {rightHeading &&  <span className="rightHeading">{rightHeading}</span>}
      </div>  
    );
};

export default PageTitle