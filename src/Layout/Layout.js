import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import "./Layout.css"

const Layout = () => {
    const [isClass, setClass] = useState();
    const addClass = () => {
       
       setClass(!isClass)
    }
    const [isDarkMode, setDarkMode] = useState();
    const darkMode = () => { 
        setDarkMode(!isDarkMode)
    }

    return (

        <div className={`layout ${isClass ? 'active' : ''} ${isDarkMode ? 'darkMode' : '' }`}>
            <Sidebar />
            <Topbar addClass={addClass}  darkMode={darkMode} />
        </div>

    
    )
}
export default Layout;