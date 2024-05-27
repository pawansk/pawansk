import React from "react";
import { useState, useEffect, useRef } from "react";
const CardDropdownButton =({className, buttonText, dropdownItems})=>{
    const [buttonDropdownToggle , isbuttonDropdownToggle ] = useState(false);

    const dropdownRef = useRef();
   //console.log(dropdownRef)

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            isbuttonDropdownToggle(false);
           // console.log(dropdownRef.current)
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const buttonDropdown=()=>{
        isbuttonDropdownToggle (!buttonDropdownToggle )
    };


    return(
        <div ref={dropdownRef} className={`dropdownBut ${className}`} >
            <button className="dropdownbutText d-flex align-items-center" onClick={buttonDropdown}>{buttonText}
            <span className="material-symbols-outlined arrow-down-dash">
                stat_minus_1</span></button>
            <div className={`dropdownTextShow ${buttonDropdownToggle  ? 'bottonToggle' : ''}`} >
                <ul>
                   
                {dropdownItems.map((item, index) => (
                     <li key={index}> <a href={item.link}>{item.text}</a> </li>
                  ))}
                 
                </ul>
            </div>
        </div>
    );
};

export default CardDropdownButton;