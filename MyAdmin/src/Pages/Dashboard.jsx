import React from "react";
import "./admindash.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useSearchParams } from "react-router-dom";

function Dashboard() {
  let [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const role = searchParams.get("role");
  // const firstName = searchParams.get("firstName")
  const userInfo = { email, role };
  console.log("I love you agnes",{token,
    email,
    role})

  useEffect(() => {
    if (token !== "" && role === "admin") {
      
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      window.location.href = "http://localhost:5174/login";
    }
  }, []);

  useEffect(() => {
    if (token !== "" && role === "admin") {
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      window.location.href = "http://localhost:5174/login";
    }
  }, [role, token]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div>
        <h2 data-aos="fade-down" className="h2dashpage">
          Welcome to{" "}
        </h2>
        <h1 data-aos="fade-up" className="h1dashpage">
          UMUDUGUDU-HUB
        </h1>
      </div>
    </>
  );
}
export default Dashboard;
