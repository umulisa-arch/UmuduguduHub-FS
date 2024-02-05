import "./User.css";
import { Link } from "react-router-dom";
// import { IoIosSearch } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import EditUser from "../Components/EditUser";

function User() {
  const [users, setUsers] = useState([]);
  // const [search, setSearch] = useState("");
  const [records, setRecords] = useState([])
  const [openEdit, setOPenEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nId: "",
    phoneNumber: "",
    dOB: "",
    role: "",
    district: "",
    sector: "",
    cell: "",
    village: "",
    status: "",
  });

  const handleDelete = (id) => {
    // ask user to confirm delete
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) {
      return;
    }

    fetch(`http://localhost:4000/api/UH/v1/user/crud/delete/?id=${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        setUsers(users.filter((user) => user._id !== id));

        alert("User deleted successfully");
      } else {
        alert("Failed to delete user");
      }
    });
  };

  //this is code for searching user
  // const handleSearch = async()=>{
  //   const res  = await fetch(
  //     `http://localhost:4000/api/UH/v1/user/crud/find/?nationalId=${search}`
  //   );
  //   const data = await res.json();
  //   if(data.data !== null){
  //     setUsers([data.data]);
  //   }else{
  //     setUsers([]);
  //   }
  // };
  

  

  const fetchUsers = () => {
    fetch("http://localhost:4000/api/UH/v1/user/crud/all")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.allUser);
        setRecords(data.allUser);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleEdit = () => {
    setOPenEdit(!openEdit);
  };
  console.log("data to be editted", userToEdit);

 const Filter = (event) => {
  const searchText = event.target.value.toLowerCase();

  setRecords(users.filter(user => 
    user.firstName.toLowerCase().includes(searchText) ||
    user.lastName.toLowerCase().includes(searchText)
  ));
}
  return (
    <>
      <EditUser
        open={openEdit}
        handleClose={handleEdit}
        data={userToEdit}
        setData={setUserToEdit}
        fetchUsers={fetchUsers}
        // handleSearch={handleSearch}
      />
      <div className="user-container">
        <h2 data-aos="fade-right" className="h2user">
          USER MANAGEMENT
        </h2>
        <div>
          <br />
          <div className="search-container">
            <input
              className="input"
              type="text"
              name="searchUser"
              id="searchUsers"
              placeholder="Search user..."

              onChange={Filter}
              
            />
            <span className="search-icon">
              {/* <IoIosSearch size={20} /> */}
            </span>
          </div>
          <br />
        </div>
        <div>
          <table>
            <thead>
              <tr data-aos="fade-up">
                <th>UserID</th>
                <th>firstName</th> 
                <th>lastNames</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                records.map((user, index) => (
                  <tr data-aos="fade-up" key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                      <div className="actions-icon">
                        <Link style={{ color: "blue" }}>
                          <MdModeEdit
                            style={{ fontSize: "20px" }}
                            onClick={() => {
                              handleEdit(user._id);
                              setUserToEdit((prev) => ({
                                ...prev,
                                id: user._id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                nId: user.nationalId,
                                role: user.role,
                                phoneNumber: user.phoneNumber,
                                district: user.residenceInfo.discrict,
                                sector: user.residenceInfo.sector,
                                cell: user.residenceInfo.cell,
                                village: user.residenceInfo.village,
                                status: user.maritalStatus,
                              }));
                            }}
                          />
                        </Link>
                        <FiDelete
                          style={{
                            color: "red",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDelete(user._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No user found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default User;
