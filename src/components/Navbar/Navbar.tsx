import './Navbar.css'
import { FaAd, FaSearch, FaAddressBook } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'

import logo from '../../assets/snof-logo.png'
import profile from '../../assets/profile-pic.png'

interface Props {
    setActivateSideBar: Function,
    activateSideBar: boolean
}

 const Navbar:React.FC<Props>=({setActivateSideBar,activateSideBar}) =>{
    const consol = ()=>{
        setActivateSideBar(!activateSideBar)
        console.log("it is clicked")
    }
    return (
        <div className="nav">
            <div className="nav--left">
                <span className="search-icon">
                    <FiMenu size={40} onClick={consol}/>
                </span>
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav--middle">
                <input type="text" name="search" id="search" placeholder='Search ...' />
                <div className="icon-holder">
                    <span className="search-icon">
                        <FaSearch size={25}/>
                    </span>
                </div>
            </div>
            <div className="nav--right">
                <span className="icon-holder">
                    <MdNotifications size={40}/>
                </span>
                <div className="person--profile">
                    <img src={profile} alt="Profile picture" />
                </div>
            </div>
        </div>
    )
}

export default Navbar