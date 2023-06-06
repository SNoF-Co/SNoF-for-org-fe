import * as React from "react"
import PersonImg from "/profile-pic.png"
import EditIcon from "/editIcon.png"
import "./profile.css"

const ProfilePage = ()=>{
    const personInf = {name: "David NYIRINGABO", organisation: "MonCast", image: PersonImg, email: "nyiringabodavid62@gmail.com"}
        return(
            <div className="my-profile-page">
                <h3>My profile</h3>
                <div className="bottom-main-profile-container">
                    <div className="upper-main-profile-container">
                        <img src={personInf.image}/>
                        <div className="middle-upper-content">
                            <h3>{personInf.name}</h3>
                            <h6>{personInf.organisation}</h6>
                        </div>
                        <button type="button"><img src={EditIcon}/> Edit</button>
                    </div>

                    <div className="middle-main-content-container"> 
                        <div className="upper-middle-main-content-container">
                            <h3>Personal Information</h3>
                            <button type="button"><img src={EditIcon}/> Edit</button>
                        </div>

                        <div className="bottom-middle-main-content-container">
                            <div className="left-bottom-middle-content">
                                <h4>First name</h4>
                                <h4>{personInf.name}</h4>
                                <h4>Email address</h4>
                                <h4>{personInf.email}</h4>
                                <h4>Bio</h4>
                                <h4>Software developer</h4>
                            </div>

                            <div className="right-bottom-middle-content">
                                <h4>Last name</h4>
                                <h4>{personInf.name}</h4>
                                <h4>Phone number</h4>
                                <h4>+250 7888394899</h4>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-main-content-container"> 
                        <div className="upper-bottom-main-content-container">
                            <h3>Address</h3>
                            <button type="button"><img src={EditIcon}/> Edit</button>
                        </div>

                        <div className="bottom-bottom-main-content-container">
                            <div className="left-bottom-bottom-content">
                                <h4>Country</h4>
                                <h4>{personInf.name}</h4>
                                <h4>Postal code</h4>
                                <h4>N4345</h4>
                            </div>

                            <div className="right-bottom-middle-content">
                                <h4>City /State</h4>
                                <h4>{personInf.name}</h4>
                                <h4>Road id</h4>
                                <h4>+250 7888394899</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ProfilePage