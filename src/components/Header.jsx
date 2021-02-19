import React, { useState } from 'react';

import '../styles/Header.css';

export default props => {
    return(
        <div className='Header'>
            <img src={"/images/hotel.png"} alt=""/>
            <a>Hotelaria 5 estrelas</a>

            <a  id='Logoff' href='logoff'>Logout</a>
        </div>
    )
}