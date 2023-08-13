import React from 'react'
import ProNavbar from "../ProNavbar/ProNavbar";
import { Footer } from '../../container';

const PBase = ({ title = "Master page for logout", children }) => {
    return (
        <div>
            <ProNavbar />
            {children}
            <Footer />
        </div>
    )
}

export default PBase;
