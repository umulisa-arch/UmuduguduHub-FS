import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToasterComponent } from "./Components/Toast";  // import toast component
import 'react-toastify/dist/ReactToastify.css'; //import toast css
import Register from "./Pages/Register";
import Announcement from "./Pages/Annoucement";
import Users from "./Pages/User";
import Citizen from "./Pages/Citizen";
import Generatereport from "./Pages/GenerateReport";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import "aos/dist/aos.css";

import ViewPage from "./Pages/ViewPage";
import Edit from "./Pages/Edit-user";
import EditCitizen from "./Pages/EditCitizen";
// import AOS from 'aos';

function App() {
  return (
    <>
      <div className="div1"></div>
      <ToasterComponent /> {/** Use imported toast component */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Generatereport />} />
            <Route path="/register" element={<Register />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/users" element={<Users />} />
            <Route path="/citizen" element={<Citizen />} />
            <Route path="/admindashboard" element={<Dashboard />} />

            {/* <Route path="/test" element={<Test/>}/> */}
            {/* <Route path="/view-page" element={<ViewPage />} />
            <Route path="/edit-user" element={<Edit />} />
            <Route path="/edit-citizen" element={<EditCitizen />} /> */}
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
