import { useState } from "react";
const UserComponent =(props)=>{
    const [count,setCount] = useState(0)
    return <div className="user-card">
        <h1>Count: {count}</h1>
        <h2>Name: {props.name}</h2>
    </div>

}
export default UserComponent;