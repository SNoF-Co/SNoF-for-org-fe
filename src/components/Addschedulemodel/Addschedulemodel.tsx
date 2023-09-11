import React from "react";
import "./schedulemodel.css"
interface Props{
    openAddScheduleModal: Boolean,
    closeAddSchedule: Function
}

const AddscheduleModel  = ({openAddScheduleModal, closeAddSchedule}:Props)=>{
    return(
        <div className="modal">
        <div className="overlay" >
        <div className="addScheduleModal">

            <button className='close-modal' onClick={()=>closeAddSchedule()}  style={{borderRadius:'10px', borderColor:'#333'}}>close</button>

            <div className="addAScheduleForm">
                <form className="SchedulemodalForm" onSubmit={(e)=>{
                    e.preventDefault()
                    // handleFormSubmit
                    }}>
                    <h3>Schedule Event</h3>

                    <div className="form-control">
                        <label>Time: </label>
                        <input type="time" required/>
                    </div>

                    <div className="form-control">
                        <label>Event: </label>
                        <textarea placeholder="Eg. Going to sleep" required></textarea>
                    </div>

                    <div className="form-control">
                        <label>Sound: </label>
                        <select required>
                            <option value="chimes">Chimes</option>
                            <option value="Xylophone">Xylophone</option>
                            <option value="Bounce">Bounce</option>
                            <option value="Echo">Echo</option>
                            <option value="Ascending">Ascending</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label>Notify for: </label>
                        <select required>
                        <option value="5 Minutes">5 Minutes</option>
                        <option value="10 Minutes">10 Minutes</option>
                        <option value="30 Minutes">30 Minutes</option>
                        <option value="1 Hour">1 Hour</option>
                        <option value="2 Hours">2 Hours</option>
                        <option value="1 day">1 Day</option>
                        </select>
                        
                        

                    </div>

                    <div className="notifyday">
                        <label style={{fontSize:'18px'}}>Notify on </label>
                        <div className="days">
                        <button className="notifyDay">Mon</button>
                        <button className="notifyDay">Tue</button>
                        <button className="notifyDay">Wed</button>
                        <button className="notifyDay">Thur</button>
                        <button className="notifyDay">Fri</button>
                        <button className="notifyDay">Sat</button>
                        <button className="notifyDay">Sun</button>
                        </div>
                        
                    </div>

                    <div className="form-control" >
                        <label>Location: </label>
                        <select required>
                            <option value=""></option>
                            <option value="">Kigali</option>
                            <option value="">Muhanga</option>
                            <option value="">Newyork</option>
                        </select>
                    </div>

                    <div className="addmodalbuttons">
                        <button className="save">Save</button>
                        <button className="cancel">cancel</button>
                    </div>
                    
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}

export default AddscheduleModel