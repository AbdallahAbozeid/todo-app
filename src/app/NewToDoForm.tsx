"use client"

import { useState } from "react";

function NewToDoForm({addTask}){
    const [newTask,setNewTask]=useState<string>("");
    
    function newTaskHandler(e){
        e.preventDefault();
        addTask(newTask);
        // addTask(newTask);
        setNewTask("");
        }
    
        return(
    <form className="input-container" onSubmit={newTaskHandler}>
        {/* <label htmlFor="newItem">New Task</label> */}
        <input type="text" name="newItem" id="newItem" value={newTask} onChange={(e)=>{
            setNewTask(()=>e.target.value);}}></input>
        <input type="submit" value="Add" className="btn add-btn"></input>
    </form>
)
}

export default NewToDoForm;