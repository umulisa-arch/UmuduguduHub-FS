import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { notify } from "../utils/Notify";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleSubmit } = useForm();

  const handleLogin = async () => {
    setLoading(true);
    const data = {
      email,
      password,
    };
    console.log("Data before login....", data);
    await axios
      .post("http://localhost:4000/api/UH/v1/user/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log("Response from login", res);
        notify("success", "Logged in successfully!");
        setLoading(false);

        const { firstName, lastName, role, email } = res.data.user;
        const userInfo = { firstName, lastName, role, email };

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        if (res.data.user.role === "admin") {
          window.location.href = `http://localhost:5173/?token=${res.data.token}&role=${role}&email=${email}`;
        }
        if (res.data.user.role === "user") {
          // to be done when role is user

          window.location.href = `http://localhost:5175/?token=${res.data.token}&role=${role}&email=${email}`;
        }
      })
      .catch((error) => {
        console.log("Error in login", error);
        setLoading(false);
        notify(
          "error",
          typeof error.response.data.message === "string"
            ? error.response.data.message
            : "Invalid credentials"
        );
      });

    // let url = "http://localhost:5173/";
    // window.location.href = url;

    // to be done when role is user
    // let url2 = "http://localhost:5176/";
    // window.location.href = url2;
  };

  return (
    <div className="mainlogin">
      {/* <div className="newimage">
       
      <h1 className='welcome'>Welcome to Umudugudu-Hub Login Page</h1>
      <p className='p1'>
        Please log into the system in order to continue with us
      </p>
      
    </div> */}
      <div className="container">
        <form onSubmit={handleSubmit(handleLogin)} >
          <div className="header">
            <div className="text">Login </div>
            <div className="underline"></div>
          </div>
          <div className="username">
            <label htmlFor="username">Email</label>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="email"
                name="username"
                value={email}
                id=""
                placeholder="Username..."
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>{" "}
            <br />
            <div className="password">
              <label htmlFor="password">Password</label>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                value={password}
                id=""
                placeholder="Password..."
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <div>
              <button type="submit" className="btn">
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </div>
          <div className="forgot-password">
            Forget your password?
            <Link to="/reset-password">
              <span>Click here</span>
            </Link>
          </div>
          <div className="dont-have-account">
            Don&apos;t have account?
            <a href="signup">
              <span>Click here to Sign Up</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
