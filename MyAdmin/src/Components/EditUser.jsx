import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Modal from "./modal/Modal";
import { notify } from "./utils/Notify";
// import '../Pages/Register.css'
import "./editUser.css";
import { MdCancelPresentation } from "react-icons/md";

 function EditUser({
  open,
  handleClose,
  data,
  setData,
  fetchUsers,
}) {
  const [updating, setUpdating] = useState(false);

  const { handleSubmit } = useForm();
  const onUpdate = async () => {
    const updates = {
      id:data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      nationalId: data.nId,
      phoneNumber: data.phoneNumber,
      email: data.email,
      role: data.role,
      residenceInfo: {
        discrict: data.district,
        sector: data.sector,
        cell: data.cell,
        village: data.village,
      },
      maritalStatus: data.status,
    };

    setUpdating(true);
    await axios
      .put("http://localhost:4000/api/UH/v1/user/crud/update", updates)
      .then((res) => {
        setUpdating(false);
        handleClose();
        fetchUsers();
        notify("success", "User updated successfully!!!!");
        console.log(res);
      })
      .catch((error) => {
        setUpdating(false);
        notify("error", "failed to update user");
      });
  };

  return (
    <div
      style={{
        display: "block",
        // padding: 10,
        margin: "auto",
        zIndex: 1000,
      }}
    >
      <Modal isOpen={open} onClose={handleClose} className="customModal">
        <>
          <div>
           
            {/* <h2 className="heading-edit-user" data-aos="fade-down">
              Update user
            </h2> */}
            <form onSubmit={handleSubmit(onUpdate)} className="user-edit-form">
              <h3 className="">Personal information</h3> <br />
              <div className="">
                <div className="">
                  {" "}
                  <label id="fname">First Name:</label> <br />
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="reg-input"
                    value={data?.firstName}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="">
                  <label id="Mname">Last Name:</label>
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="reg-input"
                    value={data?.lastName}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                  />
                </div>

                <div className="">
                  <label id="email">Email:</label> <br />
                  <input
                    type="email"
                    name="email"
                    required
                    className="reg-input"
                    value={data?.email}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="">
                <div className="reg-id">
                  <label id="NI">National ID:</label> <br />
                  <input
                    type="number"
                    name="nationalId"
                    required
                    className="reg-input2"
                    value={data?.nId}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, nId: e.target.value }))
                    }
                  />
                </div>

                <div className="">
                  <label id="Fnbr">Phone Number:</label> <br />
                  <input
                    type="text"
                    name="phone"
                    className="reg-input2"
                    value={data?.phoneNumber}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                  />
                </div>

                {/* <div className="">
                  <label id="date">Date of birth:</label> <br />
                  <input type="date" name="DOB" className="reg-dob" />
                </div> */}
              </div>{" "}
              <br />
              <h3 className="">Role :</h3>
              <div id="role">
                <div className="adminoption">
                  <label for="Admin">Admin:</label>
                  <input
                    type="radio"
                    name="opt"
                    value="admin"
                    checked={data.role === "admin"}
                    onClick={() =>
                      setData((prev) => ({ ...prev, role: "admin" }))
                    }
                  />
                </div>

                <div className="useroption">
                  <label for="User">User:</label>
                  <input
                    type="radio"
                    name="opt"
                    value="user"
                    id="user"
                    className="useropt"
                    checked={data.role === "user"}
                    onClick={() =>
                      setData((prev) => ({ ...prev, role: "user" }))
                    }
                  />
                </div>
              </div>
              <h3 className="h4-residence">Current Resident:</h3>
              {/* <div className="part3-register-5"> */}
                <div className="akarere">
                  <label id="dis">District :</label> <br />
                  <input
                    type="text"
                    id="district"
                    name="district"
                    required
                    className="reg-input3"
                    value={data?.district}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, district: e.target.value }))
                    }
                  />
                </div>

                <div className="sector">
                  <label id="sec"> Sector :</label> <br />
                  <input
                    type="text"
                    id="sector"
                    name="sector"
                    className="reg-input3"
                    value={data?.sector}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, sector: e.target.value }))
                    }
                  />
                </div>
              {/* </div> */}
              {/* <div className="part4-register"> */}
                <div className="cell">
                  <label id="cel">Cell :</label> <br />
                  <input
                    type="text"
                    id="cell"
                    name="cell"
                    className="reg-input4"
                    value={data?.cell}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, cell: e.target.value }))
                    }
                  />
                </div>

                <div className="village">
                  <label id="ville">Village :</label> <br />
                  <input
                    type="text"
                    className="reg-input4"
                    value={data?.village}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, village: e.target.value }))
                    }
                  />
                </div>
                <br />
                <br />
              {/* </div> */}
              <div id="marital">
                <h4> Marital Status :</h4>
                <div className="maritaloption">
                  <input
                    type="radio"
                    name="option"
                    value="single"
                    id="single"
                    checked={data?.status === "single"}
                    onClick={() =>
                      setData((prev) => ({ ...prev, status: "single" }))
                    }
                  />
                  <label for="Single">Single:</label>
                </div>
                <div className="maritaloption">
                  <input
                    type="radio"
                    name="option"
                    value="married"
                    id="married"
                    className="marriedopt"
                    checked={data.status === "married"}
                    onClick={() =>
                      setData((prev) => ({ ...prev, status: "married" }))
                    }
                  />
                  <label for="Married">Married:</label>
                </div>
              </div>
              <br />
              <button type="submit" className="edit-user-btn">
                {updating ? "Updating..." : "Update"}
              </button>
              <div className="cancel-update-user" onClick={handleClose}>  <MdCancelPresentation size={20} /> Cancel</div>
            </form>
          </div>
        </>
      </Modal>
    </div>
  );
}
export default EditUser;