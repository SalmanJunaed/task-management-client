import { Link } from "react-router-dom";


const Taskdata = ({item}) => {
    // const {title, description, date} = item;
    console.log(item)
    return (
            <li draggable={true}  className=" py-4 bg-slate-200 border-indigo-300 p-4 mb-2 cursor-move">
                <p>{item.title}</p>
                <p>{item.deadline}</p>
                <p>{item.description}</p>
                <Link className="btn btn-sm bg-gray-300 text-red-500">Remove</Link>
                <button className="btn btn-sm">Edit</button>
            </li>
    );
};

export default Taskdata;