import { useEffect, useState } from "react";
const UserComponent =(props)=>{
    const [count, setCount]= useState(0);
    const [count2, setCount2]= useState(2);

    useEffect(()=>{
        console.log('Count 1 is updated', count);
    },[count])
    useEffect(()=>{
        console.log('Count 2 is updated', count2);
    },[count2])
    const onButtonClick=()=>{
        setCount(count+1);
        if(count>5){
            setCount2(count2+2)
        }
    }
    return <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count: {count2}</h1>
        <button onClick={onButtonClick}>Click ME</button>
        <h2>Name: {props.name}</h2>
    </div>

}
export default UserComponent;