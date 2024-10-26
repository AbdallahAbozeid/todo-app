"use client"
import React from "react";
interface TaskProps {
    id: string;
    completed: boolean;
    text: string;
    moveup: (id: string) => void;
    movedown: (id: string) => void;
    deleteTask: (id: string) => void;
    doneHandler: (id: string, completed: boolean) => void;
}
const Task: React.FC<TaskProps> = ({ id, completed, text, moveup, movedown, deleteTask, doneHandler }) => {

    return (
        <li className="task ">
            <p className={(completed ? "done" : "running") + " txt"}
                onDoubleClick={() => doneHandler(id, completed)}>
                {text}
            </p>
            <span>
                <button className="btn up mov-btn" onClick={() => moveup(id)}>🔺</button>
                <button className="btn danger rmv-btn" onClick={() => deleteTask(id)}>❌</button>
                <button className="btn down mov-btn" onClick={() => movedown(id)}>🔻</button>
            </span>
        </li>
    )
}


export default Task;