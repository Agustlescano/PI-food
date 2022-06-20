import {Link} from "react-router-dom";


const Landing = () => {
    
    return (
        <div className="landing">
        <h1>Welcome to the Landing Page</h1>
        <Link to="/Home">Home</Link>
        </div>
    )
}


export default Landing;