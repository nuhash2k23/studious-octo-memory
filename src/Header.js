import React, { useState } from 'react';
import header from './Style/header.module.css';
// import FitbitOutlinedIcon from '@mui/icons-material/FitbitOutlined';
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';



const Header = () => {
//   const [mobile, setMobile] = useState(false);
//   const [isClosed, setIsClosed] = useState(true); // Initially, mobile menu is closed
// // 


  // const closeMobileMenu = () => {
  //   setIsClosed(true); // Close mobile menu
  // };

  return (
    <div className={header.container}>
      <IconButton >
       <div className={header.bg}></div>
      </IconButton>
     
      {/* Render mobile menu only if it is open */}
      {/* {mobile && !isClosed && <MobileMenu isClosed={isClosed} onClose={closeMobileMenu} />} */}
      <div className={header.desktop}>
        <ul className={header.ulistdesktop}>
          <li className={header.list}>PRODUCTS</li>
          <li className={header.list}>SHOP</li>
          <li className={header.list}>NEWSLETTER</li>
          <li className={header.list}>SUPPORT</li>
        </ul>
      </div>
      <div className={header.usercart}>
    <div className={header.cart}></div>
    <div className={header.usrr}></div>
      </div>
     
    </div>
  );
};

export default Header;
