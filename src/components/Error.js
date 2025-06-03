import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err= useRouteError();
    return(
        <div>
            <h1>Oops !!! Something went wrong</h1>
            <h2>{err?.error?.message}</h2>
        </div>
    )
}

export default Error;