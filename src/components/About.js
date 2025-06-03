import UserClass from './UserClass';
import UserComponent from './User'
const About = () =>{
    return(
        <div>
            <h1>About us</h1>
            <h2>This is React learning project</h2>
            <UserComponent name={"Sakshi kataria"}/>
            <UserClass 
                name={"Sakshi"}
                location={"Bangalore"}
                contact={"@sakshikataria"}
            />
        </div>
    );
}
export default About;