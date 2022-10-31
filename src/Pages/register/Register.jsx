import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="Register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Fullname" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Link Social.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
