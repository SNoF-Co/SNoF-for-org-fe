import React from "react";
import "./schedule.css"
import "../Modal/modal.css"
import moreDots from "../../assets/three-dots.svg"
import Modal from "../Modal/Modals";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props{
    tasks: task
}
interface task{
    id: string,
    time: string,
    task:string,
    duration:string
}

const Schedule:React.FC<Props> = ({tasks})=>{
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const toastMessage = () => {
      toast.success("Action completed", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    };
    const closeModal = () => {
    //   toastMessage();
      setIsOpen(false);
    };
    return(
       <>

            < div className="task">
                <h3 className="taskTime">  <hr /></h3>
                <div className="single-task" style={{display:'block'}}>

                <h4 style={{display:'flex',justifyContent:'space-evenly'}}>Lunch with workers</h4>
                <h6 style={{textAlign:'center'}}>19H00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
            </div>
        </>
           
    )
}

export default Schedule