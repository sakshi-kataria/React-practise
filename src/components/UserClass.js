import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props.name,"Child constructor");
        this.state={githubData:{}}
    }
    componentDidMount(){
        this.timer = setInterval(()=>{console.log("componentDidMount interval");},1000)
        console.log("Child componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }
    render(){
        console.log(this.props.name,"Child render");
        const {name} = this.props;
        return <div className="user-card">
            <h2>Name: {this.state.githubData.login}</h2>
            <img src={this.state.githubData.avatar_url}></img>
        </div>
    }
}
export default UserClass;