import ScheduleList from "../../components/SchedulesList/ScheduleList";
// import Calendar from "../../components/CalendarModule/Calendar"
import Calendar from "../../components/Calendar/Calendar"
import './Schedule.css'

export default function Schedules () {
    return (
        <div className="schedule--container">
            <Calendar />
            <ScheduleList />
        </div>
    )
}