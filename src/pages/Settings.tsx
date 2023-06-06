import * as React from "react"
import "./settings.css"
import { NavLink } from "react-router-dom"

interface Props{
    children: React.ReactNode
}
const Settings = ({children}: Props)=>{
        return(
            <div className="settings-content-container">
                <h3 style={{color: "#000", fontSize: "24px"}}>Settings</h3>
                <div className="main-settings-content-container">
                    <div className="left-settigns-sidebar">
                        <div className="myprofile">
                            <h2 style={{color:"#000", fontFamily:"poppins"}}>My profile</h2>
                        </div>
                        <div className="link-containers">
                            <NavLink to={"settings/data_mode"} className="link"><button>Dark mode</button></NavLink>
                            <NavLink to={"/settings/language"} className="link"><button>language</button></NavLink>
                            <NavLink to={"/settings/data_policy"} className="link"><button>Data policy</button></NavLink>
                            <NavLink to={"/settings/about"} className="link"><button>About</button></NavLink>
                            <NavLink to={"/settings/terms_of_service"} className="link"><button>Terms of service</button></NavLink>
                        </div>
                    </div>
                    <div className="right-settings-content">
                        {children}
                    </div>
                </div>
            </div>
        )
}
export default Settings