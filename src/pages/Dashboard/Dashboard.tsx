import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/side'
import Analytics from '../Analytics/Analytics'
import Hero from '../Hero/Hero'
import './Dashboard.css'

interface Props{
    setActivateSideBar:Function,
    activateSideBar: boolean
}
export default function Dashboard () {
const [activateSideBar,setActivateSideBar] = useState(true)

    return (
        <div className='overall-container'>
            <Navbar setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
            <div className='section-container row'>
                <Sidebar activateSideBar={activateSideBar}/>
            </div>
            <div className="section-container--one">
                <Hero username={'Mr Abushali'} tasks={[]} firstTasks={[]} completed={[]} time={''} organisations={[]} activateSideBar={false} />
            </div>
        </div>
    )
}
