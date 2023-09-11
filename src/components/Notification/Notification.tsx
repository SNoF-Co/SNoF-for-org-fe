import React from "react";
import "./notification.css"

interface Props{
    tasks: object[]
}

interface tasks{
    text: string
}

const Notifications:React.FC<Props> = ({tasks})=>{
    return(
        <>
            {tasks ?  tasks.map((task:any)=>{
                return (

                    <div className="notification">

                    
                        <p>It's remaining for {task.text}</p>
                        <h3 style={{cursor:"pointer"}}>tap for more</h3>
                
                    </div>
                    )
                     
            }): (
                <h3>There are no notifications</h3>
            )}
        </>
    )
}

export default Notifications

