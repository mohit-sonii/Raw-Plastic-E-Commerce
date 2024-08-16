import Logo from "./Logo";
import { CiMail } from "react-icons/ci";
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import './Header.css'
import TelMessage from "./TelMessage";

const Header: React.FC = () => {
   return (
      <div id="HeaderStyles">
         <div className="logo">
            <Logo />
         </div>
         <div className="tele-mess">
            <TelMessage value="+971 111 222 333 (UAE)" icon={<BsTelephone size={15} color="red" />} />
            <TelMessage value="trade@abc.com" icon={<CiMail size={15} color="red" />} />
         </div>
      </div>
   )
}

export default Header