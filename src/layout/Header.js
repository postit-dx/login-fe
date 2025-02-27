import React from 'react';
import '../assets/scss/layout/Header.scss';

function Header(props) {
    return (
        <div className="Header">
            <img src="images/logo_kor.jpg" alt="posco DX"/>
            <p>
                원료 반입 시스템 PosFlow
            </p>
        </div>
    );
}

export default Header;