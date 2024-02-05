import React, { useState } from "react";
import "./resetemail.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";
import { Link } from "react-router-dom";
import { notify } from "../utils/Notify";

function ResetEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:4000/api/UH/v1/user/auth/forgotpassword", {
        email,
      })
      .then((res) => {
        console.log("Success->", res);
        setLoading(false);
        notify("success", `reset password link sent to ${email}`)
      })
      .catch((error) => {notify("error", "Fail to update password");setLoading(false);});
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <h3 data-aos="fade-down">
        Enter your email you will <br /> receive link via your email to reset
        password
      </h3>
      <form data-aos="fade-up" className="reset-form">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="emailReset"
          className="resetinput"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <Link to="/new-password"> */}
          {" "}
          <button type="button" className="reset-send" onClick={handleReset}>
           {loading?"Sending...":"Send"} 
          </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default ResetEmail;
