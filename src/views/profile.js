import React from 'react';
import CardDropdownButton from '../components/CardDropdownButton';
import ModalComponent from '../components/ModalComponent';
import { useState } from 'react';

const Profile = () => {
const [modalOpen, isModalOpen]=useState(false)

const showModal=()=>{
    isModalOpen(!modalOpen) 
}

    const menuItems2 = [
        { text: "Profile 1", link: "#" },
        { text: "Profile 2", link: "#" },
        { text: "Profile 3", link: "#" }
    ];

    return (
        <div className="">
            <h5>Profile here..</h5>
            <CardDropdownButton buttonText="Please Select" dropdownItems={menuItems2} />
            <button onClick={showModal}>Modal</button>
            <ModalComponent isOpen={modalOpen}></ModalComponent>
        </div>
    );
};

export default Profile;
