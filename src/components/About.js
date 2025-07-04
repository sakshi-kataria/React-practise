import React from 'react';
import UserComponent from './User';
import UserContext from '../Utils/userContext';
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor");
    }
    componentDidMount(){
        // console.log("parent componentDidMount");
    }
    
    render(){
        // console.log("Parent render");
        return(
            <div className='m-20 shadow-lg p-10 rounded-4xl border'>
                <div className= "flex flex-wrap gap-2 ">
                    logged in User: 
                    <UserContext.Consumer>
                        {(data)=><div>{data.loggedInUser}</div>}
                    </UserContext.Consumer>
                </div>
                <h1>About us</h1>
                <UserComponent name={"Sakshi 11111"} />
            </div>
        );
    }
}
export default About;