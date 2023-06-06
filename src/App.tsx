import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
import { Home } from "./pages/Home/home";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import Sample from "./pages/Sample";
import "./App.css";
import Analytics from "./pages/Analytics/analytics";
import DashBoard from "./pages/DashBoard";
import Schedule from "./pages/Schedule/Schedule";
import Feedback from "./pages/Feedback/Feedback";
import PlayerV from "./components/Videos/videoPlayer";
import Shower from "./components/Images/imageShower";
import Settings from "./pages/Settings";
import Help from "./pages/Help/Help";
import Logout from "./pages/Logout/Logout";
import Navbar from "./components/Navbar/Navbar";

function App() {

  interface Task {
    id: number;
    text: string;
    time: string;
    duration: string;
  }

  const [tasks,setTasks] = useState<Task[]>([
    {
         id: 0,
         text:'Board meeting',
         time:'10:20PM',
         duration:'10:20PM to 11:00PM'
    },
    {
        id: 1,
        text:'taking lunch',
        time:'10:20PM',
        duration:'10:20PM to 11:00PM'
   },
   {
    id: 2,
    text:'Interviewing other members',
    time:'10:20PM',
    duration:'10:20PM to 11:00PM'
}
])

const singleTask =   {
  text:'Board meeting',
  time:'10:20PM',
  duration:'10:20PM to 11:00PM'
}

const [activateSideBar,setActivateSideBar] = useState(true)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Sample><DashBoard username='Mubaraka Sh.' activateSideBar={activateSideBar}/></Sample>}/>
        <Route path="/analytics" element={<RegisterPage />}/>
         <Route path="/schedule" element={<Sample><Schedule tasks={singleTask}/></Sample>}/>
       <Route path="/feedback" element={<Sample><FeedbackPage/></Sample>} />
        <Route path="/help" element={<Sample><Help/></Sample>} />
        <Route path="/settings" element={<Sample><Settings/></Sample>} />
        <Route path="/logout" element={<Sample><Logout/></Sample>} />
      </Routes>
    </Router>
)}

export default App;
