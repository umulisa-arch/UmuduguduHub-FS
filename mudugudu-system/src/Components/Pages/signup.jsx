import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { notify } from "../utils/Notify";
import "./login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const navigate = useNavigate();

  const { handleSubmit } = useForm();

  const handleSignup = async () => {
    console.log("Saving data to database...");
    if (password === cPassword) {
      const data = {
        email,
        password,
      };
      await axios
        .put("http://localhost:4000/api/UH/v1/user/auth/signup", data)
        .then((res) => {
          console.log("Signup response", res);
          navigate("/login");
          setEmail("");
          notify("success", "Account created successfully");
          setPassword("");
          setCPassword("");
        })
        .catch((error) => {
          notify("error", error.response.data.message);
          console.log("Error in signup!!", error);
        });
    } else {
      console.log("Invalid password confirmation ");
      notify("error","Invalid password confirmation")
    }
  };

  return (
    <>
      {/* Message to be displayed */}
      {/* <div className="signup-success">Account created succefully!!!</div>
      <br />
      <div className="signup-fail">Account creation failed!!!</div> */}

      <div className="mainlogin">
        {/* <div className="newdiv">
      <h1 className='welcome'>Welcome to Umudugudu-Hub Sign Up  Page</h1>
      <p className='p1'>
        Please create account  to continue with the system
      </p>
      
    </div> */}

        <div className="container1">
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="header">
              <div className="text">Sign Up </div>
              <div className="underline"></div>
            </div>

            {/* <div className='names'><label htmlFor="names">Names</label></div> */}
            <div className="inputs">
              {/* <div className="input">
            
            <input type="text" name="names" id="" placeholder='Names...' required/>

     </div> */}
              {/* <div className='user'><label htmlFor="username">Username</label></div> */}
              {/* <div className="input">
            
            <input type="text" name="username" id="" placeholder='Username...' required/>

     </div> */}
              <div className="email">
                <label htmlFor="email">Email</label>
              </div>
              <div className="input">
                <input
                  type="email"
                  value={email}
                  name="email"
                  id=""
                  placeholder="Email..."
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
              </div>
              <div className="input">
                <input
                  type="password"
                  value={password}
                  name="password"
                  id=""
                  placeholder="Password..."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="confirmpassword">
                <label htmlFor="confirmpassword">Confirm password</label>
              </div>

              <div className="input">
                <input
                  type="password"
                  value={cPassword}
                  name="password"
                  id=""
                  placeholder="Confirm password..."
                  onChange={(e) => setCPassword(e.target.value)}
                  required
                />
              </div>
              <div className="submit-container">
                <div>
                  {/* <Link to="/login"> <button type='submit' className='btn1'>SignUp</button></Link> */}
                  <button type="submit" className="btn1">
                    SignUp
                  </button>
                </div>
              </div>
            </div>
            <div className="haveAccount">
              Already have an account?
              <a href="login">
                <span>Click here to login</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
