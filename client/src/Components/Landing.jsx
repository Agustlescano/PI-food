import { Link } from "react-router-dom";
import "./estilos/Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <h1>Welcome to the Landing Page</h1>
      <Link className="link" to="/Home">
        Home
      </Link>
    </div>
  );
};

export default Landing;
