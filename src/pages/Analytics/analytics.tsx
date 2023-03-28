import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./analytics.css"
import dotImg from "/dot.png"
import progressBarImg from "/progressbar.png"
import startImg from "/star-fill.png"
import Linechart from "./Line"
import DoughnutChat from './Doughnut'

interface Props{
    tasks: object[]

}

interface task{
    id: number,
    text: string,
    time: string,
    duration: string
}




const Analytics : React.FC<Props>= ({tasks})=> {
const [activateSideBar,setActivateSideBar] = useState(true)

    return (
        <div className='overall-container'>
            <Navbar setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
            <div className='section-container row'>
                <Sidebar activateSideBar={activateSideBar}/>
                <div className='analytics-page-container'>
                    <div className='header-choose-time'>
                        <select name="choose-time" className='select-time-frame'>
                            <option value="all-time">All-Time</option>
                            <option value="this-week">This-week</option>
                            <option value="this-month">This-month</option>
                        </select>
                    </div>

                    <div className='boxes-container'>
                        <div className='analy-box'>
                            <h2>schedule planned</h2>
                            <h1>98</h1>
                        </div>
                        <div className='analy-box'>
                            <h2>Plan completed</h2>
                            <h1>60</h1>
                        </div>
                        <div className='analy-box'>
                            <h2>Plan uncompleted</h2>
                            <h1>38</h1>
                        </div>
                        <div className='analy-box'>
                            <h2>Pending schedules</h2>
                            <h1>2</h1>
                        </div>
                    </div>

                    <div className='charts-container'>
                        <div className='chat-left'>
                            <Linechart/>
                        </div>
                        <div className='chat-right'>
                            <DoughnutChat/>
                        </div>
                    </div>

                    <div className="bottom-container">
                        <div className="bottom-container-left">
                            <h3>Recently made schedules</h3>
                            <div className='analytics-schedule-container'>
                                <div className="header-schedule">
                                    <h2>Activity</h2>
                                    <h2>Time</h2>
                                    <h2>Progress</h2>
                                    <h2>Status</h2>

                                </div>
                                {tasks.map((task:any)=>{
                                    return(
                                        <div className='completed-task'>
                                            <div className='contained'>
                                              <h6><img src={dotImg}/>  {task.text}</h6>

                                            </div>

                                            <div className="contained">
                                                <h6>{task.time}</h6>

                                            </div>

                                            <div className="contained">
                                             <img src={progressBarImg}/>
                                                
                                            </div>

                                            <div className="contained">
                                                <h6>completed</h6>
                                                
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="bottom-container-right">
                            <h3>Ratings</h3>
                            <div className='ratings-boxes-container'>
                                <div className='rating-box'>
                                    <h3>Today</h3>
                                    <div className="percentage">
                                        {"Pending"}
                                    </div>
                                    <div className='stars-container'>
                                        ...
                                    </div>

                                </div>
                                <div className='rating-box'>
                                    <h3>This month</h3>
                                    <div className="percentage">
                                        {"90%"}
                                    </div>
                                    <div className='stars-container'>
                                        <img src={startImg} />
                                        <img src={startImg} />
                                        <img src={startImg} />
                                        <img src={startImg} />

                                    </div>

                                </div>
                                <div className='rating-box'>
                                    <h3>This year</h3>
                                    <div className="percentage">
                                        {"87%"}
                                    </div>
                                    <div className='stars-container'>
                                        <img src={startImg} />
                                        <img src={startImg} />
                                        <img src={startImg} />
                                        <img src={startImg} />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
           

        </div>
        </div>
    )
}

export default Analytics
