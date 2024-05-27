
import React from "react";
import CardDropdownButton from "../components/CardDropdownButton";
import { useState } from "react";



const DashboardCard = ({title, text, icon, imageUrl, className, buttonText, dropdownItemsChild, dropdownClassName, cardTextdata, loadCarrier, loadCarrierClass, loadCarrierClick } ) =>{
const [copied, setCopied] = useState(false)

  const copyTextButton = () => {
    navigator.clipboard.writeText(cardTextdata);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

return(
<div className={`card ${className}`}>
        <div className="g-0 align-items-center row">
            <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h5 className="mb-1 mt-1"><span>{title}</span></h5>
                {text && (
                  <p className="card-text text-muted mt-3 mb-0"><small className="text-muted">{text}</small></p>
                )}
             
              {dropdownItemsChild ? (
                <CardDropdownButton
                buttonText={buttonText}
                dropdownItems={dropdownItemsChild}
                className={dropdownClassName}
                />
              ) : (<span>
                <span className="cardTextdata">{cardTextdata}</span>
               <i className="fa fa-copy copyTextButton" onClick={copyTextButton}></i>
               {copied && <span className="copiedText">Copied!</span>}
               </span>
               )}
               {loadCarrier && (
                <span className={`${loadCarrierClass}`} onClick={loadCarrierClick}>{loadCarrier}</span>
               )}
            </div>
            
            <div>
            {icon && <i className={`fa ${icon}`}></i>}
            {imageUrl && <img src={imageUrl} alt="image" className="img-fluid card-img" />}
          </div>
          </div>
          </div>
        </div>
      </div>
);
};
export default DashboardCard