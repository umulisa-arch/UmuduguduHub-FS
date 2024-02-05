import React from "react";
import "./resetemail.css";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { notify } from "../utils/Notify";

function NewPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { token, id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const updatePassword = async () => {
    setLoading(true);

    if (password === cPassword) {
      await axios
        .put("http://localhost:4000/api/UH/v1/user/auth/updatepassword", {
          email,
          newPassword:password,
          confirmPassword:cPassword
        })
        .then((res) => {
          notify("success", "Password updated successfully!");
          setEmail("");
          setPassword("");
          setCPassword("");
          navigate("/login");
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          notify("error", "Fail to update password!");
        });
    }else{
      notify("error", "Password not match!");
      setLoading(false)
    }
  };

  return (
    <div>
      <h3 data-aos="fade-down">
        Enter new password to reactivate your account
      </h3>
      <form data-aos="fade-up" className="newpassword">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          className="resetinput"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="newPassword">Password</label>
        <br />
        <input
          type="password"
          name="emailReset"
          className="resetinput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="newPassword">Password</label>
        <br />
        <input
          type="password"
          name="emailReset"
          className="resetinput"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
          required
        />
        <button type="button" className="reset-send" onClick={updatePassword}>
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}

export default NewPassword;
