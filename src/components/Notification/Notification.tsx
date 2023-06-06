import React from "react";
import "./notification.css"

interface Props{
    tasks: object[]
}

interface tasks{
    text: string
}

const Notifications:React.FC<Props> = ({tasks})=>{
    let numberofCount = 0
    return(
        <>
            {tasks ?  tasks.map((task:any)=>{
                numberofCount++;
                if(numberofCount>3)return null
                console.log(task)
                return (
                    <div className="notification">
                     <h3>It's remaining for {task.title}</h3>
                    </div>)
                     
            }): (
                <h3>There are no notifications</h3>
            )}
        </>
    )
}

export default Notifications

