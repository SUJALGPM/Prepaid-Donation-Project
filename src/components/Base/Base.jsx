import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../../container";

const Base = ({title="Master Page",children}) =>{
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Base;