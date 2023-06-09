import React from "react";
import './Header.css';


function Header(){
    return <>
        <div className="header">
           <div className="bank_logo">
            <div className="bank_title">Lords Bank</div>
           </div>
           
           <div className="header_nav">
            <nav>
                <ul>
                    <li>About</li>
                    <li>Support</li>
                </ul>
            </nav>
           </div>
        </div>
    </>
}

export default Header;