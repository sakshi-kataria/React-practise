import React from 'react';
import UserComponent from './User';
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
            <div>
                <h1>About us</h1>
                <UserComponent name={"Sakshi 11111"} />
            </div>
        );
    }
}
export default About;