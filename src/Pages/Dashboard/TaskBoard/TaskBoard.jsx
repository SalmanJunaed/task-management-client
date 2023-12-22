import { useState } from "react";
import useTask from "../../../hooks/useTask";
import Taskdata from "./Taskdata";

const TaskBoard = () => {
    const [task] = useTask();
    // console.log(task);

    const [isDragging, setIsDragging] = useState(false)
    const [draggedList, setDraggedList] = useState([]);

    const handleDragOver = (event) =>{
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragStart = (event) =>{
        event.dataTransfer.setData("_id", event.currentTarget._id)
    }
    const handleDrop = (event) =>{
        event.preventDefault();
        const id = event.dataTransfer.getData("_id");
        const item = task.find(x => x.id == id);
        if(item){
            setDraggedList ([...draggedList, item]);
            setIsDragging(false);
        }
    }
    const targetClassName =`p-4 mt-4 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60 ${isDragging ? "border-black" : "border-indigo-200"}`
    return (
        <div>
            <h1 className='text-2xl text-center'> Task Board </h1>
            <h2 className="text-xl text-center">Total task:{task.length}</h2>
            <div className="grid grid-cols-3 gap-1">
                <div className="p-4 mt-5 bg-white rounded-md shadow-lg">
                {/* to-do  */}
                    <h1 className="text-xl">to-do</h1>
                    <ul className="divider"></ul>
                    <ul className="list-none p-0 m-0 bg-indigo-200 border border-indigo-300">
                        {/* <li>Task data</li> */}
                        {task.map(item => <Taskdata 
                            key={item._id}
                            item={item}
                            onDragStart={handleDragStart}
                            >   
                            </Taskdata> )
                        }

                        {/* {task.map(item => {
                            return <li key={item._id} ></li>
                        })} */}
                    </ul>
                </div>
                <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleDrop}>
                {/* ongoing */}
                    <h1 className="text-xl">ongoing</h1>
                    <ul className="divider"></ul>
                    <ul>
                        {/* <li>Task data</li> */}
                        {draggedList.map(item => <Taskdata key={item._id} item={item}></Taskdata> )
                        }

                        {/* {task.map(item => {
                            return <li key={item._id} ></li>
                        })} */}
                    </ul>
                </div>
                <div className={targetClassName} onDragOver={handleDragOver}>
                {/* completed */}
                    <h1 className="text-xl">completed</h1>
                    <ul className="divider"></ul>
                    <ul>
                        {/* <li>Task data</li> */}
                        {draggedList.map(item => <Taskdata key={item._id} item={item}></Taskdata> )
                        }

                        {/* {task.map(item => {
                            return <li key={item._id} ></li>
                        })} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskBoard;