import React from 'react';
import ProfileImg from '../../assets/images/profile.jpg'
import './style.css';


const Header = React.FC = () => {


    return (
        <div className="header_container">
        <div className="header_name">
            <p>NewPayment</p>
        </div>
        <div className="header_description">
            <p>Lista de Usuários</p>
        </div>
        <div className="header_avatar">
            <img src={ProfileImg} alt="" />
        </div>
        </div>
    )
}

export default Header;