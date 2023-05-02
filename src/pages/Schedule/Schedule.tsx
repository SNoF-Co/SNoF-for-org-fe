import ScheduleList from "../../components/SchedulesList/ScheduleList";
<<<<<<< HEAD
import Calendar from "../../components/CalendarModule/Calendar"
=======
import Calendar from "../../components/Calendar/Calendar"
>>>>>>> acdaae4482f43fa4c0266fbebb83bbcbaf9f9676
import './Schedule.css'

export default function Schedules () {
    return (
        <div className="schedule--container">
            <Calendar />
            <ScheduleList />
        </div>
    )
}