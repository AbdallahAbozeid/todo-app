"use client"


function Task({ id, completed, text, moveup, movedown, deleteTask, doneHandler }) {

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